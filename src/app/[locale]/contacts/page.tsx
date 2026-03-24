import type { Metadata } from "next";

import { getSiteContent } from "@/data/site";
import { getLocaleFromParams, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

import { ContactForm } from "@/components/sections/contact-form";
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
    title: site.contacts.seoTitle,
    description: site.contacts.seoDescription,
    path: "/contacts",
  });
}

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);

  return (
    <main>
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { label: site.common.homeLabel, href: localizePath(locale) },
            { label: site.navigation.links[3].label },
          ]}
        />
      </Container>
      <section className="pb-16 pt-4 sm:pb-20 sm:pt-6">
        <Container>
          <div className="relative overflow-hidden rounded-4xl border border-white/20 shadow-[0_22px_54px_rgba(14,26,17,0.12)]">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat bg-position-[center_28%]"
              style={{
                backgroundImage: "url(/media/contact/contacts-offices-interior.png)",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,18,22,0.68)_0%,rgba(12,16,20,0.52)_42%,rgba(10,14,18,0.78)_100%)]"
              aria-hidden
            />
            <div className="relative z-10 p-6 sm:p-8">
              <h2 className="font-serif text-3xl text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.45)]">
                {site.contacts.officesTitle}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {site.contacts.offices.map((office) => (
                  <article
                    key={office.city}
                    className="rounded-[1.6rem] border border-white/35 bg-white/92 p-5 shadow-[0_12px_36px_rgba(0,0,0,0.14)] backdrop-blur-[6px]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      {office.city}
                    </p>
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-foreground">
                      {office.address}
                    </p>
                    <p className="mt-3 text-sm text-muted">{office.phone}</p>
                    <p className="mt-1 text-sm text-muted">{office.email}</p>
                    <p className="mt-1 text-sm text-muted">{office.schedule}</p>
                    {"registration" in office && office.registration ? (
                      <p className="mt-2 text-xs leading-snug text-muted">
                        {office.registration}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container>
          <ContactForm
            title={site.contacts.form.title}
            description={site.contacts.form.description}
            fields={site.contacts.form.fields}
            requestTypes={site.contacts.form.requestTypes}
            privacyNote={site.contacts.form.privacyNote}
            submitLabel={site.common.submitLabel}
            pendingLabel={site.common.pendingLabel}
            successMessage={site.common.successMessage}
            errorMessage={site.common.errorMessage}
          />
        </Container>
      </section>
    </main>
  );
}
