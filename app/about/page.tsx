import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site.config";
import { buildMetadata } from "@/lib/seo";
import { Target, Eye, Heart, ArrowUpRight } from "lucide-react";

export const metadata = buildMetadata({
  title: "About",
  path: "/about",
  description: `Learn the story, mission, and values of the ${siteConfig.name} at ${siteConfig.affiliation}.`,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AIS"
        title="A society built by students, for the founders Africa needs."
        description="We exist because the most promising entrepreneurs on the continent are already on campus — they just need the right room to walk into."
      />

      <Section className="!pt-4 md:!pt-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          <article className="prose-lg max-w-none">
            <SectionHeading eyebrow="Our story" title="Where AIS comes from." />
            <div className="mt-6 space-y-5 text-lg text-charcoal-700 leading-relaxed text-pretty">
              {siteConfig.originStory.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>

          <aside className="lg:sticky lg:top-28 self-start">
            <Card className="overflow-hidden">
              <div className="gradient-brand h-2" />
              <CardBody>
                <h3 className="text-lg font-bold">{siteConfig.affiliation}</h3>
                <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">
                  AIS is a recognised student organisation at {siteConfig.affiliation}, the
                  university's home for engineering and technology leadership in Africa.
                </p>
                <a
                  href="https://www.africa.engineering.cmu.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson-700 hover:text-crimson-800"
                >
                  Visit CMU-Africa
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </CardBody>
            </Card>
          </aside>
        </div>
      </Section>

      <Section className="bg-white border-y border-charcoal-100">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-crimson-700 mb-3">
                <Target className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Mission</span>
              </div>
              <p className="text-2xl md:text-3xl font-semibold text-charcoal-900 leading-snug text-balance">
                {siteConfig.mission}
              </p>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-crimson-700 mb-3">
                <Eye className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">Vision</span>
              </div>
              <p className="text-xl md:text-2xl text-charcoal-700 leading-snug text-balance">
                {siteConfig.vision}
              </p>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-crimson-700 mb-5">
              <Heart className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">Values</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {siteConfig.values.map((v) => (
                <div
                  key={v.title}
                  className="p-5 rounded-2xl bg-[var(--color-cream)] border border-charcoal-100 hover:border-crimson-200 transition-colors"
                >
                  <h4 className="font-bold text-charcoal-900">{v.title}</h4>
                  <p className="mt-1.5 text-sm text-charcoal-600 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl overflow-hidden bg-charcoal-950 text-white p-8 md:p-12 lg:p-14 relative">
          <div aria-hidden className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-crimson-700/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1.4fr_auto] gap-8 lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-soft mb-3">
                Meet the team
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-balance leading-tight">
                The students leading the Africa Innovators Society this year.
              </h2>
              <p className="mt-4 text-charcoal-300 max-w-xl">
                From our founder to the current board, get to know the people building AIS.
              </p>
            </div>
            <Button href="/about/leadership" size="lg" withArrow className="self-start lg:self-auto">
              Meet the leadership
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
