export type Locale = "ru" | "en" | "kk";

export type IconName =
  | "feed"
  | "cattle"
  | "poultry"
  | "swine"
  | "vet"
  | "crop"
  | "technology"
  | "news"
  | "lab"
  | "contact"
  | "arrow"
  | "plus";

export type ActionLink = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type CapabilityItem = {
  title: string;
  text: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductGroupNav = {
  id: string;
  title: string;
  productSlugs: string[];
};

export type Product = {
  slug: string;
  badge: string;
  name: string;
  summary: string;
  description: string;
  /** Optional image for catalog explorer / listing (path under `public`). */
  listingImage?: string;
  benefits: string[];
  application: string;
  form: string;
  packaging: string;
  leadTime: string;
  tags: string[];
  specs: ProductSpec[];
};

export type Category = {
  slug: string;
  icon: IconName;
  /** Optional hero photo path under `public` (e.g. `/media/catalog/foo.png`). */
  coverImage?: string;
  /**
   * Sidebar accordion groups (e.g. mycotoxin binders, amino acids).
   * When omitted, the UI builds one group with all products.
   */
  productGroups?: ProductGroupNav[];
  title: string;
  teaser: string;
  summary: string;
  description: string;
  focusAreas: string[];
  capabilities: CapabilityItem[];
  metrics: StatItem[];
  products: Product[];
  ctaTitle: string;
  ctaText: string;
};

export type NewsSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type NewsArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  cardImage?: string;
  /** Stronger scrim when the photo is naturally light (e.g. studio grey / white). */
  cardImageTone?: "dark" | "light";
  heroTitle: string;
  heroSummary: string;
  publishedAt: string;
  sections: NewsSection[];
  relatedCategorySlugs: string[];
};
