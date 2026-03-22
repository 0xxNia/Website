"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { replaceLocaleInPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

export function LanguageSwitcher({
  locale,
  languageNames,
  className,
}: {
  locale: Locale;
  languageNames: Record<Locale, string>;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-white/92 p-1 shadow-[0_12px_28px_rgba(24,36,27,0.06)]",
        className,
      )}
    >
      {(Object.keys(languageNames) as Locale[]).map((language) => {
        const isActive = language === locale;

        return (
          <Link
            key={language}
            href={replaceLocaleInPath(pathname, language)}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
              isActive
                ? "bg-brand !text-white shadow-[0_12px_24px_rgba(20,43,30,0.14)]"
                : "text-foreground/88 hover:bg-brand-soft/35 hover:text-foreground",
            )}
          >
            {languageNames[language]}
          </Link>
        );
      })}
    </div>
  );
}
