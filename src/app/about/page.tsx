import { redirect } from "next/navigation";

import { defaultLocale } from "@/lib/i18n";

/** Locale lives under /[locale]/… — direct /about hits this redirect. */
export default function AboutLocaleRedirect() {
  redirect(`/${defaultLocale}/about`);
}
