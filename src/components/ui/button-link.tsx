import Link from "next/link";

import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  label,
  variant = "primary",
  className,
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const variantClassName =
    variant === "primary"
      ? "bg-brand !text-white shadow-[0_18px_40px_rgba(20,43,30,0.16)] hover:bg-brand-strong"
      : variant === "secondary"
        ? // !important: global `a { color: inherit }` is unlayered and otherwise pulls parent `text-white` on hero/CTA panels
          "border border-line-strong bg-white/70 !text-foreground hover:bg-white hover:!text-brand-strong"
        : "text-brand hover:text-brand-strong";

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition-colors duration-200",
        variantClassName,
        className,
      )}
    >
      {label}
    </Link>
  );
}
