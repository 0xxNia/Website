import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/types/content";

import { getBrandName } from "@/lib/branding";
import { localizePath } from "@/lib/i18n";

export function SiteMark({ locale }: { locale: Locale }) {
  const brandName = getBrandName(locale);

  return (
    <Link
      href={localizePath(locale)}
      className="site-mark-link group inline-flex items-center text-foreground"
      aria-label={brandName}
    >
      <span className="relative inline-flex shrink-0 transition duration-300 ease-out motion-reduce:transform-none group-hover:-translate-y-0.5 group-hover:scale-[1.02]">
        <Image
          src="/media/brand/impexfeed-logo.png"
          alt=""
          width={449}
          height={285}
          priority
          unoptimized
          className="h-11 w-auto max-w-[min(10rem,calc(100vw-8rem))] bg-transparent sm:h-12"
        />
      </span>
    </Link>
  );
}
