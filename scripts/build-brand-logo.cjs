/**
 * Strips matte/white around the impexfeed mark and writes
 * public/media/brand/impexfeed-logo.png (transparent).
 *
 * Usage:
 *   node scripts/build-brand-logo.cjs <path-to-source.png>
 *   node scripts/build-brand-logo.cjs --preserve-color <path-to-source.png>
 *
 * Default: recolor ink to site --brand. With --preserve-color: keep original logo RGB.
 */
const sharp = require("sharp");
const path = require("path");

const OUTPUT = path.join(__dirname, "../public/media/brand/impexfeed-logo.png");
const INK_R = 0x23;
const INK_G = 0x4a;
const INK_B = 0x35;

function avgRegion(data, w, h, c, x0, y0, rw, rh) {
  let sr = 0;
  let sg = 0;
  let sb = 0;
  let n = 0;
  const y1 = Math.min(y0 + rh, h);
  const x1 = Math.min(x0 + rw, w);
  for (let y = Math.max(0, y0); y < y1; y++) {
    for (let x = Math.max(0, x0); x < x1; x++) {
      const i = (y * w + x) * c;
      sr += data[i];
      sg += data[i + 1];
      sb += data[i + 2];
      n++;
    }
  }
  return [sr / n, sg / n, sb / n];
}

function cornerBackground(data, w, h, c) {
  const sample = Math.min(20, Math.floor(w / 8), Math.floor(h / 3));
  const regions = [
    avgRegion(data, w, h, c, 0, 0, sample, sample),
    avgRegion(data, w, h, c, w - sample, 0, sample, sample),
    avgRegion(data, w, h, c, 0, h - sample, sample, sample),
    avgRegion(data, w, h, c, w - sample, h - sample, sample, sample),
  ];
  return regions.reduce(
    (acc, p) => [acc[0] + p[0], acc[1] + p[1], acc[2] + p[2]],
    [0, 0, 0],
  ).map((v) => v / 4);
}

function distRgb(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

/** Softer fringe removal on near-white mattes; tighter on cream cards. */
function keyStrengthForBg(bg) {
  const lum = 0.299 * bg[0] + 0.587 * bg[1] + 0.114 * bg[2];
  const chroma =
    Math.max(bg[0], bg[1], bg[2]) - Math.min(bg[0], bg[1], bg[2]);
  if (lum > 250 && chroma < 6) {
    return { hard: 32, soft: 82 };
  }
  if (lum > 245 && chroma < 22) {
    return { hard: 26, soft: 68 };
  }
  return { hard: 22, soft: 58 };
}

function foregroundBounds(data, w, h, c, bg, threshold) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = 0;
  let maxY = 0;
  let count = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * c;
      const px = [data[i], data[i + 1], data[i + 2]];
      if (distRgb(px, bg) > threshold) {
        count++;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }
  return { minX, minY, maxX, maxY, count };
}

function keyBackground(d, w, h, ch, bg, hard, soft) {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * ch;
      const px = [d[i], d[i + 1], d[i + 2]];
      const dd = distRgb(px, bg);
      let a = d[i + 3];
      if (dd <= hard) {
        a = 0;
      } else if (dd < soft) {
        a = Math.round(a * ((dd - hard) / (soft - hard)));
      }
      d[i + 3] = a;
    }
  }
}

function keyAndRecolor(d, w, h, ch, bg, hard, soft) {
  keyBackground(d, w, h, ch, bg, hard, soft);
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] === 0) continue;
    d[i] = INK_R;
    d[i + 1] = INK_G;
    d[i + 2] = INK_B;
  }
}

(async () => {
  const preserveColor = process.argv.includes("--preserve-color");
  const input = process.argv
    .slice(2)
    .filter((a) => a !== "--preserve-color")[0];
  if (!input) {
    console.error(
      "Usage: node scripts/build-brand-logo.cjs [--preserve-color] <source.png>",
    );
    process.exit(1);
  }

  const full = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const fw = full.info.width;
  const fh = full.info.height;
  const fc = full.info.channels;
  const fullBg = cornerBackground(full.data, fw, fh, fc);
  const bounds = foregroundBounds(full.data, fw, fh, fc, fullBg, 38);
  if (bounds.count < 50) {
    console.error("Could not detect logo (too few foreground pixels).");
    process.exit(1);
  }

  const pad = 8;
  const left = Math.max(0, bounds.minX - pad);
  const top = Math.max(0, bounds.minY - pad);
  const width = Math.min(fw - left, bounds.maxX - bounds.minX + 1 + pad * 2);
  const height = Math.min(fh - top, bounds.maxY - bounds.minY + 1 + pad * 2);

  const { data, info } = await sharp(input)
    .extract({ left, top, width, height })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const ch = info.channels;
  const d = new Uint8ClampedArray(data);
  const cropBg = cornerBackground(d, w, h, ch);
  const { hard, soft } = keyStrengthForBg(cropBg);
  if (preserveColor) {
    keyBackground(d, w, h, ch, cropBg, hard, soft);
  } else {
    keyAndRecolor(d, w, h, ch, cropBg, hard, soft);
  }

  const pngBuf = await sharp(Buffer.from(d), {
    raw: { width: w, height: h, channels: 4 },
  })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();

  await sharp(pngBuf)
    .trim({ threshold: 4 })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(OUTPUT);
  const meta = await sharp(OUTPUT).metadata();
  console.log("Wrote", OUTPUT, `${meta.width}x${meta.height}`);
})();
