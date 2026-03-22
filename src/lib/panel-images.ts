/**
 * Editorial / catalog hero art used as card backgrounds (agro B2B consistency).
 */
export const EDITORIAL_PANEL_IMAGES = [
  "/media/catalog/feed-production-hero.png",
  "/media/catalog/poultry-hero.jpg",
  "/media/catalog/cattle-hero.png",
  "/media/catalog/swine-hero.jpg",
  "/media/catalog/veterinary-hero.png",
  "/media/catalog/crop-feed-solutions-hero.png",
  "/media/catalog/technical-support-hero.png",
] as const;

export function panelImageAt(index: number): string {
  return EDITORIAL_PANEL_IMAGES[index % EDITORIAL_PANEL_IMAGES.length] ?? EDITORIAL_PANEL_IMAGES[0];
}
