import type { Metadata } from "next";
import type { ReactNode } from "react";

import { getCategories } from "@/data/catalog";
import { getSiteContent } from "@/data/site";
import { getBrandName } from "@/lib/branding";
import { getLocaleFromParams, locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/metadata";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { LocaleHtmlSync } from "@/components/layout/locale-html-sync";
import { JsonLd } from "@/components/ui/json-ld";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const brandName = getBrandName(locale);

  return {
    title: {
      default: brandName,
      template: `%s | ${brandName}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);
  const categories = getCategories(locale);

  return (
    <>
      <LocaleHtmlSync locale={locale} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.organization.name,
          url: getSiteUrl(),
          description: site.organization.description,
          contactPoint: site.footer.offices.map((office) => ({
            "@type": "ContactPoint",
            areaServed: office.city,
            telephone: office.phone,
            email: office.email,
            contactType: "sales",
          })),
        }}
      />
      <div className="page-shell flex min-h-screen flex-col">
        <Header
          locale={locale}
          categories={categories}
          navigation={site.navigation}
          languageNames={site.languageNames}
        />
        <div className="flex-1">{children}</div>
        <Footer locale={locale} footer={site.footer} categories={categories} />
      </div>
    </>
  );
}
