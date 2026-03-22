import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const photoPanelTitleClass =
  "text-2xl font-serif text-balance text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.88),0_2px_18px_rgba(0,0,0,0.45)]";

export const photoPanelBodyClass =
  "text-sm leading-7 text-white/88 [text-shadow:0_1px_2px_rgba(0,0,0,0.75)]";

export const photoPanelEyebrowClass =
  "text-xs font-semibold uppercase tracking-[0.22em] text-[#d8f08a] [text-shadow:0_1px_2px_rgba(0,0,0,0.85)]";

/** Photo-backed panel: same visual language as news cards (veil + readable type). */
export function PhotoPanelCard({
  image,
  tone = "dark",
  className,
  children,
}: {
  image: string;
  tone?: "dark" | "light";
  className?: string;
  children: ReactNode;
}) {
  const lightPhoto = tone === "light";

  return (
    <article
      className={cn(
        "relative flex min-h-[200px] flex-col overflow-hidden rounded-4xl border border-white/14 shadow-[0_22px_54px_rgba(14,26,17,0.12)]",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div
        className={
          lightPhoto
            ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(14,18,24,0.58)_0%,rgba(14,18,24,0.48)_32%,rgba(10,14,20,0.82)_72%,rgba(8,12,18,0.92)_100%)]"
            : "absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,10,0.58)_0%,rgba(8,12,10,0.38)_38%,rgba(6,10,8,0.72)_68%,rgba(4,8,6,0.9)_100%)]"
        }
        aria-hidden
      />
      <div
        className={
          lightPhoto
            ? "absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(0,0,0,0.28),transparent_55%),radial-gradient(circle_at_18%_22%,rgba(166,206,57,0.12),transparent_45%)]"
            : "absolute inset-0 bg-[radial-gradient(ellipse_130%_90%_at_50%_0%,rgba(0,0,0,0.35),transparent_52%),radial-gradient(circle_at_16%_18%,rgba(201,234,125,0.12),transparent_38%)]"
        }
        aria-hidden
      />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col p-6 sm:p-7">{children}</div>
    </article>
  );
}
