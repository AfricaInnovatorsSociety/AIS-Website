import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Container";
import { GoogleFormEmbed } from "@/components/forms/GoogleFormEmbed";
import { siteConfig } from "@/content/site.config";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Join AIS",
  path: "/join",
  description: `Become a member of the ${siteConfig.name} at ${siteConfig.affiliation}.`,
});

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Join the Africa Innovators Society."
        description="Fill in the form below to apply for AIS membership. It only takes a few minutes."
      />
      <Section className="!pt-4 !pb-16 md:!pb-24">
        <div className="mx-auto max-w-3xl">
          <GoogleFormEmbed
            src={siteConfig.forms.membershipEmbed}
            title="Join AIS membership form"
            height={1467}
          />
        </div>
      </Section>
    </>
  );
}
