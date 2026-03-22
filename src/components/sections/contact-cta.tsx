import type { ActionLink } from "@/types/content";
import { cn } from "@/lib/utils";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function ContactCta({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: ActionLink;
  secondaryAction?: ActionLink;
  backgroundImage?: string;
}) {
  const hasBackground = Boolean(backgroundImage);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div
          className={cn(
            "relative overflow-hidden rounded-[2.4rem] border p-8 sm:p-10 lg:p-12",
            hasBackground
              ? "border-white/14 bg-[#203426] shadow-[0_26px_70px_rgba(18,35,25,0.14)]"
              : "glass-card border-line",
          )}
        >
          {hasBackground ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(9,17,11,0.68)_0%,rgba(9,17,11,0.48)_36%,rgba(9,17,11,0.3)_66%,rgba(9,17,11,0.42)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(201,234,125,0.2),transparent_18%),linear-gradient(118deg,rgba(255,255,255,0.08)_0%,transparent_28%,transparent_80%,rgba(255,255,255,0.04)_100%)]" />
            </>
          ) : null}
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr,auto] lg:items-end">
            <div>
              <p
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.28em]",
                  hasBackground ? "text-[#d8f08a]" : "text-brand",
                )}
              >
                {eyebrow}
              </p>
              <h2
                className={cn(
                  "mt-4 max-w-3xl text-balance font-serif text-3xl sm:text-4xl",
                  hasBackground ? "text-white" : "text-foreground",
                )}
              >
                {title}
              </h2>
              <p
                className={cn(
                  "mt-5 max-w-3xl text-base leading-7",
                  hasBackground ? "text-white/82" : "text-muted",
                )}
              >
                {description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ButtonLink
                href={primaryAction.href}
                label={primaryAction.label}
                className={
                  hasBackground
                    ? "bg-white !text-foreground shadow-[0_18px_40px_rgba(20,43,30,0.14)] hover:bg-white/92 hover:!text-foreground"
                    : undefined
                }
              />
              {secondaryAction ? (
                <ButtonLink
                  href={secondaryAction.href}
                  label={secondaryAction.label}
                  variant="secondary"
                  className={
                    hasBackground
                      ? "!border-2 !border-white/90 !bg-transparent !text-white shadow-none hover:!bg-white/14 hover:!text-white"
                      : undefined
                  }
                />
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
