import type { Locale } from "@/types/content";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

/**
 * Russian (primary site copy) + English. Kazakh defaults to Russian.
 */
export function T(ru: string, en: string, kk: string = ru): LocalizedText {
  return { ru, en, kk };
}

export function TList(
  ru: string[],
  en: string[],
  kk: string[] = ru,
): LocalizedList {
  return { ru, en, kk };
}
