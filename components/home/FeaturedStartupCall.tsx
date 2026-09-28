"use client";

import Image from "next/image";
import { CalendarClock, FolderKanban, Globe, Target } from "lucide-react";
import { Section } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";
import { asset } from "@/lib/asset";
import { FeaturedEventClient } from "./FeaturedEventClient";

const benefits = [
  {
    icon: Globe,
    title: "Website spotlight",
    body: "Be seen by founders, investors, and partners on africainnovatorssociety.app.",
  },
  {
    icon: Target,
    title: "Tailored opportunities",
    body: "Funding, programmes, competitions, and partnerships matched to your sector.",
  },
  {
    icon: FolderKanban,
    title: "Founder community",
    body: "A place in a growing directory of student ventures.",
  },
];

export function FeaturedStartupCall() {
  return (
    <Section className="!py-12 md:!py-16">
      <FeaturedEventClient>
        <div className="rounded-3xl overflow-hidden border border-crimson-200 bg-white shadow-[var(--shadow-strong)]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-0 items-stretch">
            <div className="p-7 md:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge tone="crimson">Open call</Badge>
                <Badge tone="amber">Deadline · 5 Oct 2026</Badge>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-700 mb-3">
                Startup directory
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight text-charcoal-900">
                Calling all student founders
              </h2>
              <p className="mt-4 text-lg text-charcoal-600 leading-relaxed max-w-2xl">
                AIS is building a Startup Directory to showcase student-led ventures. Submit your
                startup for a website spotlight and opportunities matched to your industry.
              </p>

              <ul className="mt-7 space-y-4">
                {benefits.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-crimson-50 text-crimson-700">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-semibold text-charcoal-900">{item.title}</span>
                      <span className="block text-sm text-charcoal-600 leading-relaxed">{item.body}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-charcoal-800">
                <CalendarClock className="h-4 w-4 text-crimson-700" />
                Deadline: Monday, 5 October 2026
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={siteConfig.forms.startupDirectory} size="lg" withArrow>
                  Submit your startup
                </Button>
                <Button href={siteConfig.forms.startupDirectoryForm} size="lg" variant="outline">
                  Open the form
                </Button>
              </div>
            </div>

            <div className="relative bg-[var(--color-cream)] border-t lg:border-t-0 lg:border-l border-charcoal-100 p-5 md:p-8 flex items-center justify-center">
              <Image
                src={asset("/images/startups/student-founders-call.png")}
                alt="Calling all student founders — AIS Startup Directory flyer"
                width={720}
                height={900}
                className="w-full max-w-md rounded-2xl shadow-[var(--shadow-soft)]"
                priority
              />
            </div>
          </div>
        </div>
      </FeaturedEventClient>
    </Section>
  );
}
