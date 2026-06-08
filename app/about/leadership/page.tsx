import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Container";
import { Card, CardBody } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Linkedin, Mail, Crown } from "lucide-react";
import { founders, currentTeam } from "@/content/leadership";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Leadership",
  path: "/about/leadership",
  description:
    "Meet the founder and current student leadership behind the Africa Innovators Society.",
});

function LeaderCard({
  leader,
  variant = "default",
}: {
  leader: (typeof currentTeam)[number];
  variant?: "default" | "founder";
}) {
  const isFounder = variant === "founder";
  return (
    <Card
      className={
        isFounder
          ? "overflow-hidden ring-1 ring-crimson-100"
          : "overflow-hidden hover:border-crimson-200 transition-colors"
      }
    >
      {isFounder && (
        <div className="gradient-brand text-white px-6 py-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
          <Crown className="h-4 w-4" />
          Founder
        </div>
      )}
      <CardBody className={isFounder ? "!p-8" : ""}>
        <div className={isFounder ? "flex flex-col sm:flex-row gap-6 items-start" : "flex flex-col items-center text-center"}>
          <Avatar
            name={leader.name}
            src={leader.photo}
            size={isFounder ? 120 : 96}
            className="shrink-0"
          />
          <div className={isFounder ? "" : "mt-4"}>
            <h3 className={isFounder ? "text-xl font-bold" : "font-bold"}>{leader.name}</h3>
            <p className="text-sm text-crimson-700 font-semibold mt-1">{leader.role}</p>
            <p className={`mt-3 text-sm text-charcoal-600 leading-relaxed ${isFounder ? "" : "line-clamp-4"}`}>
              {leader.bio}
            </p>
            <div className="mt-4 flex items-center gap-2">
              {leader.linkedin && (
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name} on LinkedIn`}
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-charcoal-100 text-charcoal-700 hover:bg-crimson-700 hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {leader.email && (
                <a
                  href={`mailto:${leader.email}`}
                  aria-label={`Email ${leader.name}`}
                  className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-charcoal-100 text-charcoal-700 hover:bg-crimson-700 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default function LeadershipPage() {
  const team = [...currentTeam].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The people behind AIS."
        description="From the founder who started it all to this year's elected officers — meet the students leading the Africa Innovators Society."
      />

      <Section className="!pt-4">
        <div className="grid gap-10">
          <div className="grid gap-6">
            <Badge tone="amber" className="self-start">The founding story</Badge>
            <div className="grid lg:grid-cols-2 gap-6">
              {founders.map((f) => (
                <LeaderCard key={f.name} leader={f} variant="founder" />
              ))}
            </div>
          </div>

          <div className="grid gap-6 mt-8">
            <Badge tone="crimson" className="self-start">Current board · {new Date().getFullYear()}</Badge>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((l) => (
                <LeaderCard key={l.name + l.role} leader={l} />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
