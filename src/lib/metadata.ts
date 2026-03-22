import type { Metadata } from "next";

import { getBrandName } from "@/lib/branding";
import { localizePath, locales } from "@/lib/i18n";
import type { Locale } from "@/types/content";

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  // Vercel preview & production (HTTPS)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://impxfit.com";
}

const siteUrl = resolveSiteUrl();

function buildLanguageAlternates(path: string) {
  return Object.fromEntries(
    locales.map((locale) => [locale, localizePath(locale, path)]),
  );
}

export function getSiteUrl() {
  return siteUrl;
}

export function buildMetadata({
  locale,
  title,
  description,
  path = "",
  keywords,
}: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const localizedPath = localizePath(locale, path);
  const brandName = getBrandName(locale);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    alternates: {
      canonical: localizedPath,
      languages: buildLanguageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: localizedPath,
      siteName: brandName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
