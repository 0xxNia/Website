import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Container({
  as: Component = "div",
  className,
  children,
}: {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Component>
  );
}
