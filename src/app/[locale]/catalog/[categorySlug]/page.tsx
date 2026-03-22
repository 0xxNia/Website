import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getAllCategoryParams, getCategories, getCategory } from "@/data/catalog";
import { getSiteContent } from "@/data/site";
import { getLocaleFromParams, locales, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

import { CategorySidebarNav } from "@/components/catalog/category-sidebar-nav";
import { ContactCta } from "@/components/sections/contact-cta";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import {
  PhotoPanelCard,
  photoPanelBodyClass,
  photoPanelTitleClass,
} from "@/components/ui/photo-panel-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { panelImageAt } from "@/lib/panel-images";
import { cn } from "@/lib/utils";

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
    ru: {
      capabilities: "Ключевые возможности",
      explorerAll: "Все позиции",
    },
    en: {
      capabilities: "Capabilities",
      explorerAll: "All positions",
    },
    kk: {
      capabilities: "Негізгі мүмкіндіктер",
      explorerAll: "Барлық позициялар",
    },
  }[locale];

  if (!category) {
    notFound();
  }

  const relatedCategories = getCategories(locale)
    .filter((item) => item.slug !== category.slug)
    .slice(0, 3);

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
              <div className="relative aspect-[16/10] w-full bg-brand-soft/25 sm:aspect-[16/9] lg:min-h-[280px] lg:aspect-auto">
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
                  <div className="flex h-full min-h-[200px] items-center justify-center bg-gradient-to-br from-brand-soft/40 to-white">
                    <Icon name={category.icon} className="h-14 w-14 text-brand/25" />
                  </div>
                )}
              </div>
              <div className="border-t border-line/60 p-5 sm:p-6">
                <h2 className="font-serif text-2xl leading-tight text-foreground sm:text-[1.85rem]">
                  {category.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">{category.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.focusAreas.map((focus) => (
                    <span
                      key={focus}
                      className="rounded-full border border-line bg-[#f4f6f3] px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
                <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">{category.description}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={sectionLabels.capabilities}
            title={site.home.expertise.title}
            description={category.summary}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {category.capabilities.map((capability, index) => (
              <PhotoPanelCard
                key={capability.title}
                image={panelImageAt(index + 2)}
                className="min-h-[240px]"
              >
                <h2 className={photoPanelTitleClass}>{capability.title}</h2>
                <p className={cn(photoPanelBodyClass, "mt-4")}>{capability.text}</p>
              </PhotoPanelCard>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={site.common.relatedCategoriesTitle}
            title={site.navigation.catalogLabel}
            description={site.catalog.hero.description}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedCategories.map((item, index) => (
              <PhotoPanelCard
                key={item.slug}
                image={item.coverImage ?? panelImageAt(index + 5)}
                className="min-h-[260px]"
              >
                <h2 className={photoPanelTitleClass}>{item.title}</h2>
                <p className={cn(photoPanelBodyClass, "mt-4")}>{item.teaser}</p>
                <ButtonLink
                  href={localizePath(locale, `/catalog/${item.slug}`)}
                  label={site.common.catalogDetails}
                  variant="ghost"
                  className="mt-auto px-0 pt-4 !text-[#e8f5a8] hover:!text-white"
                />
              </PhotoPanelCard>
            ))}
          </div>
        </Container>
      </section>
      <ContactCta
        eyebrow={site.home.cta.eyebrow}
        title={category.ctaTitle}
        description={category.ctaText}
        backgroundImage="/media/contact/contact-cta-fields.jpg"
        primaryAction={{
          label: site.common.goToContacts,
          href: localizePath(locale, "/contacts"),
        }}
        secondaryAction={{
          label: site.home.cta.secondaryAction.label,
          href: localizePath(locale, site.home.cta.secondaryAction.href),
        }}
      />
    </main>
  );
}
