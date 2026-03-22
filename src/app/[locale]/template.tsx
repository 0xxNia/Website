import type { ReactNode } from "react";

/**
 * Remounts on each client navigation so the page-enter animation can run
 * (Next.js templates create a new instance per navigation, unlike layouts).
 */
export default function LocaleTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="page-enter flex min-h-0 w-full flex-1 flex-col">{children}</div>
  );
}
