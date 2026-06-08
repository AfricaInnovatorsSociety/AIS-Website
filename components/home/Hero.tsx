import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ornaments */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-[36rem] w-[36rem] rounded-full bg-crimson-700/15 blur-3xl" />
        <div className="absolute top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-amber-soft/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-charcoal-900) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="container-page">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-charcoal-100 px-3.5 py-1.5 text-xs font-semibold text-charcoal-700 shadow-[var(--shadow-soft)] mb-6">
            <Sparkles className="h-3.5 w-3.5 text-amber-soft" />
            <span>A student-led innovation society at {siteConfig.affiliation}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05]">
            Where Africa's next{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-crimson-700">innovators</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 md:bottom-2 h-3 md:h-4 bg-amber-soft/40 -z-0 rounded-sm"
              />
            </span>{" "}
            are made.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-charcoal-600 max-w-2xl leading-relaxed text-pretty">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href={siteConfig.forms.membership} size="lg" withArrow>
              Join AIS
            </Button>
            <Button href="/programs" variant="outline" size="lg">
              Explore programs
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-charcoal-500">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full ring-2 ring-[var(--color-cream)] gradient-brand"
                  style={{ filter: `hue-rotate(${i * 18}deg)` }}
                />
              ))}
            </div>
            <span>
              Join <span className="font-semibold text-charcoal-800">100+ CMU-Africa students</span> building what's next.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
