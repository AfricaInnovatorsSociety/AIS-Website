import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";
import {
  MessageSquare,
  Users2,
  Handshake,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  ArrowUpRight,
  Newspaper,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Get in touch with the Africa Innovators Society — for membership, mentorship, sponsorship, or general enquiries.",
});

const contactRoutes = [
  {
    title: "General enquiries",
    description: "Got a question, a story, or just want to say hi? Drop us a message.",
    icon: MessageSquare,
    cta: "Open form",
    url: siteConfig.forms.general,
  },
  {
    title: "Mentorship",
    description: "Operators, founders, and investors — apply to mentor the next generation of African founders.",
    icon: Users2,
    cta: "Apply to mentor",
    url: siteConfig.forms.mentorship,
  },
  {
    title: "Sponsorship & partnership",
    description: "Companies, funds, and organisations who want to back AIS — let's build something together.",
    icon: Handshake,
    cta: "Start the conversation",
    url: siteConfig.forms.sponsorship,
  },
  {
    title: "Newsletter",
    description: "Get monthly updates on programs, events, and member wins delivered to your inbox.",
    icon: Newspaper,
    cta: "Subscribe",
    url: siteConfig.forms.newsletter,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation."
        description="Whatever you're reaching out about — membership, mentorship, sponsorship, or a quick question — there's a place for it below."
      />

      <Section className="!pt-4">
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {contactRoutes.map((route) => (
            <Card key={route.title} className="overflow-hidden hover:border-crimson-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-strong)] transition-all">
              <CardBody className="!p-7 md:!p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-crimson-50 text-crimson-700 mb-5">
                  <route.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900">{route.title}</h3>
                <p className="mt-2 text-charcoal-600 leading-relaxed flex-1">{route.description}</p>
                <div className="mt-6">
                  <Button href={route.url} variant="primary" size="md" withArrow>
                    {route.cta}
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-white border-y border-charcoal-100">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-700 mb-3">
              Reach us directly
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance leading-tight">
              Old-school always works too.
            </h2>
            <p className="mt-4 text-charcoal-600 max-w-md">
              Prefer email? Want to walk into our office hours on campus? Here's where to find us.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-crimson-50 text-crimson-700 inline-flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-charcoal-500 font-semibold">Email</div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-charcoal-900 font-medium hover:text-crimson-700 transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-crimson-50 text-crimson-700 inline-flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-charcoal-500 font-semibold">Where we are</div>
                  <div className="text-charcoal-900 font-medium">{siteConfig.contact.address}</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-700 mb-3">
              On social
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance leading-tight">
              Come hang out where we hang out.
            </h2>
            <p className="mt-4 text-charcoal-600 max-w-md">
              The fastest way to keep up with AIS day-to-day — follow us across the channels you already use.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl border border-charcoal-100 hover:border-crimson-200 hover:bg-crimson-50/50 transition-colors">
                  <Linkedin className="h-5 w-5 text-crimson-700" />
                  <span className="font-semibold flex-1">LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4 text-charcoal-400 group-hover:text-crimson-700 transition-colors" />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl border border-charcoal-100 hover:border-crimson-200 hover:bg-crimson-50/50 transition-colors">
                  <Instagram className="h-5 w-5 text-crimson-700" />
                  <span className="font-semibold flex-1">Instagram</span>
                  <ArrowUpRight className="h-4 w-4 text-charcoal-400 group-hover:text-crimson-700 transition-colors" />
                </a>
              )}
              {siteConfig.social.twitter && (
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl border border-charcoal-100 hover:border-crimson-200 hover:bg-crimson-50/50 transition-colors">
                  <Twitter className="h-5 w-5 text-crimson-700" />
                  <span className="font-semibold flex-1">Twitter / X</span>
                  <ArrowUpRight className="h-4 w-4 text-charcoal-400 group-hover:text-crimson-700 transition-colors" />
                </a>
              )}
              {siteConfig.social.youtube && (
                <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 rounded-xl border border-charcoal-100 hover:border-crimson-200 hover:bg-crimson-50/50 transition-colors">
                  <Youtube className="h-5 w-5 text-crimson-700" />
                  <span className="font-semibold flex-1">YouTube</span>
                  <ArrowUpRight className="h-4 w-4 text-charcoal-400 group-hover:text-crimson-700 transition-colors" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
