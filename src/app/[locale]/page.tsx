import type { Metadata } from "next";

import { getCategories } from "@/data/catalog";
import { getSiteContent } from "@/data/site";
import { getLocaleFromParams, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

import { CategoryGrid } from "@/components/sections/category-grid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);

  return buildMetadata({
    locale,
    title: site.home.seoTitle,
    description: site.home.seoDescription,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);
  const categories = getCategories(locale);

  return (
    <main>
      <ScrollReveal>
        <CategoryGrid
          locale={locale}
          categories={categories}
        />
      </ScrollReveal>
    </main>
  );
}
