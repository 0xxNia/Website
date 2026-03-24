import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance font-serif text-[2rem] leading-tight text-foreground sm:text-[2.35rem] lg:text-[2.85rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[0.98rem] leading-7 text-muted sm:text-[1.02rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
