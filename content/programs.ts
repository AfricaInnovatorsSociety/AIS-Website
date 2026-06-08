import { siteConfig } from "./site.config";

export type Program = {
  slug: string;
  title: string;
  icon: "workshop" | "pitch" | "mentor" | "network";
  shortDescription: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaUrl: string;
};

export const programs: Program[] = [
  {
    slug: "skills-workshops",
    title: "Skills Workshops",
    icon: "workshop",
    shortDescription:
      "Hands-on sessions covering everything from product strategy to fundraising and growth.",
    description:
      "From idea validation to investor decks, our workshops are run by founders, operators, and CMU faculty who teach what actually ships. Each term we cover product, design, growth, fundraising, and the operating fundamentals every African founder needs.",
    highlights: [
      "Idea validation and lean experimentation",
      "Pitch deck and storytelling clinics",
      "Founder financial modelling 101",
      "Go-to-market for African markets",
    ],
    ctaLabel: "Join the next workshop",
    ctaUrl: siteConfig.forms.membership,
  },
  {
    slug: "pitch-competitions",
    title: "Pitch Competitions",
    icon: "pitch",
    shortDescription:
      "Compete on the AIS stage. Sharpen your story, win prizes, and meet investors.",
    description:
      "AIS Pitch Night and our annual Startup Weekend bring the best student ideas onto one stage. Compete for grant funding, get live feedback from judges, and walk away with a sharper venture than you arrived with.",
    highlights: [
      "AIS Pitch Night — monthly 3-minute pitches",
      "Annual Startup Weekend competition",
      "Cash prizes and incubation slots",
      "Investor and operator judging panel",
    ],
    ctaLabel: "Apply to pitch",
    ctaUrl: siteConfig.forms.membership,
  },
  {
    slug: "mentorship",
    title: "Mentorship Programme",
    icon: "mentor",
    shortDescription:
      "Get paired with a founder, operator, or investor who's walked your path before.",
    description:
      "Our mentor network spans African unicorns, VC funds, and global tech companies. Members are matched 1:1 with mentors based on stage, sector, and goals — and meet monthly throughout the academic year.",
    highlights: [
      "Curated 1:1 mentor matching",
      "Monthly structured check-ins",
      "Cross-cohort office hours",
      "Alumni-led founder circles",
    ],
    ctaLabel: "Apply for a mentor",
    ctaUrl: siteConfig.forms.mentorship,
  },
  {
    slug: "networking",
    title: "Networking Events",
    icon: "network",
    shortDescription:
      "Curated mixers, founder dinners, and partner sessions that open real doors.",
    description:
      "We bring in founders, funders, and operators every term — and put our members in the room. From intimate founder dinners to ecosystem mixers across Kigali and beyond, AIS is where relationships compound.",
    highlights: [
      "Founder dinners and fireside chats",
      "Ecosystem mixers in Kigali, Lagos, Nairobi",
      "VC partner office hours",
      "Cross-campus events with peer clubs",
    ],
    ctaLabel: "Join the community",
    ctaUrl: siteConfig.forms.membership,
  },
];
