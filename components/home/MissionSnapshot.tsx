import { Section } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";
import { Compass, Rocket, Users } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Direction",
    body: "Workshops, mentors, and frameworks that turn vague ideas into shippable ventures.",
  },
  {
    icon: Rocket,
    title: "Momentum",
    body: "Weekly programming and pitch nights that keep every member moving forward.",
  },
  {
    icon: Users,
    title: "Community",
    body: "A network of founders, alumni, and operators who back each other for years after graduation.",
  },
];

export function MissionSnapshot() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-700 mb-3">
            Our mission
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            We build the founders Africa is waiting for.
          </h2>
          <p className="mt-5 text-lg text-charcoal-600 leading-relaxed text-pretty">
            {siteConfig.mission}
          </p>
          <div className="mt-8">
            <Button href="/about" variant="outline" withArrow>
              Read our full story
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 p-5 md:p-6 rounded-2xl bg-white border border-charcoal-100 shadow-[var(--shadow-soft)] hover:border-crimson-200 transition-colors"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-crimson-50 text-crimson-700">
                <p.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal-900">{p.title}</h3>
                <p className="mt-1 text-sm text-charcoal-600 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
