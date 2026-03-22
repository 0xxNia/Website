import { cn } from "@/lib/utils";

export function SocialRoleBullet({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#a6ce39] text-white shadow-sm",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 translate-x-px"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6-6 6" />
      </svg>
    </span>
  );
}
