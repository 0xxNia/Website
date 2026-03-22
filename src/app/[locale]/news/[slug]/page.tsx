import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCategory } from "@/data/catalog";
import { getAllNewsParams, getNewsArticle } from "@/data/news";
import { getSiteContent } from "@/data/site";
import { formatDate, getLocaleFromParams, locales, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

import { ContactCta } from "@/components/sections/contact-cta";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
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
    getAllNewsParams().map((item) => ({ locale, ...item })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocaleFromParams(params);
  const article = getNewsArticle(locale, slug);

  if (!article) {
    return {};
  }

  return buildMetadata({
    locale,
    title: article.title,
    description: article.excerpt,
    path: `/news/${slug}`,
  });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);
  const article = getNewsArticle(locale, slug);

  if (!article) {
    notFound();
  }

  const relatedCategories = article.relatedCategorySlugs
    .map((categorySlug) => getCategory(locale, categorySlug))
    .filter((category): category is NonNullable<typeof category> => Boolean(category));

  return (
    <main>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { label: site.common.homeLabel, href: localizePath(locale) },
            { label: site.navigation.links[2].label, href: localizePath(locale, "/news") },
            { label: article.title },
          ]}
        />
      </Container>
      <section className="border-b border-line/50 pb-10 pt-4 sm:pb-12 sm:pt-6">
        <Container className="max-w-[980px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            {article.category}
          </p>
          <h1 className="mt-4 text-balance font-serif text-[2rem] leading-tight text-foreground sm:text-[2.65rem]">
            {article.heroTitle}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{article.heroSummary}</p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="max-w-[980px]">
          <div className="mb-8 text-sm text-muted">
            {formatDate(locale, article.publishedAt)}
          </div>
          <article className="rich-text space-y-10">
            {article.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-3xl text-foreground">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list?.length ? (
                  <ul className="mt-5 space-y-2 text-base leading-8 text-muted">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
          <ButtonLink
            href={localizePath(locale, "/news")}
            label={site.common.backToNews}
            variant="ghost"
            className="mt-10 px-0"
          />
        </Container>
      </section>
      {relatedCategories.length ? (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow={site.common.relatedCategoriesTitle}
              title={site.navigation.catalogLabel}
              description={site.catalog.hero.description}
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {relatedCategories.map((category, index) => (
                <PhotoPanelCard
                  key={category.slug}
                  image={category.coverImage ?? panelImageAt(index + 3)}
                  className="min-h-[260px]"
                >
                  <h2 className={photoPanelTitleClass}>{category.title}</h2>
                  <p className={cn(photoPanelBodyClass, "mt-4")}>{category.teaser}</p>
                  <ButtonLink
                    href={localizePath(locale, `/catalog/${category.slug}`)}
                    label={site.common.catalogDetails}
                    variant="ghost"
                    className="mt-auto px-0 pt-4 !text-[#e8f5a8] hover:!text-white"
                  />
                </PhotoPanelCard>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <ContactCta
        eyebrow={site.home.cta.eyebrow}
        title={site.home.cta.title}
        description={site.home.cta.description}
        backgroundImage="/media/contact/contact-cta-fields.jpg"
        primaryAction={{
          ...site.home.cta.primaryAction,
          href: localizePath(locale, site.home.cta.primaryAction.href),
        }}
        secondaryAction={{
          ...site.home.cta.secondaryAction,
          href: localizePath(locale, site.home.cta.secondaryAction.href),
        }}
      />
    </main>
  );
}
