import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16", className)}>
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-32 h-[26rem] w-[26rem] rounded-full bg-crimson-700/10 blur-3xl" />
        <div className="absolute top-32 -left-24 h-72 w-72 rounded-full bg-amber-soft/10 blur-3xl" />
      </div>
      <div className="container-page max-w-4xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-700 mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg md:text-xl text-charcoal-600 max-w-3xl text-pretty leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
