import type { MetadataRoute } from "next";

import {
  getAllCategoryParams,
  getAllProductParams,
} from "@/data/catalog";
import { getAllNewsParams } from "@/data/news";
import { locales, localizePath } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/metadata";

const staticPaths = ["", "/about", "/catalog", "/news", "/contacts"];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const staticEntries = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteUrl}${localizePath(locale, path)}`,
      lastModified: new Date(),
    })),
  );

  const categoryEntries = locales.flatMap((locale) =>
    getAllCategoryParams().map(({ categorySlug }) => ({
      url: `${siteUrl}${localizePath(locale, `/catalog/${categorySlug}`)}`,
      lastModified: new Date(),
    })),
  );

  const productEntries = locales.flatMap((locale) =>
    getAllProductParams().map(({ categorySlug, productSlug }) => ({
      url: `${siteUrl}${localizePath(locale, `/catalog/${categorySlug}/${productSlug}`)}`,
      lastModified: new Date(),
    })),
  );

  const newsEntries = locales.flatMap((locale) =>
    getAllNewsParams().map(({ slug }) => ({
      url: `${siteUrl}${localizePath(locale, `/news/${slug}`)}`,
      lastModified: new Date(),
    })),
  );

  return [...staticEntries, ...categoryEntries, ...productEntries, ...newsEntries];
}
