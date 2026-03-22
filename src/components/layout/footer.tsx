import Link from "next/link";

import { getBrandName } from "@/lib/branding";
import { localizePath } from "@/lib/i18n";
import type { Category, Locale } from "@/types/content";

import { Container } from "@/components/ui/container";
import { SiteMark } from "@/components/ui/site-mark";

type FooterData = {
  description: string;
  catalogTitle: string;
  companyTitle: string;
  contactTitle: string;
  rights: string;
  links: Array<{ label: string; href: string }>;
  offices: Array<{
    city: string;
    address: string;
    phone: string;
    email: string;
  }>;
};

export function Footer({
  locale,
  footer,
  categories,
}: {
  locale: Locale;
  footer: FooterData;
  categories: Category[];
}) {
  const brandName = getBrandName(locale);

  return (
    <footer className="section-divider mt-16 py-12">
      <Container>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-12">
          <div className="md:col-span-2 xl:col-span-4">
            <SiteMark locale={locale} />
            <p className="mt-6 max-w-md text-sm leading-7 text-muted">
              {footer.description}
            </p>
          </div>
          <div className="xl:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              {footer.catalogTitle}
            </p>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2 xl:grid-cols-1">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={localizePath(locale, `/catalog/${category.slug}`)}
                    className="text-sm leading-6 text-muted transition-colors hover:text-foreground"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="xl:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              {footer.companyTitle}
            </p>
            <ul className="mt-4 space-y-3">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localizePath(locale, link.href)}
                    className="text-sm leading-6 text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="xl:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              {footer.contactTitle}
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {footer.offices.map((office) => (
                <div
                  key={office.city}
                  className="rounded-[1.35rem] border border-line bg-white/55 p-4 text-sm leading-6 text-muted"
                >
                  <p className="font-semibold text-foreground">{office.city}</p>
                  <p>{office.address}</p>
                  <p>{office.phone}</p>
                  <p>{office.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-line pt-6 text-sm text-muted">
          {footer.rights.replaceAll("IMPXFIT", brandName)}
        </div>
      </Container>
    </footer>
  );
}
