"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { localizePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Category, Locale, ProductGroupNav } from "@/types/content";

import { Icon } from "@/components/ui/icon";

function buildNavGroups(category: Category, allLabel: string): ProductGroupNav[] {
  const defined = category.productGroups?.filter((group) => group.productSlugs.length > 0);
  if (defined?.length) {
    return defined;
  }
  return [
    {
      id: "all",
      title: allLabel,
      productSlugs: category.products.map((product) => product.slug),
    },
  ];
}

function parseCatalogPath(pathname: string): {
  categorySlug: string | undefined;
  productSlug: string | undefined;
} {
  const parts = pathname.split("/").filter(Boolean);
  const idx = parts.indexOf("catalog");
  if (idx === -1) {
    return { categorySlug: undefined, productSlug: undefined };
  }
  return {
    categorySlug: parts[idx + 1],
    productSlug: parts[idx + 2],
  };
}

export function CategorySidebarNav({
  locale,
  category,
  labels,
}: {
  locale: Locale;
  category: Category;
  labels: {
    allPositions: string;
  };
}) {
  const pathname = usePathname();
  const groups = useMemo(
    () => buildNavGroups(category, labels.allPositions),
    [category, labels.allPositions],
  );

  const slugOrder = useMemo(
    () => category.products.map((product) => product.slug),
    [category.products],
  );

  const { categorySlug: pathCategorySlug, productSlug: pathProductSlug } = useMemo(
    () => parseCatalogPath(pathname),
    [pathname],
  );

  const activeSlug =
    pathCategorySlug === category.slug &&
    pathProductSlug &&
    slugOrder.includes(pathProductSlug)
      ? pathProductSlug
      : null;

  /** At most one group open — opening another closes the rest (accordion). */
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);

  useEffect(() => {
    if (activeSlug) {
      const match = groups.find((group) => group.productSlugs.includes(activeSlug));
      if (match) {
        setOpenGroupId(match.id);
        return;
      }
    }
    if (groups.length > 0) {
      setOpenGroupId((current) => current ?? groups[0].id);
    }
  }, [activeSlug, groups]);

  if (groups.length === 0) {
    return null;
  }

  return (
    <aside className="catalog-sidebar-sticky h-fit rounded-[1.35rem] border border-line bg-[#ecefe9] p-3.5 sm:p-4">
      <h2 className="text-[0.95rem] font-bold leading-snug text-foreground sm:text-base">
        {category.title}
      </h2>
      <p className="mt-2 text-xs leading-5 text-muted">{category.summary}</p>
      <nav className="mt-4 space-y-2" aria-label={labels.allPositions}>
        {groups.map((group) => (
          <div key={group.id} className="rounded-xl border border-[rgba(28,38,29,0.08)] bg-white/80">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-black/3"
              aria-expanded={openGroupId === group.id}
              onClick={() =>
                setOpenGroupId((current) =>
                  current === group.id ? null : group.id,
                )
              }
            >
              <span className="text-[13px] font-semibold leading-snug text-foreground">
                {group.title}
              </span>
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-soft/40 text-foreground/75 transition-[transform,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-150",
                  openGroupId === group.id && "bg-brand-soft/70 text-brand-strong",
                )}
                aria-hidden
              >
                <Icon
                  name="plus"
                  className={cn(
                    "h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-150",
                    openGroupId === group.id ? "rotate-45" : "rotate-0",
                  )}
                />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-150",
                openGroupId === group.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div
                className={cn(
                  "min-h-0 overflow-hidden transition-opacity duration-400 ease-out motion-reduce:duration-150",
                  openGroupId === group.id ? "opacity-100" : "opacity-0",
                )}
                {...(openGroupId !== group.id ? { inert: true } : {})}
              >
                <ul className="border-t border-line/50 px-1.5 pb-1.5 pt-0.5">
                  {group.productSlugs.map((slug) => {
                    const product = category.products.find((item) => item.slug === slug);
                    if (!product) {
                      return null;
                    }
                    const href = localizePath(locale, `/catalog/${category.slug}/${slug}`);
                    return (
                      <li key={slug}>
                        <Link
                          href={href}
                          scroll
                          className={cn(
                            "block w-full rounded-lg px-2.5 py-2 text-left text-[13px] leading-snug transition-colors",
                            activeSlug === slug
                              ? "bg-brand-soft/55 font-semibold text-brand-strong"
                              : "text-muted hover:bg-brand-soft/25 hover:text-foreground",
                          )}
                        >
                          {product.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
