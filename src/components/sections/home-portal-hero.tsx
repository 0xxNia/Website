"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getBrandName } from "@/lib/branding";
import { localizePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { IconName, Locale, StatItem } from "@/types/content";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

type FeaturedHeroProduct = {
  slug: string;
  badge: string;
  name: string;
  summary: string;
  tags: string[];
  categorySlug: string;
  categoryTitle: string;
  icon: IconName;
};

type HeroAction = {
  label: string;
  href: string;
};

const toneClassNames = [
  "from-[rgba(220,233,204,0.44)] via-[rgba(162,191,118,0.18)] to-[rgba(54,80,48,0.04)]",
  "from-[rgba(225,232,206,0.46)] via-[rgba(181,200,146,0.2)] to-[rgba(60,86,54,0.06)]",
  "from-[rgba(231,234,211,0.42)] via-[rgba(197,188,130,0.18)] to-[rgba(70,97,60,0.04)]",
  "from-[rgba(224,228,205,0.42)] via-[rgba(184,196,139,0.18)] to-[rgba(68,92,61,0.06)]",
];

const productTintClassNames = [
  "bg-[linear-gradient(180deg,rgba(83,125,66,0.22),rgba(18,31,21,0.06))]",
  "bg-[linear-gradient(180deg,rgba(124,149,96,0.18),rgba(18,31,21,0.08))]",
  "bg-[linear-gradient(180deg,rgba(164,177,116,0.18),rgba(18,31,21,0.06))]",
  "bg-[linear-gradient(180deg,rgba(102,134,82,0.2),rgba(18,31,21,0.08))]",
];

export function HomePortalHero({
  locale,
  eyebrow,
  title,
  description,
  highlights,
  stats,
  primaryAction,
  secondaryAction,
  products,
  productActionLabel,
  catalogActionLabel,
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  stats: StatItem[];
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  products: FeaturedHeroProduct[];
  productActionLabel: string;
  catalogActionLabel: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const brandName = getBrandName(locale);
  const showcaseProducts = products.slice(0, 4);

  useEffect(() => {
    if (showcaseProducts.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % showcaseProducts.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [showcaseProducts.length]);

  if (showcaseProducts.length === 0) {
    return null;
  }

  const safeActiveIndex =
    activeIndex < showcaseProducts.length ? activeIndex : 0;
  const activeProduct = showcaseProducts[safeActiveIndex] ?? showcaseProducts[0];

  return (
    <section className="pt-6 sm:pt-8 lg:pt-10">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2.8rem] border border-line bg-[#1a2920] shadow-[0_32px_96px_rgba(18,35,25,0.16)]">
          <div className="hero-video-shell">
            <video
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/media/catalog/feed-production-hero.png"
              aria-hidden="true"
            >
              <source src="/media/home/farm-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_14%_16%,rgba(255,234,177,0.14),transparent_22%),radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.06),transparent_22%),linear-gradient(90deg,rgba(9,17,11,0.26)_0%,rgba(9,17,11,0.12)_38%,rgba(9,17,11,0.04)_68%,rgba(9,17,11,0.1)_100%)]" />
          <div
            className={cn(
              "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br mix-blend-soft-light opacity-48",
              toneClassNames[safeActiveIndex % toneClassNames.length],
            )}
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(118deg,rgba(255,255,255,0.05)_0%,transparent_26%,transparent_74%,rgba(255,255,255,0.025)_100%)]" />
          <div className="relative z-10 grid gap-4 p-4 text-white sm:p-5 lg:gap-5 xl:grid-cols-[0.92fr,1.08fr] xl:items-stretch xl:p-6">
            <div className="flex min-h-0 flex-col gap-3 xl:gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="rounded-full border border-white/20 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/88 backdrop-blur-[3px]">
                  {brandName}
                </div>
                <div className="max-w-[min(100%,15rem)] truncate rounded-full border border-white/16 bg-[rgba(22,35,25,0.12)] px-4 py-2 text-xs font-medium text-white/82 backdrop-blur-[3px] sm:max-w-[18rem]">
                  {activeProduct.categoryTitle}
                </div>
              </div>

              <div className="rounded-[2.1rem] border border-white/10 bg-[linear-gradient(135deg,rgba(11,18,12,0.22),rgba(11,18,12,0.08))] p-5 shadow-[0_18px_60px_rgba(8,17,10,0.12)] backdrop-blur-[4px] sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                  {eyebrow}
                </p>
                <h1 className="mt-3 max-w-[36rem] text-balance font-serif text-[2.05rem] leading-[1.02] text-white drop-shadow-[0_18px_48px_rgba(0,0,0,0.34)] sm:text-[2.65rem] lg:text-[3.1rem]">
                  {title}
                </h1>
                <p className="mt-3 max-w-[34rem] text-[0.98rem] leading-7 text-white/86 sm:text-[1rem]">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-medium text-white/84"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <ButtonLink
                    href={primaryAction.href}
                    label={primaryAction.label}
                    variant="secondary"
                    className="!border-white/35 !bg-white shadow-[0_10px_28px_rgba(0,0,0,0.22)] hover:!bg-white/95"
                  />
                  <ButtonLink
                    href={secondaryAction.href}
                    label={secondaryAction.label}
                    variant="ghost"
                    className="!border-2 !border-white/75 !bg-transparent !text-white hover:!border-white hover:!bg-white/12 hover:!text-white"
                  />
                </div>

                {/* min-height + line clamps: hover swaps activeProduct — without this the left column height changes and the whole hero (and page below) jumps */}
                <div className="mt-4 min-h-[22rem] rounded-[1.65rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-4 backdrop-blur-[3px] sm:min-h-[24rem] sm:p-4">
                  <div className="flex items-start gap-4">
                    <span className="icon-badge flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.2rem] border border-white/14 bg-white/6 text-white shadow-[0_10px_24px_rgba(7,15,9,0.1)]">
                      <Icon name={activeProduct.icon} className="h-6 w-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/66">
                        {activeProduct.badge}
                      </p>
                      <h2 className="mt-1.5 line-clamp-2 text-balance font-serif text-[1.5rem] leading-tight text-white sm:text-[1.75rem]">
                        {activeProduct.name}
                      </h2>
                      <p className="mt-2 line-clamp-4 text-sm leading-6 text-white/80 sm:text-[0.96rem]">
                        {activeProduct.summary}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeProduct.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs font-medium text-white/76"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <ButtonLink
                      href={localizePath(
                        locale,
                        `/catalog/${activeProduct.categorySlug}/${activeProduct.slug}`,
                      )}
                      label={productActionLabel}
                      variant="secondary"
                      className="!border-white/35 !bg-white shadow-[0_10px_28px_rgba(0,0,0,0.22)] hover:!bg-white/95"
                    />
                    <ButtonLink
                      href={localizePath(locale, `/catalog/${activeProduct.categorySlug}`)}
                      label={catalogActionLabel}
                      variant="ghost"
                      className="!border-2 !border-white/75 !bg-transparent !text-white hover:!border-white hover:!bg-white/12 hover:!text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={`${stat.value}-${stat.label}`}
                    className="rounded-[1.5rem] border border-white/10 bg-[rgba(12,22,14,0.12)] px-3.5 py-3 shadow-[0_18px_40px_rgba(10,18,12,0.08)] backdrop-blur-[3px]"
                  >
                    <p className="text-[1.5rem] font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/72">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid min-h-0 gap-3 sm:grid-cols-2 sm:grid-rows-2 xl:h-full xl:min-h-0 xl:[grid-template-rows:minmax(0,1fr)_minmax(0,1fr)]">
              {showcaseProducts.map((product, index) => {
                const isActive = index === safeActiveIndex;

                return (
                  <Link
                    key={product.slug}
                    href={localizePath(
                      locale,
                      `/catalog/${product.categorySlug}/${product.slug}`,
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={cn(
                      "hero-showcase-link group relative flex min-h-[16.5rem] flex-col overflow-hidden rounded-[1.75rem] border p-4 backdrop-blur-[3px] transition-[border-color,background-color,box-shadow] duration-500 sm:min-h-[17.5rem] sm:p-5 xl:h-full xl:min-h-0",
                      isActive
                        ? "border-white/24 bg-[rgba(255,255,255,0.08)] shadow-[0_16px_40px_rgba(11,22,14,0.14)]"
                        : "border-white/10 bg-[rgba(12,22,14,0.08)] hover:border-white/18 hover:bg-[rgba(255,255,255,0.08)]",
                    )}
                  >
                    <div className={cn("absolute inset-0", productTintClassNames[index])} />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0)_30%,rgba(8,16,10,0.05)_100%)]" />
                    <div className="relative flex min-h-0 w-full flex-1 flex-col gap-4">
                      <div className="flex items-start justify-between gap-3">
                        <p className="line-clamp-2 min-w-0 flex-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-[11px] sm:tracking-[0.24em]">
                          {product.categoryTitle}
                        </p>
                        <span className="icon-badge icon-badge-hero-tile flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/84">
                          <Icon name={product.icon} className="h-4 w-4" />
                        </span>
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/62">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 line-clamp-2 text-balance font-serif text-[1.45rem] leading-[1.06] text-white sm:text-[1.6rem]">
                          {product.name}
                        </h3>
                        <p className="mt-2 line-clamp-2 max-w-[17rem] text-sm leading-6 text-white/78">
                          {product.badge}
                        </p>
                        {/* Fixed slot height so switching active tile does not reflow the grid (prevents page “jump”) */}
                        <div
                          className={cn(
                            "mt-3 flex min-h-[3.25rem] items-center transition-opacity duration-300",
                            isActive ? "opacity-100" : "pointer-events-none opacity-0",
                          )}
                          aria-hidden={!isActive}
                        >
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                            <span>{productActionLabel}</span>
                            <Icon
                              name="arrow"
                              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
