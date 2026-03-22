import Link from "next/link";

import { formatDate, localizePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Locale, NewsArticle } from "@/types/content";

export function NewsCard({
  locale,
  article,
  readMoreLabel,
}: {
  locale: Locale;
  article: NewsArticle;
  readMoreLabel: string;
}) {
  const hasBackground = Boolean(article.cardImage);
  const lightPhoto = article.cardImageTone === "light";

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-[2rem] border p-6",
        hasBackground
          ? "min-h-[320px] border-white/14 bg-[#1e3325] shadow-[0_22px_54px_rgba(14,26,17,0.16)]"
          : "soft-panel border-line",
      )}
    >
      {hasBackground ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${article.cardImage})` }}
            aria-hidden="true"
          />
          {/* Base veil — strong enough for white type on bright photo areas (poultry, grain, cows). */}
          <div
            className={
              lightPhoto
                ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(14,18,24,0.58)_0%,rgba(14,18,24,0.48)_32%,rgba(10,14,20,0.82)_72%,rgba(8,12,18,0.92)_100%)]"
                : "absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,10,0.58)_0%,rgba(8,12,10,0.38)_38%,rgba(6,10,8,0.72)_68%,rgba(4,8,6,0.9)_100%)]"
            }
            aria-hidden="true"
          />
          <div
            className={
              lightPhoto
                ? "absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(0,0,0,0.28),transparent_55%),radial-gradient(circle_at_18%_22%,rgba(166,206,57,0.12),transparent_45%)]"
                : "absolute inset-0 bg-[radial-gradient(ellipse_130%_90%_at_50%_0%,rgba(0,0,0,0.35),transparent_52%),radial-gradient(circle_at_16%_18%,rgba(201,234,125,0.12),transparent_38%)]"
            }
            aria-hidden="true"
          />
        </>
      ) : null}
      <div className="relative z-10 flex h-full flex-col">
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            hasBackground
              ? "text-[#d8f08a] [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_0_12px_rgba(0,0,0,0.45)]"
              : "text-brand",
          )}
        >
          {article.category}
        </p>
        <h3
          className={cn(
            "mt-4 text-balance font-serif text-2xl",
            hasBackground
              ? "text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_22px_rgba(0,0,0,0.55)]"
              : "text-foreground",
          )}
        >
          <Link href={localizePath(locale, `/news/${article.slug}`)}>{article.title}</Link>
        </h3>
        <p
          className={cn(
            "mt-4 text-sm leading-7",
            hasBackground
              ? "text-white/92 [text-shadow:0_1px_2px_rgba(0,0,0,0.88),0_1px_14px_rgba(0,0,0,0.5)]"
              : "text-muted",
          )}
        >
          {article.excerpt}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
          <time
            className={cn(
              "text-sm",
              hasBackground
                ? "text-white/85 [text-shadow:0_1px_2px_rgba(0,0,0,0.85)]"
                : "text-muted",
            )}
            dateTime={article.publishedAt}
          >
            {formatDate(locale, article.publishedAt)}
          </time>
          <Link
            href={localizePath(locale, `/news/${article.slug}`)}
            className={cn(
              "text-sm font-semibold transition-colors",
              hasBackground
                ? // Light chip + forced text color (global `a { color: inherit }` otherwise reads body green on dark fill)
                  "shrink-0 rounded-full border border-white/80 bg-white/92 !px-3.5 !py-1.5 !text-foreground shadow-[0_2px_14px_rgba(0,0,0,0.28)] hover:border-brand/35 hover:bg-white hover:!text-brand-strong"
                : "text-brand hover:text-brand-strong",
            )}
          >
            {readMoreLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
