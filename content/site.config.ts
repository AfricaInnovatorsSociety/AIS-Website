/**
 * AIS Site Configuration
 * ----------------------
 * Edit this file to update mission, vision, contact, social, stats, and form URLs.
 * Anything wrapped in {TODO ...} should be replaced with real content before launch.
 */

export const siteConfig = {
  name: "Africa Innovators Society",
  shortName: "AIS",
  tagline: "Integrity. Innovation. Growth.",
  // Override at build time with NEXT_PUBLIC_SITE_URL if deploying somewhere
  // other than the eventual production domain.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://africainnovators.cmu.edu",
  description:
    "The Africa Innovators Society (AIS) at CMU-Africa is the campus entrepreneurship club dedicated to unleashing the innovative potential of Africa's future leaders. Through hands-on programs, workshops, competitions, and networking events, AIS provides a supportive community where members gain the skills, experiences, and connections to turn their entrepreneurial passions into real-world impact.",
  affiliation: "Carnegie Mellon University Africa",
  patron: "Prof. Jesse Thornburg",

  mission:
    "To cultivate Africa's next generation of entrepreneurs by equipping CMU-Africa students with the skills, networks, and opportunities to launch ventures that transform the continent.",

  vision:
    "An Africa where every CMU-Africa student has the confidence, capability, and community to turn bold ideas into thriving ventures.",

  values: [
    {
      title: "Integrity",
      description: "We do what we say, build what we ship, and tell the truth — to our members, our partners, and ourselves.",
    },
    {
      title: "Innovation",
      description: "We celebrate the bold, the experimental, and the homegrown — solutions built by Africans, for Africa, for the world.",
    },
    {
      title: "Growth",
      description: "We measure ourselves by how much our members grow — as builders, leaders, and human beings.",
    },
    {
      title: "Grit and Drive",
      description: "We back the ambitious ideas others overlook and stay in the room when the work gets hard.",
    },
  ],

  originStory: [
    "The Africa Innovators Society was founded at Carnegie Mellon University Africa to unleash the innovative potential of the continent's future leaders. Born out of a belief that Africa's true story must be written by its own people, AIS exists to make sure no great African idea dies in a notebook.",
    "What began as informal pitch nights and weekend hackathons has grown into a thriving community of builders, mentors, and alumni across fintech, climate, health, agritech, and AI. From the Harvard T.H. Chan HSIL Hackathon to the CMU-Africa Innovation Hub incubator, AIS members are showing up — and winning — on stages across the continent and beyond.",
  ],

  stats: [
    { label: "LinkedIn community", value: "990+" },
    { label: "Events per year", value: "25+" },
    { label: "Ventures launched", value: "12" },
    { label: "Mentor network", value: "40+" },
  ],

  contact: {
    email: "ais@africa.cmu.edu", // {TODO confirm real email}
    address: "Plot No A8, Kigali Special Economic Zone Phase II, Kigali, Rwanda",
    addressShort: "CMU-Africa · Kigali, Rwanda",
  },

  social: {
    linkedin: "https://www.linkedin.com/company/aisentreprenuershipclub/",
    instagram: "https://www.instagram.com/ais_cmuafrica/",
    twitter: "",
    youtube: "",
  },

  // Replace with real Google Form URLs before launch.
  forms: {
    membership: "https://forms.gle/REPLACE_MEMBERSHIP",
    general: "https://forms.gle/REPLACE_GENERAL_CONTACT",
    mentorship: "https://forms.gle/REPLACE_MENTORSHIP",
    sponsorship: "https://forms.gle/REPLACE_SPONSORSHIP",
    newsletter: "https://forms.gle/REPLACE_NEWSLETTER",
  },

  testimonial: {
    quote:
      "AIS gave me more than a network — it gave me the courage to ship. The pitch nights, the mentors, the late-night feedback sessions — they're the reason my startup exists today.",
    name: "{TODO Member Name}",
    role: "{TODO Cohort / Venture}",
    photo: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
