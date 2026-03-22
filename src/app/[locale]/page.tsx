import type { Metadata } from "next";

import { getCategories, getFeaturedProducts } from "@/data/catalog";
import { getLatestNews } from "@/data/news";
import { getSiteContent } from "@/data/site";
import { getLocaleFromParams, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

import { CategoryGrid } from "@/components/sections/category-grid";
import { ContactCta } from "@/components/sections/contact-cta";
import { HomePortalHero } from "@/components/sections/home-portal-hero";
import { NewsCard } from "@/components/sections/news-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import {
  PhotoPanelCard,
  photoPanelBodyClass,
  photoPanelTitleClass,
} from "@/components/ui/photo-panel-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
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
  const featuredProducts = getFeaturedProducts(locale);
  const news = getLatestNews(locale, 3);

  return (
    <main>
      <HomePortalHero
        locale={locale}
        eyebrow={site.home.hero.eyebrow}
        title={site.home.hero.title}
        description={site.home.hero.description}
        highlights={site.home.hero.highlights}
        products={featuredProducts}
        primaryAction={{
          ...site.home.hero.primaryAction,
          href: localizePath(locale, site.home.hero.primaryAction.href),
        }}
        secondaryAction={{
          ...site.home.hero.secondaryAction,
          href: localizePath(locale, site.home.hero.secondaryAction.href),
        }}
        stats={site.home.hero.stats}
        productActionLabel={site.common.productDetails}
        catalogActionLabel={site.common.catalogDetails}
      />

      <ScrollReveal>
        <CategoryGrid
          locale={locale}
          categories={categories}
          eyebrow={site.home.categories.eyebrow}
          title={site.home.categories.title}
          description={site.home.categories.description}
          actionLabel={site.common.catalogDetails}
        />
      </ScrollReveal>

      <section className="py-16 sm:py-20">
        <Container>
          <ScrollReveal>
          <SectionHeading
            eyebrow={site.home.expertise.eyebrow}
            title={site.home.expertise.title}
            description={site.home.expertise.description}
          />
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {site.home.expertise.items.map((item, index) => (
              <ScrollReveal key={item.title} delayMs={index * 80}>
                <PhotoPanelCard image={panelImageAt(index)} className="min-h-[260px]">
                  <h2 className={photoPanelTitleClass}>{item.title}</h2>
                  <p className={cn(photoPanelBodyClass, "mt-4")}>{item.text}</p>
                </PhotoPanelCard>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <SectionHeading
              eyebrow={site.home.numbers.eyebrow}
              title={site.home.numbers.title}
              description={site.home.numbers.description}
            />
            <div className="grid gap-5 sm:grid-cols-3">
              {site.home.numbers.stats.map((stat, index) => (
                <PhotoPanelCard
                  key={`${stat.value}-${stat.label}`}
                  image={panelImageAt(index + 4)}
                  className="min-h-[200px]"
                >
                  <p className="text-3xl font-semibold text-[#d8f08a] [text-shadow:0_1px_3px_rgba(0,0,0,0.85),0_2px_16px_rgba(0,0,0,0.45)]">
                    {stat.value}
                  </p>
                  <p className={cn(photoPanelBodyClass, "mt-3 text-white/82")}>{stat.label}</p>
                </PhotoPanelCard>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <ScrollReveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={site.home.news.eyebrow}
              title={site.home.news.title}
              description={site.home.news.description}
            />
            <ButtonLink
              href={localizePath(locale, "/news")}
              label={site.common.allNews}
              variant="secondary"
            />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {news.map((article) => (
              <NewsCard
                key={article.slug}
                locale={locale}
                article={article}
                readMoreLabel={site.common.readMore}
              />
            ))}
          </div>
          </ScrollReveal>
        </Container>
      </section>

      <ScrollReveal>
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
      </ScrollReveal>
    </main>
  );
}
