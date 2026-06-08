import { cn } from "@/lib/cn";

export function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="text-4xl md:text-5xl font-bold font-[var(--font-display)] text-crimson-700 leading-none">
        {value}
      </span>
      <span className="mt-2 text-sm font-medium uppercase tracking-wider text-charcoal-500">
        {label}
      </span>
    </div>
  );
}
