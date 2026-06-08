import { Section } from "@/components/ui/Container";
import { Stat } from "@/components/ui/Stat";
import { siteConfig } from "@/content/site.config";

export function ImpactStats() {
  return (
    <Section className="!py-12 md:!py-16">
      <div className="rounded-3xl bg-charcoal-950 text-white px-6 py-10 md:px-12 md:py-14 shadow-[var(--shadow-strong)] relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-crimson-700/30 blur-3xl"
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-soft mb-3">
            The numbers behind AIS
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl">
            A society built by students. Measured by what they ship.
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteConfig.stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold font-[var(--font-display)] text-white leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-charcoal-300">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
