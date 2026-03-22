import type { IconName } from "@/types/content";

import { getBrandName } from "@/lib/branding";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

import { Icon } from "@/components/ui/icon";

const toneMap: Record<IconName, string> = {
  feed: "from-[#eff4ea] via-[#dde9d8] to-[#f7f3ea]",
  cattle: "from-[#eef3e8] via-[#d9e7d4] to-[#f2ede3]",
  poultry: "from-[#f0f3e9] via-[#e5e9d5] to-[#f8f4ec]",
  swine: "from-[#f4f0e8] via-[#e7dccd] to-[#faf7f0]",
  vet: "from-[#eff3ee] via-[#dde6e0] to-[#f7f4ef]",
  crop: "from-[#edf4e8] via-[#dce8d0] to-[#f5f2e8]",
  technology: "from-[#eef0ea] via-[#dfe4da] to-[#f8f5ed]",
  news: "from-[#f4f1ea] via-[#e8dfd3] to-[#fbf8f2]",
  lab: "from-[#edf0ed] via-[#d9e1db] to-[#f8f5ef]",
  contact: "from-[#f2f1ec] via-[#e3e0d7] to-[#fbf8f2]",
  arrow: "from-[#eef3e8] via-[#d9e7d4] to-[#f5f2ea]",
  plus: "from-[#eef3e8] via-[#dfe8da] to-[#f6f3ea]",
};

export function MediaPlaceholder({
  icon,
  title,
  description,
  chips,
  locale,
  decorative = false,
  className,
  heroImage,
}: {
  icon: IconName;
  title: string;
  description?: string;
  chips: string[];
  locale: Locale;
  decorative?: boolean;
  className?: string;
  /** Full-bleed photo (e.g. office) with scrim — replaces soft gradient when set */
  heroImage?: string;
}) {
  const brandName = getBrandName(locale);

  if (decorative) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br",
          toneMap[icon],
          className,
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.04)_30%,rgba(27,42,31,0.22)_100%)]" />
        <div className="absolute inset-x-[-12%] top-[-8%] h-[48%] rounded-[50%] bg-[radial-gradient(circle,rgba(255,247,220,0.62),rgba(255,247,220,0)_70%)] opacity-75 blur-2xl" />
        <div className="absolute left-[-8%] right-[-8%] bottom-[14%] h-[38%] rounded-[50%] bg-[linear-gradient(110deg,rgba(108,138,74,0.3),rgba(72,95,50,0.48))]" />
        <div className="absolute inset-x-[-10%] bottom-0 h-[46%] bg-[repeating-linear-gradient(112deg,rgba(114,133,75,0.14)_0,rgba(114,133,75,0.14)_18px,rgba(255,255,255,0.02)_18px,rgba(255,255,255,0.02)_68px)] opacity-90" />
        <div className="absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.22),rgba(255,255,255,0)_60%)]" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "media-placeholder-card group/media relative overflow-hidden rounded-[2rem] border p-5 sm:p-6",
        heroImage
          ? "border-white/20 shadow-[0_22px_54px_rgba(14,26,17,0.1)]"
          : cn("border-line bg-gradient-to-br", toneMap[icon]),
        className,
      )}
    >
      {heroImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,18,22,0.62)_0%,rgba(12,16,20,0.48)_45%,rgba(10,14,18,0.72)_100%)]"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.06)_28%,rgba(31,51,37,0.16)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[repeating-linear-gradient(100deg,rgba(114,126,84,0.08)_0,rgba(114,126,84,0.08)_18px,rgba(255,255,255,0.02)_18px,rgba(255,255,255,0.02)_64px)] opacity-75" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(28,38,29,0.14))]" />
          <div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-white/45 bg-white/10 sm:right-6 sm:top-6" />
        </>
      )}
      <div className="relative flex h-full min-h-[220px] flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="icon-badge flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
            <Icon name={icon} className="h-7 w-7" />
          </div>
          <div
            className={cn(
              "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur-sm",
              heroImage
                ? "border border-white/35 bg-white/15 text-white/92"
                : "border border-[rgba(35,74,53,0.12)] bg-[rgba(255,250,242,0.76)] text-brand/78",
            )}
          >
            {brandName}
          </div>
        </div>
        <div
          className={cn(
            "mt-7 max-w-[22rem] rounded-[1.55rem] border p-4 backdrop-blur-[6px] sm:p-5",
            heroImage
              ? "border-white/45 bg-white/90"
              : "border-white/54 bg-white/46 backdrop-blur-[3px]",
          )}
        >
          <h3 className="text-balance font-serif text-[1.8rem] leading-tight text-foreground sm:text-[2rem]">
            {title}
          </h3>
          {description ? (
            <p className="mt-3 overflow-hidden text-sm leading-7 text-foreground/74 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {chips.slice(0, 3).map((chip) => (
            <span
              key={chip}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium shadow-[0_12px_24px_rgba(19,38,27,0.06)]",
                heroImage
                  ? "border border-white/45 bg-white/92 text-foreground"
                  : "border border-white/84 bg-[rgba(255,255,255,0.82)] text-foreground",
              )}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
