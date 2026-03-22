import Image from "next/image";
import Link from "next/link";

import { localizePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Category, Locale } from "@/types/content";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { SectionHeading } from "@/components/ui/section-heading";

export function CategoryGrid({
  locale,
  categories,
  eyebrow,
  title,
  description,
  actionLabel,
}: {
  locale: Locale;
  categories: Category[];
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={localizePath(locale, `/catalog/${category.slug}`)}
              className="catalog-card-link group relative flex h-full flex-col overflow-hidden rounded-[2.3rem] border border-line bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(19,38,27,0.1)]"
            >
              <div
                className={cn(
                  "relative overflow-hidden border-b border-line/60",
                  index === 0
                    ? "min-h-[140px] sm:min-h-[160px]"
                    : "min-h-[128px] sm:min-h-[148px]",
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
                      category.slug === "crop-feed-solutions" && "object-bottom",
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
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(20,34,24,0.38)_100%)]" />
                <div className="absolute left-4 top-4 flex items-center gap-2.5 sm:left-5 sm:top-5">
                  <span className="icon-badge flex h-10 w-10 items-center justify-center rounded-[1rem] bg-brand text-white shadow-[0_14px_32px_rgba(19,38,27,0.16)]">
                    <Icon name={category.icon} className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-[rgba(35,74,53,0.12)] bg-[rgba(255,249,240,0.82)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand shadow-[0_10px_24px_rgba(19,38,27,0.06)] backdrop-blur-sm sm:text-[11px] sm:tracking-[0.22em]">
                    {category.focusAreas[0]}
                  </span>
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-[rgba(35,74,53,0.1)] bg-[rgba(255,249,240,0.76)] px-2.5 py-1 text-[11px] font-semibold tracking-[0.18em] text-brand/82 shadow-[0_10px_24px_rgba(19,38,27,0.05)] backdrop-blur-sm sm:right-5 sm:top-5 sm:px-3 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col bg-[linear-gradient(180deg,#ffffff,#f6f2ea)] p-4 sm:p-5">
                <div className="max-w-[32rem]">
                  <h3
                    className={cn(
                      "text-balance font-serif text-[1.5rem] leading-tight text-foreground sm:text-[1.85rem]",
                      index === 0 && "sm:text-[2rem]",
                    )}
                  >
                    {category.title}
                  </h3>
                  <p className="mt-3 max-w-2xl overflow-hidden text-base leading-7 text-brand/78 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    {category.teaser}
                  </p>
                  <p className="mt-2 max-w-2xl overflow-hidden text-sm leading-7 text-muted [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    {category.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.focusAreas.slice(0, 3).map((focus) => (
                      <span
                        key={focus}
                        className="rounded-full border border-line-strong bg-brand-soft/26 px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                  <span className="inline-flex rounded-full bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_34px_rgba(19,38,27,0.14)]">
                    {actionLabel}
                  </span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-strong bg-white text-brand shadow-[0_16px_34px_rgba(19,38,27,0.08)] transition-transform duration-300 group-hover:translate-x-1">
                    <Icon name="arrow" className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
