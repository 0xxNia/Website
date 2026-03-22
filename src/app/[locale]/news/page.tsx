import type { Metadata } from "next";

import { getNews } from "@/data/news";
import { getSiteContent } from "@/data/site";
import { getLocaleFromParams, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

import { ContactCta } from "@/components/sections/contact-cta";
import { NewsCard } from "@/components/sections/news-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);

  return buildMetadata({
    locale,
    title: site.newsPage.seoTitle,
    description: site.newsPage.seoDescription,
    path: "/news",
  });
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);
  const news = getNews(locale);

  return (
    <main>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { label: site.common.homeLabel, href: localizePath(locale) },
            { label: site.navigation.links[2].label },
          ]}
        />
      </Container>
      <section className="border-b border-line/50 pb-10 pt-4 sm:pb-12 sm:pt-6">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            {site.newsPage.hero.eyebrow}
          </p>
          <h1 className="mt-4 text-balance font-serif text-[2rem] leading-tight text-foreground sm:text-[2.5rem]">
            {site.newsPage.hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            {site.newsPage.hero.description}
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {news.map((article) => (
              <NewsCard
                key={article.slug}
                locale={locale}
                article={article}
                readMoreLabel={site.common.readMore}
              />
            ))}
          </div>
        </Container>
      </section>
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
