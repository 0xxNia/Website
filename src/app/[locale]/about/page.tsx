import type { Metadata } from "next";

import { getSiteContent } from "@/data/site";
import { getLocaleFromParams, localizePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

import { SocialRoleBullet } from "@/components/about/social-role-bullet";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);

  return buildMetadata({
    locale,
    title: site.about.seoTitle,
    description: site.about.seoDescription,
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocaleFromParams(params);
  const site = getSiteContent(locale);
  const { about } = site;

  const businessSectionLabels = {
    ru: { offices: "География", mission: "Миссия" },
    en: { offices: "Presence", mission: "Mission" },
    kk: { offices: "География", mission: "Миссия" },
  }[locale];

  return (
    <main className="text-foreground">
      <Container className="pt-8">
        <Breadcrumbs
          items={[
            { label: site.common.homeLabel, href: localizePath(locale) },
            { label: site.navigation.links[0].label },
          ]}
        />
      </Container>

      {/* Our business — editorial layout */}
      <section className="bg-linear-to-b from-[#e4eef5] via-[#eef5f9] to-[#f2f7fb] py-14 sm:py-20">
        <Container className="max-w-4xl">
          <ScrollReveal>
          <div className="about-video-shell relative overflow-hidden rounded-[1.65rem] border border-white/50 shadow-[0_24px_70px_rgba(25,55,75,0.12)] sm:rounded-[1.85rem]">
            <video
              className="about-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/media/about/about-business-poster.jpg"
              aria-hidden="true"
            >
              <source src="/media/about/about-business.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(10,26,24,0.74)_0%,rgba(10,26,24,0.56)_28%,rgba(10,26,24,0.34)_54%,rgba(10,26,24,0.52)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(166,206,57,0.26),transparent_18%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.14),transparent_20%)]" />
            <div className="relative z-10 h-1 bg-linear-to-r from-[#a6ce39] via-[#8fb832] to-[#a6ce39]/40" aria-hidden />
            <div className="relative z-10 px-5 py-9 sm:px-9 sm:py-11 lg:px-12 lg:py-12">
              <div className="flex gap-4 sm:gap-6">
                <span
                  className="mt-1 h-12 w-1 shrink-0 rounded-full bg-[#a6ce39] sm:h-21"
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <p className="max-w-2xl text-[1.02rem] font-medium leading-snug text-white/86 sm:text-[1.12rem] sm:leading-relaxed">
                    {about.intro.headline}
                  </p>
                  <h1 className="mt-5 text-balance font-serif text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white drop-shadow-[0_18px_42px_rgba(0,0,0,0.24)] sm:mt-6 sm:text-[2.35rem] lg:text-[2.55rem]">
                    {about.business.title}
                  </h1>
                </div>
              </div>

              <div className="mt-9 grid gap-5 sm:mt-10 lg:grid-cols-2 lg:gap-6">
                {about.business.paragraphs.map((paragraph) => (
                  <div
                    key={paragraph}
                    className="rounded-xl border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(255,255,255,0.08))] px-5 py-5 shadow-[0_16px_36px_rgba(8,20,18,0.12)] backdrop-blur-[5px] sm:px-6 sm:py-6"
                  >
                    <p className="text-[0.94rem] leading-[1.78] text-white/88 sm:text-[0.98rem] sm:leading-[1.82]">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>

              <figure className="mt-9 border-l-[3px] border-[#a6ce39] bg-linear-to-r from-[#a6ce39]/20 to-white/0 px-5 py-5 sm:mt-10 sm:px-7 sm:py-6">
                <blockquote className="text-[0.72rem] font-bold uppercase leading-[1.65] tracking-[0.12em] text-white sm:text-[0.76rem] sm:tracking-[0.14em]">
                  {about.businessShout}
                </blockquote>
              </figure>

              <div className="mt-9 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
                <div className="rounded-xl border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] px-5 py-5 shadow-[0_12px_28px_rgba(10,22,20,0.12)] backdrop-blur-[5px] sm:px-6 sm:py-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#c8ef6f]">
                    {businessSectionLabels.offices}
                  </p>
                  <p className="mt-3 text-[0.94rem] leading-[1.78] text-white/88 sm:text-[0.98rem]">
                    {about.footprint}
                  </p>
                </div>
                <div className="rounded-xl border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.06))] px-5 py-5 shadow-[0_12px_28px_rgba(10,22,20,0.12)] backdrop-blur-[5px] sm:px-6 sm:py-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#c8ef6f]">
                    {businessSectionLabels.mission}
                  </p>
                  <p className="mt-3 text-[0.94rem] leading-[1.78] text-white/88 sm:text-[0.98rem]">
                    {about.mission}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Social role */}
      <section className="bg-white py-14 sm:py-20">
        <Container className="max-w-3xl">
          <ScrollReveal>
          <h2 className="text-[1.65rem] font-bold leading-tight tracking-tight text-[#1a2f4a] sm:text-[2rem] md:text-[2.15rem]">
            {about.social.title}
          </h2>
          <div className="mt-3 h-0.5 w-14 rounded-full bg-[#a6ce39]" aria-hidden />
          <ul className="mt-8 list-none space-y-6 sm:space-y-7">
            {about.social.items.map((line) => (
              <li key={line} className="flex gap-4 sm:gap-5">
                <SocialRoleBullet />
                <p className="min-w-0 flex-1 text-[0.95rem] leading-[1.78] text-[#4a5560] sm:text-base">
                  {line}
                </p>
              </li>
            ))}
          </ul>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
