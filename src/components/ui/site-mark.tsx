import Link from "next/link";

import type { Locale } from "@/types/content";

import { getBrandName } from "@/lib/branding";
import { localizePath } from "@/lib/i18n";

export function SiteMark({ locale }: { locale: Locale }) {
  const brandName = getBrandName(locale);

  return (
    <Link
      href={localizePath(locale)}
      className="site-mark-link inline-flex items-center gap-3 text-sm font-semibold tracking-[0.24em] text-foreground"
      aria-label={brandName}
    >
      <span className="icon-badge flex h-10 w-10 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_16px_40px_rgba(21,49,34,0.22)]">
        I
      </span>
      <span className="flex flex-col leading-none">
        <span>{brandName}</span>
        <span className="mt-1 text-[10px] tracking-[0.3em] text-muted">
          AGRO B2B
        </span>
      </span>
    </Link>
  );
}
