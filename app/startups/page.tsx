import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Container";
import { GoogleFormEmbed } from "@/components/forms/GoogleFormEmbed";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";
import { asset } from "@/lib/asset";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Calling All Student Founders",
  path: "/startups",
  description:
    "Submit your student-led venture to the AIS Startup Directory for a website spotlight and opportunities matched to your sector. Deadline: 5 October 2026.",
});

const readyList = [
  "Your startup logo",
  "A founder photo",
  "Your business details (a short overview, website, and industry)",
];

export default function StartupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Startup directory"
        title="Calling all student founders."
        description="AIS is building a Startup Directory to showcase student-led ventures. Founders, co-founders, or team members can submit on behalf of their startup."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#submit" size="lg" withArrow>
            Submit your startup
          </Button>
          <Button href={siteConfig.forms.startupDirectoryForm} size="lg" variant="outline">
            Open the form
          </Button>
        </div>
      </PageHero>

      <Section className="!pt-4">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">When you submit, you get</h2>
            <ul className="mt-6 space-y-5 text-charcoal-700">
              <li>
                <p className="font-semibold text-charcoal-900">A spotlight on the AIS website</p>
                <p className="mt-1 leading-relaxed">
                  Founders, investors, and partners can see your startup on africainnovatorssociety.app.
                </p>
              </li>
              <li>
                <p className="font-semibold text-charcoal-900">Opportunities matched to your sector</p>
                <p className="mt-1 leading-relaxed">
                  Funding, programmes, competitions, and partnerships we share based on your industry.
                </p>
              </li>
              <li>
                <p className="font-semibold text-charcoal-900">A place in a growing community of student ventures</p>
              </li>
            </ul>

            <div className="mt-10 rounded-2xl border border-charcoal-100 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-crimson-700">
                Have these ready
              </p>
              <ul className="mt-4 space-y-2.5">
                {readyList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-charcoal-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-crimson-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-semibold text-crimson-700">
                Deadline: Monday, 5 October 2026
              </p>
            </div>

            <div className="mt-8 rounded-2xl bg-[var(--color-cream)] border border-charcoal-100 p-6">
              <h3 className="font-bold text-charcoal-900">Not registered yet?</h3>
              <p className="mt-2 text-charcoal-600 leading-relaxed">
                If you haven&apos;t formally registered your venture, now is a good time to plan for it.
                Many funding and partnership opportunities require a registered business. Need help
                registering your business in Rwanda? Reach out to any AIS executive.
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <Image
              src={asset("/images/startups/student-founders-call.png")}
              alt="Calling all student founders — AIS Startup Directory flyer"
              width={720}
              height={900}
              className="w-full rounded-3xl border border-charcoal-100 shadow-[var(--shadow-soft)]"
              priority
            />
          </div>
        </div>
      </Section>

      <Section id="submit" className="bg-white border-t border-charcoal-100 !pt-12 md:!pt-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-balance">
            Submit your startup
          </h2>
          <p className="mt-3 text-center text-charcoal-600 max-w-2xl mx-auto">
            Let&apos;s show the world what student innovators are building.
          </p>
          <div className="mt-8">
            <GoogleFormEmbed
              src={siteConfig.forms.startupDirectoryEmbed}
              title="AIS Startup Directory submission form"
              height={1467}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
