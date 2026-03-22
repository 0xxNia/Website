"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * On in-app navigation between catalog products, align the viewport with the
 * detail column (master–detail UX like Feedimport).
 */
export function CatalogDetailScroll({ targetId }: { targetId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    const node = document.getElementById(targetId);
    if (!node) {
      return;
    }
    node.scrollIntoView({ behavior: "auto", block: "start" });
  }, [pathname, targetId]);

  return null;
}
