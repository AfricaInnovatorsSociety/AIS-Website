import { cn } from "@/lib/cn";

type Tone = "crimson" | "amber" | "charcoal" | "outline";

const tones: Record<Tone, string> = {
  crimson: "bg-crimson-50 text-crimson-700 ring-crimson-100",
  amber: "bg-amber-50 text-amber-deep ring-amber-100",
  charcoal: "bg-charcoal-100 text-charcoal-800 ring-charcoal-200",
  outline: "bg-transparent text-charcoal-700 ring-charcoal-200",
};

export function Badge({
  children,
  tone = "crimson",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
