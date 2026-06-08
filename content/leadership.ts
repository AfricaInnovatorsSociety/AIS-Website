export type Leader = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
  email?: string;
  isFounder?: boolean;
  order?: number;
};

export const founders: Leader[] = [
  {
    name: "Muhammad",
    role: "Founder, Africa Innovators Society",
    bio: "Muhammad founded the Africa Innovators Society at CMU-Africa to unleash the innovative potential of the continent's future leaders — building a space where students could go from idea to venture, together.",
    photo: "",
    linkedin: "",
    isFounder: true,
    order: 0,
  },
];

export const currentTeam: Leader[] = [
  {
    name: "David Stephen",
    role: "President",
    bio: "David leads the Africa Innovators Society, setting the strategic direction for AIS and championing its members across the CMU-Africa community and beyond.",
    photo: "",
    linkedin: "",
    order: 1,
  },
  {
    name: "Bruce Mugizi",
    role: "Vice President",
    bio: "Bruce supports the President in running AIS day-to-day — coordinating across the leadership team and keeping the society's programming on track.",
    photo: "",
    linkedin: "",
    order: 2,
  },
  {
    name: "Sunday Ajayi",
    role: "Minister of Partnerships",
    bio: "Sunday builds and stewards the partnerships that power AIS — from corporate sponsors and ecosystem allies to the mentor network behind our members' ventures.",
    photo: "",
    linkedin: "",
    order: 3,
  },
  {
    name: "Wanchi Lucia Yen",
    role: "Minister of Communication",
    bio: "Lucia leads how AIS shows up to the world — across the website, newsletter, social channels, and every story we tell about our members' work.",
    photo: "",
    linkedin: "",
    order: 4,
  },
  {
    name: "Thabolezwe Mabandla",
    role: "Community and Ventures Lead",
    bio: "Thabolezwe holds the AIS community together — from member onboarding to alumni connections, and curates the ventures we celebrate from across the society.",
    photo: "",
    linkedin: "",
    order: 5,
  },
];
