import { notFound } from "next/navigation";

import type { Locale } from "@/types/content";

export const locales = ["ru", "en", "kk"] as const;
export const defaultLocale: Locale = "ru";

const localeFormatMap: Record<Locale, string> = {
  ru: "ru-RU",
  en: "en-US",
  kk: "kk-KZ",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function getLocaleFromParams(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}

export function localizePath(locale: Locale, path = "") {
  const normalized = path === "/" ? "" : path;
  return `/${locale}${normalized}`;
}

export function replaceLocaleInPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${locale}`;
  }

  if (isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  return `/${segments.join("/")}`;
}

export function formatDate(locale: Locale, date: string) {
  return new Intl.DateTimeFormat(localeFormatMap[locale], {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
