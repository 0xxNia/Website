import type { Metadata } from "next";

import { getCategories } from "@/data/catalog";
import { getSiteContent } from "@/data/site";
import { getLocaleFromParams, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

import { CategoryGrid } from "@/components/sections/category-grid";
import { ContactCta } from "@/components/sections/contact-cta";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import {
  PhotoPanelCard,
  photoPanelBodyClass,
  photoPanelTitleClass,
} from "@/components/ui/photo-panel-card";
import { cn } from "@/lib/utils";
import { panelImageAt } from "@/lib/panel-images";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);

  return buildMetadata({
    locale,
    title: site.catalog.seoTitle,
    description: site.catalog.seoDescription,
    path: "/catalog",
  });
}

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);
  const categories = getCategories(locale);

  return (
    <main>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { label: site.common.homeLabel, href: localizePath(locale) },
            { label: site.navigation.catalogLabel },
          ]}
        />
      </Container>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {site.catalog.selectionMatrix.map((item, index) => (
              <PhotoPanelCard key={item.title} image={panelImageAt(index)} className="min-h-[240px]">
                <h2 className={photoPanelTitleClass}>{item.title}</h2>
                <p className={cn(photoPanelBodyClass, "mt-4")}>{item.text}</p>
              </PhotoPanelCard>
            ))}
          </div>
        </Container>
      </section>
      <CategoryGrid
        locale={locale}
        categories={categories}
        eyebrow={site.home.categories.eyebrow}
        title={site.home.categories.title}
        description={site.home.categories.description}
        actionLabel={site.common.catalogDetails}
      />
      <ContactCta
        eyebrow={site.catalog.cta.eyebrow}
        title={site.catalog.cta.title}
        description={site.catalog.cta.description}
        backgroundImage="/media/contact/contact-cta-fields.jpg"
        primaryAction={{
          ...site.catalog.cta.primaryAction,
          href: localizePath(locale, site.catalog.cta.primaryAction.href),
        }}
        secondaryAction={{
          ...site.catalog.cta.secondaryAction,
          href: localizePath(locale, site.catalog.cta.secondaryAction.href),
        }}
      />
    </main>
  );
}
