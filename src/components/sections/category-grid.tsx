import Image from "next/image";
import Link from "next/link";

import { localizePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Category, Locale } from "@/types/content";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function CategoryGrid({
  locale,
  categories,
}: {
  locale: Locale;
  categories: Category[];
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={localizePath(locale, `/catalog/${category.slug}`)}
              className="catalog-card-link group relative block overflow-hidden rounded-[2.3rem] border border-line/70 bg-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(19,38,27,0.1)]"
            >
              <div
                className={cn(
                  "relative aspect-video overflow-hidden",
                  index === 0 && "md:aspect-15/8",
                )}
              >
                {category.coverImage ? (
                  <Image
                    src={category.coverImage}
                    alt=""
                    fill
                    unoptimized
                    className={cn(
                      "object-cover transition-transform duration-500 group-hover:scale-[1.02]",
                    )}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                ) : (
                  <MediaPlaceholder
                    icon={category.icon}
                    title={category.title}
                    chips={category.focusAreas}
                    locale={locale}
                    decorative
                    className="h-full rounded-none border-0 p-0 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,14,0.08)_0%,rgba(10,18,14,0.22)_55%,rgba(10,18,14,0.46)_100%)]" />
                <div className="absolute left-4 top-4 flex items-center gap-2.5 sm:left-5 sm:top-5">
                  <span className="icon-badge flex h-10 w-10 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_14px_32px_rgba(19,38,27,0.16)]">
                    <Icon name={category.icon} className="h-5 w-5" />
                  </span>
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-[rgba(35,74,53,0.1)] bg-[rgba(255,249,240,0.76)] px-2.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-brand/82 shadow-[0_10px_24px_rgba(19,38,27,0.05)] backdrop-blur-sm sm:right-5 sm:top-5 sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
                  <div className="flex items-end justify-between gap-3">
                    <h3
                      className={cn(
                        "max-w-[75%] text-balance font-serif text-[1.45rem] leading-tight text-white drop-shadow-[0_14px_26px_rgba(0,0,0,0.24)] sm:text-[1.8rem]",
                        index === 0 && "sm:text-[1.95rem]",
                      )}
                    >
                      {category.title}
                    </h3>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/90 text-brand shadow-[0_16px_34px_rgba(19,38,27,0.14)] transition-transform duration-300 group-hover:translate-x-1">
                      <Icon name="arrow" className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
