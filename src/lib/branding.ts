import type { Locale } from "@/types/content";

const brandNames: Record<Locale, string> = {
  ru: "Импекфид",
  en: "IMPXFIT",
  kk: "IMPXFIT",
};

function replaceBrandInValue(value: unknown, locale: Locale): unknown {
  if (locale !== "ru") {
    return value;
  }

  if (typeof value === "string") {
    return value.replaceAll("IMPXFIT", brandNames.ru);
  }

  if (Array.isArray(value)) {
    return value.map((item) => replaceBrandInValue(item, locale));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        replaceBrandInValue(item, locale),
      ]),
    );
  }

  return value;
}

export function getBrandName(locale: Locale) {
  return brandNames[locale];
}

export function withLocalizedBrand<T>(value: T, locale: Locale): T {
  return replaceBrandInValue(value, locale) as T;
}
