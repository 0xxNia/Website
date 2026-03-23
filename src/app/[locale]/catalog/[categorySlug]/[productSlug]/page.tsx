import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getAllProductParams, getCategory, getProduct } from "@/data/catalog";
import { getSiteContent } from "@/data/site";
import { getLocaleFromParams, locales, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import type { Locale } from "@/types/content";

import { CatalogDetailScroll } from "@/components/catalog/catalog-detail-scroll";
import { CategorySidebarNav } from "@/components/catalog/category-sidebar-nav";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";

function splitProductDescription(description: string): {
  lead?: string;
  composition?: string;
  administrationExtra?: string;
} {
  const compMarkers = ["Состав:", "Composition:"];
  const admMarkers = [
    "Введение и дозирование:",
    "Administration and dosage:",
    "Administration and Dosage:",
  ];

  let compIdx = -1;
  let compLen = 0;
  for (const marker of compMarkers) {
    const i = description.indexOf(marker);
    if (i !== -1 && (compIdx === -1 || i < compIdx)) {
      compIdx = i;
      compLen = marker.length;
    }
  }

  if (compIdx === -1) {
    const trimmed = description.trim();
    return trimmed ? { lead: trimmed } : {};
  }

  const lead = description.slice(0, compIdx).trim();
  let afterComp = description.slice(compIdx + compLen).trim();

  let admIdx = -1;
  let admLen = 0;
  for (const marker of admMarkers) {
    const i = afterComp.indexOf(marker);
    if (i !== -1 && (admIdx === -1 || i < admIdx)) {
      admIdx = i;
      admLen = marker.length;
    }
  }

  if (admIdx === -1) {
    return {
      lead: lead || undefined,
      composition: afterComp || undefined,
    };
  }

  return {
    lead: lead || undefined,
    composition: afterComp.slice(0, admIdx).trim() || undefined,
    administrationExtra: afterComp.slice(admIdx + admLen).trim() || undefined,
  };
}

const sectionCopy: Record<
  Locale,
  {
    composition: string;
    advantages: string;
    administration: string;
    efficiency: string;
    substance: string;
    indicator: string;
  }
> = {
  ru: {
    composition: "Состав",
    advantages: "Преимущества",
    administration: "Введение и дозирование",
    efficiency: "Сорбционная эффективность",
    substance: "Показатель",
    indicator: "Значение",
  },
  en: {
    composition: "Composition",
    advantages: "Advantages",
    administration: "Administration and dosage",
    efficiency: "Sorption efficiency",
    substance: "Parameter",
    indicator: "Value",
  },
  kk: {
    composition: "Құрамы",
    advantages: "Артықшылықтары",
    administration: "Енгізу және дозалау",
    efficiency: "Сорбция тиімділігі",
    substance: "Көрсеткіш",
    indicator: "Мән",
  },
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllProductParams().map((item) => ({ locale, ...item })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: string;
    categorySlug: string;
    productSlug: string;
  }>;
}): Promise<Metadata> {
  const { categorySlug, productSlug } = await params;
  const locale = await getLocaleFromParams(params);
  const product = getProduct(locale, categorySlug, productSlug);

  if (!product) {
    return {};
  }

  return buildMetadata({
    locale,
    title: product.name,
    description: product.summary,
    path: `/catalog/${categorySlug}/${productSlug}`,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    locale: string;
    categorySlug: string;
    productSlug: string;
  }>;
}) {
  const { categorySlug, productSlug } = await params;
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);
  const category = getCategory(locale, categorySlug);
  const product = getProduct(locale, categorySlug, productSlug);
  const detailLabels = {
    ru: {
      form: "Форма",
      packaging: "Упаковка",
      leadTime: "Условия хранения",
    },
    en: {
      form: "Form",
      packaging: "Packaging",
      leadTime: "Storage conditions",
    },
    kk: {
      form: "Форма",
      packaging: "Қаптама",
      leadTime: "Сақтау шарттары",
    },
  }[locale];

  const labels = sectionCopy[locale];

  if (!category || !product) {
    notFound();
  }

  const explorerAllLabel =
    { ru: "Все позиции", en: "All positions", kk: "Барлық позициялар" }[locale];

  const body = splitProductDescription(product.description);

  return (
    <main>
      <CatalogDetailScroll targetId="catalog-product-main" />
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { label: site.common.homeLabel, href: localizePath(locale) },
            { label: site.navigation.catalogLabel, href: localizePath(locale, "/catalog") },
            { label: category.title, href: localizePath(locale, `/catalog/${category.slug}`) },
            { label: product.name },
          ]}
        />
      </Container>
      <section className="pb-16 pt-6 sm:pb-20 sm:pt-8">
        <Container>
          <div className="catalog-master-detail">
            <CategorySidebarNav
              locale={locale}
              category={category}
              labels={{ allPositions: explorerAllLabel }}
            />
            <div className="min-w-0 space-y-12">
              <article
                id="catalog-product-main"
                className="catalog-product-main overflow-hidden rounded-[1.35rem] border border-line bg-white shadow-[0_12px_40px_rgba(19,38,27,0.06)]"
              >
                {product.listingImage ? (
                  <div className="relative aspect-21/9 w-full min-h-[140px] bg-brand-soft/20">
                    <Image
                      src={product.listingImage}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 72vw"
                      priority
                    />
                  </div>
                ) : null}
                <div className="border-t border-line/60 p-5 sm:p-7 lg:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                    {product.badge}
                  </p>
                  <h1 className="mt-3 border-b-2 border-brand/35 bg-brand-soft/50 px-3 py-2.5 font-serif text-[1.65rem] leading-tight text-foreground sm:text-[2.15rem]">
                    {product.name}
                  </h1>
                  <p className="mt-4 text-sm font-semibold leading-7 text-foreground sm:text-base">
                    {product.summary}
                  </p>

                  {body.lead ? (
                    <p className="mt-4 text-sm leading-7 text-muted sm:text-[0.95rem] sm:leading-8">
                      {body.lead}
                    </p>
                  ) : null}
                  {body.composition ? (
                    <section className="mt-8">
                      <h2 className="text-base font-bold text-foreground">{labels.composition}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted sm:text-[0.95rem] sm:leading-8">
                        {body.composition}
                      </p>
                    </section>
                  ) : null}

                  {product.benefits.length > 0 ? (
                    <section className="mt-8">
                      <h2 className="text-base font-bold text-foreground">{labels.advantages}</h2>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted marker:text-brand sm:text-[0.95rem]">
                        {product.benefits.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </section>
                  ) : null}

                  <section className="mt-8">
                    <h2 className="text-base font-bold text-foreground">{labels.administration}</h2>
                    <p className="mt-2 text-sm leading-7 text-muted sm:text-[0.95rem] sm:leading-8">
                      {product.application}
                    </p>
                    {body.administrationExtra ? (
                      <p className="mt-3 text-sm leading-7 text-muted sm:text-[0.95rem] sm:leading-8">
                        {body.administrationExtra}
                      </p>
                    ) : null}
                  </section>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-line bg-[#f4f6f3] px-3 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                        {detailLabels.form}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-foreground">{product.form}</p>
                    </div>
                    <div className="rounded-xl border border-line bg-[#f4f6f3] px-3 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                        {detailLabels.packaging}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-foreground">{product.packaging}</p>
                    </div>
                    <div className="rounded-xl border border-line bg-[#f4f6f3] px-3 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                        {detailLabels.leadTime}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-foreground">{product.leadTime}</p>
                    </div>
                  </div>

                  {product.specs.length > 0 ? (
                    <section className="mt-8">
                      <h2 className="text-base font-bold text-foreground">{labels.efficiency}</h2>
                      <div className="mt-3 overflow-x-auto rounded-xl border border-line">
                        <table className="w-full min-w-[280px] border-collapse text-left text-sm">
                          <thead>
                            <tr className="border-b border-line bg-brand-soft/35">
                              <th className="px-4 py-3 font-semibold text-foreground">
                                {labels.substance}
                              </th>
                              <th className="px-4 py-3 font-semibold text-foreground">
                                {labels.indicator}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {product.specs.map((spec) => (
                              <tr
                                key={`${spec.label}-${spec.value}`}
                                className="border-b border-line/80 last:border-b-0"
                              >
                                <td className="px-4 py-3 font-medium text-foreground">
                                  {spec.label}
                                </td>
                                <td className="px-4 py-3 text-muted">{spec.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  ) : null}
                </div>
              </article>

            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
