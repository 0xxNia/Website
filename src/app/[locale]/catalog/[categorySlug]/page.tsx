import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getAllCategoryParams, getCategory } from "@/data/catalog";
import { getSiteContent } from "@/data/site";
import { getLocaleFromParams, locales, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

import { CategorySidebarNav } from "@/components/catalog/category-sidebar-nav";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllCategoryParams().map((item) => ({ locale, ...item })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const locale = await getLocaleFromParams(params);
  const category = getCategory(locale, categorySlug);

  if (!category) {
    return {};
  }

  return buildMetadata({
    locale,
    title: category.title,
    description: category.summary,
    path: `/catalog/${category.slug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);
  const category = getCategory(locale, categorySlug);
  const sectionLabels = {
    ru: { explorerAll: "Все позиции" },
    en: { explorerAll: "All positions" },
    kk: { explorerAll: "Барлық позициялар" },
  }[locale];

  if (!category) {
    notFound();
  }

  return (
    <main>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { label: site.common.homeLabel, href: localizePath(locale) },
            { label: site.navigation.catalogLabel, href: localizePath(locale, "/catalog") },
            { label: category.title },
          ]}
        />
      </Container>
      <section className="pb-14 pt-2 sm:pb-16 sm:pt-4">
        <Container>
          <div className="catalog-master-detail">
            <CategorySidebarNav
              locale={locale}
              category={category}
              labels={{ allPositions: sectionLabels.explorerAll }}
            />
            <div className="overflow-hidden rounded-[1.35rem] border border-line bg-white shadow-[0_12px_40px_rgba(19,38,27,0.06)]">
              <div className="relative aspect-16/10 w-full bg-brand-soft/25 sm:aspect-video lg:min-h-[280px] lg:aspect-auto">
                {category.coverImage ? (
                  <Image
                    src={category.coverImage}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    priority
                  />
                ) : (
                  <div className="flex h-full min-h-[200px] items-center justify-center bg-linear-to-br from-brand-soft/40 to-white">
                    <Icon name={category.icon} className="h-14 w-14 text-brand/25" />
                  </div>
                )}
              </div>
              <div className="border-t border-line/60 p-5 sm:p-6">
                <h2 className="font-serif text-2xl leading-tight text-foreground sm:text-[1.85rem]">
                  {category.title}
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
