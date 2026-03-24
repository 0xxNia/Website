"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { localizePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Category, Locale } from "@/types/content";

import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { SiteMark } from "@/components/ui/site-mark";

type NavigationData = {
  homeLabel: string;
  catalogLabel: string;
  contactAction: string;
  menuLabel: string;
  closeLabel: string;
  links: Array<{ label: string; href: string }>;
};

export function Header({
  locale,
  categories,
  navigation,
}: {
  locale: Locale;
  categories: Category[];
  navigation: NavigationData;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    const target = localizePath(locale, href);
    return href === "/" ? pathname === target : pathname.startsWith(target);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(250,247,241,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <SiteMark locale={locale} />
        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-2" aria-label="Primary">
            <div className="group relative">
              <button className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/70">
                {navigation.catalogLabel}
              </button>
              <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="glass-card w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-line py-2 shadow-lg">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={localizePath(locale, `/catalog/${category.slug}`)}
                      onClick={() => setMenuOpen(false)}
                      className="header-catalog-link flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-white/80"
                    >
                      <span className="icon-badge flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                        <Icon name={category.icon} className="h-[1.15rem] w-[1.15rem]" />
                      </span>
                      <span className="min-w-0 text-sm font-semibold leading-snug text-foreground">
                        {category.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navigation.links
              .filter((link) => link.href !== "/catalog")
              .map((link) => (
              <Link
                key={link.href}
                href={localizePath(locale, link.href)}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/70",
                  isActive(link.href) ? "bg-white text-foreground" : "text-muted",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ButtonLink
            href={localizePath(locale, "/contacts")}
            label={navigation.contactAction}
          />
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-sm font-semibold text-foreground lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? navigation.closeLabel : navigation.menuLabel}
        >
          <span>{menuOpen ? navigation.closeLabel : navigation.menuLabel}</span>
        </button>
      </div>
      {menuOpen ? (
        <div className="border-t border-line bg-[rgba(247,245,241,0.95)] lg:hidden">
          <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6">
            <div className="flex flex-col gap-6">
              <nav className="flex flex-col gap-2">
                {navigation.links
                  .filter((link) => link.href !== "/catalog")
                  .map((link) => (
                  <Link
                    key={link.href}
                    href={localizePath(locale, link.href)}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-[1.25rem] border px-4 py-3 text-sm font-medium",
                      isActive(link.href)
                        ? "border-line-strong bg-white text-foreground"
                        : "border-line bg-white/60 text-muted",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                  {navigation.catalogLabel}
                </p>
                <div className="mt-3 grid gap-3">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={localizePath(locale, `/catalog/${category.slug}`)}
                      onClick={() => setMenuOpen(false)}
                      className="header-catalog-link rounded-3xl border border-line bg-white/70 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="icon-badge mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                          <Icon name={category.icon} className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {category.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-muted">
                            {category.teaser}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <ButtonLink
                href={localizePath(locale, "/contacts")}
                label={navigation.contactAction}
                className="w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
