import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { programs, type Program } from "@/content/programs";
import { Wrench, Trophy, Users2, Network, Check, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Programs",
  path: "/programs",
  description:
    "Workshops, pitch competitions, mentorship, and networking — the four pillars of AIS programming.",
});

const iconMap = {
  workshop: Wrench,
  pitch: Trophy,
  mentor: Users2,
  network: Network,
} as const;

function ProgramCard({ program }: { program: Program }) {
  const Icon = iconMap[program.icon];
  return (
    <Card className="overflow-hidden hover:border-crimson-200 transition-all hover:-translate-y-0.5">
      <div className="gradient-brand h-1.5" />
      <CardBody className="!p-7 md:!p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-crimson-50 text-crimson-700 shrink-0">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-charcoal-900">{program.title}</h3>
            <p className="mt-2 text-charcoal-600 leading-relaxed">{program.description}</p>

            <ul className="mt-5 space-y-2">
              {program.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                  <Check className="h-4 w-4 mt-0.5 text-crimson-700 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button href={program.ctaUrl} variant="primary" size="md" withArrow>
                {program.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Four pillars. One pipeline of African founders."
        description="From your first workshop to your venture's first cheque, our programs are built to take you from idea to impact."
      />

      <Section className="!pt-4">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {programs.map((p) => (
            <ProgramCard key={p.slug} program={p} />
          ))}
        </div>
      </Section>

      <Section className="bg-white border-y border-charcoal-100">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-700 mb-3">
              How a year in AIS looks
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance leading-tight">
              An academic year inside the society.
            </h2>
            <p className="mt-4 text-lg text-charcoal-600 max-w-2xl">
              The rhythm of AIS is intentional. Every term layers programming so members go from learning to building to shipping — fast.
            </p>
          </div>

          <ol className="relative border-l-2 border-crimson-100 pl-6 space-y-6">
            {[
              { term: "Fall", focus: "Foundations workshops + idea validation" },
              { term: "Winter", focus: "Pitch Nights + mentor matching" },
              { term: "Spring", focus: "Build sprints + investor sessions" },
              { term: "Summer", focus: "Startup Weekend + alumni showcase" },
            ].map((step) => (
              <li key={step.term} className="relative">
                <div className="absolute -left-[34px] top-1.5 w-4 h-4 rounded-full bg-crimson-700 ring-4 ring-[var(--color-cream)]" />
                <h4 className="font-bold text-charcoal-900">{step.term}</h4>
                <p className="text-sm text-charcoal-600 mt-0.5">{step.focus}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to step into a program?</h2>
          <p className="mt-4 text-lg text-charcoal-600">
            All AIS programs are open to current CMU-Africa students. Membership is free — applications take less than three minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="outline" size="lg">
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href={programs[0].ctaUrl} size="lg" withArrow>
              Join AIS
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
