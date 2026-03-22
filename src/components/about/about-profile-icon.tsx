import { cn } from "@/lib/utils";

export type AboutProfileIconName = "supply" | "headset" | "cattle";

const INDEX: Record<AboutProfileIconName, number> = {
  supply: 0,
  headset: 1,
  cattle: 2,
};

/** Full vertical sprite (220×812) — avoids bad per-row crops that left 2 icons blank. */
const SPRITE_SRC = "/media/about/profile-icons-sprite.png";
const SPRITE_NATURAL_W = 220;
const SPRITE_NATURAL_H = 812;

export function AboutProfileIcon({
  name,
  className,
}: {
  name: AboutProfileIconName;
  className?: string;
}) {
  const index = INDEX[name];
  const widthPx = 56;
  const scaledH = (SPRITE_NATURAL_H * widthPx) / SPRITE_NATURAL_W;
  const slotH = scaledH / 3;

  return (
    <div
      className={cn("profile-icon-shell shrink-0", className)}
      style={{ width: widthPx, height: slotH }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-md bg-[#eef2f5]">
      {/* eslint-disable-next-line @next/next/no-img-element -- local sprite strip */}
      <img
        src={SPRITE_SRC}
        alt=""
        draggable={false}
        className="max-w-none select-none"
        style={{
          width: widthPx,
          height: scaledH,
          transform: `translateY(-${(index * 100) / 3}%)`,
        }}
      />
      </div>
    </div>
  );
}
