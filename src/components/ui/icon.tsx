import type { IconName } from "@/types/content";

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.75,
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "feed":
      return (
        <svg {...common}>
          <path d="M6 17.5c2.8-3.2 4.7-5.8 5.9-10.5 2.6 2.4 4 5 4.1 7.9" />
          <path d="M8 18h8" />
          <path d="M10 13c1.2.2 2.6.1 4-.3" />
        </svg>
      );
    case "cattle":
      return (
        <svg {...common}>
          <path d="M5 8.5 8.5 6l1.8 2" />
          <path d="M19 8.5 15.5 6l-1.8 2" />
          <path d="M7 9.5c0 4.2 2.2 7 5 7s5-2.8 5-7" />
          <path d="M10 13h4" />
          <path d="M11 16v2m2-2v2" />
        </svg>
      );
    case "poultry":
      return (
        <svg {...common}>
          <path d="M7 15c0-4.2 2.8-7 6.2-7 2.4 0 3.8 1.4 3.8 3.3 0 2.6-2.2 4.2-5.3 4.2H7Z" />
          <path d="m14.8 8.2 2.2-2.2" />
          <path d="M9 16.5c.2 1.6 1.5 2.5 3 2.5 1.2 0 2.2-.5 3.2-1.6" />
        </svg>
      );
    case "swine":
      return (
        <svg {...common}>
          <path d="M7 11.5c0-2.8 2.4-5 5.5-5s5.5 2.2 5.5 5-2.4 5-5.5 5-5.5-2.2-5.5-5Z" />
          <path d="M10 11.8h5" />
          <path d="M11 15v2m3-2v2" />
          <path d="M17 8.5 19.5 7l.5 2.5" />
        </svg>
      );
    case "vet":
      return (
        <svg {...common}>
          <path d="M12 5.5v13" />
          <path d="M5.5 12h13" />
          <path d="M17.5 6.5A3.5 3.5 0 1 0 21 10" />
        </svg>
      );
    case "crop":
      return (
        <svg {...common}>
          <path d="M12 19V7" />
          <path d="M12 12c-4 0-6-2.2-6-5 4 0 6 2.2 6 5Z" />
          <path d="M12 15c4 0 6-2.2 6-5-4 0-6 2.2-6 5Z" />
        </svg>
      );
    case "technology":
      return (
        <svg {...common}>
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
          <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
        </svg>
      );
    case "news":
      return (
        <svg {...common}>
          <path d="M7 5h8l2 2v12H7Z" />
          <path d="M10 10h4M10 13h4M10 16h4" />
        </svg>
      );
    case "lab":
      return (
        <svg {...common}>
          <path d="M10 4v5L6.5 16A3 3 0 0 0 9 20h6a3 3 0 0 0 2.5-4L14 9V4" />
          <path d="M9.5 12h5" />
        </svg>
      );
    case "contact":
      return (
        <svg {...common}>
          <path d="M12 20s6-4.8 6-10a6 6 0 1 0-12 0c0 5.2 6 10 6 10Z" />
          <path d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    default:
      return null;
  }
}
