export type SummitSpeaker = {
  name: string;
  title: string;
  bio: string;
  photo: string;
};

export type SummitSpeakerGroup = {
  id: string;
  label: string;
  description?: string;
  speakers: SummitSpeaker[];
};

export const leadershipBusinessSummitSpeakerGroups: SummitSpeakerGroup[] = [
  {
    id: "keynotes",
    label: "Keynote speakers",
    speakers: [
      {
        name: "Prof. João Barros",
        title: "President, Agency for Research and Innovation (AI²), Portugal",
        bio: "Prof. Barros leads AI², Portugal's national agency for research and innovation. A Full Professor at the University of Porto (on leave), IEEE Fellow, and former Associate Director of CMU-Africa, he is also the founder and former CEO of Veniam. His keynote draws on a career spanning the lab, the startup, and the institutions that connect them.",
        photo: "/images/events/leadership-business-summit-2026/speakers/joao-barros.png",
      },
      {
        name: "Oluwaseun David Adepoju, PhD",
        title: "Managing Partner, CcHUB/iHUB",
        bio: "A technology and innovation leader at the intersection of frontier technology, policy, and social impact, Dr. Adepoju has spent over a decade building Africa's digital ecosystems, leading design labs, research teams, and high-impact initiatives across the continent at Co-creation Hub.",
        photo: "/images/events/leadership-business-summit-2026/speakers/oluwaseun-david-adepoju.jpg",
      },
      {
        name: "Prof. Keith Straughan",
        title: "CEO, Imcon Consulting",
        bio: "A professor and academic leader working across technology, digital payments and fintech, and innovation in higher education, Prof. Straughan brings decades of experience bridging academia, industry, and enterprise leadership.",
        photo: "/images/events/leadership-business-summit-2026/speakers/keith-straughan.jpg",
      },
    ],
  },
  {
    id: "founding-address",
    label: "Presidential Address",
    speakers: [
      {
        name: "Muhammad Aliyu",
        title: "Founding President, Africa Innovators Society",
        bio: "A CMU-Africa alumnus and the founder of AIS, Muhammad launched the society and grew it into a student entrepreneurship community connected across universities and the Kigali ecosystem. His address connects AIS's founding story to this year's theme.",
        photo: "/images/events/leadership-business-summit-2026/speakers/muhammad-aliyu.png",
      },
      {
        name: "Stephen David Mhya",
        title: "President, Africa Innovators Society",
        bio: "Stephen leads AIS in 2025-26, securing a landmark community partnership with the Inclusive Fintech Forum, convening 100+ leaders at the AIS Leadership Summit, and representing AIS as a panelist at the Inclusive Fintech Forum in Kigali. His address looks ahead to where the society is going next.",
        photo: "/images/leadership/stephen-david-mhya.png",
      },
    ],
  },
  {
    id: "panel-1",
    label: "Panel 1",
    description: "The First Mile: Turning an Idea into Something Real",
    speakers: [
      {
        name: "Cynthia Iradukunda",
        title: "CEO, Safe Speak",
        bio: "An AI software engineer, community organizer, and founder leading Safe Speak. A CMU-Africa alumna and Student Achievement Award recipient, she is a former President of the Women in Tech club and a Women Techmakers Ambassador.",
        photo: "/images/events/leadership-business-summit-2026/speakers/cynthia-iradukunda.jpg",
      },
      {
        name: "Victor Olufemi",
        title: "LyngualLabs",
        bio: "An award-winning data scientist and AI researcher building African-centric open-source AI models. A CMU-Africa graduate student and TEDx speaker, Victor has ranked among Africa's top data scientists and previously built custom large language models in industry.",
        photo: "/images/events/leadership-business-summit-2026/speakers/victor-olufemi.jpg",
      },
      {
        name: "Tobi Omotosho",
        title: "Founder & CEO, Moniepal",
        bio: "Founder of Moniepal, a Kigali fintech moving from first pitch to MVP and a growing beta user base. Tobi is President of the Founders' Society at ALU and co-organiser of Global Entrepreneurship Week at ALU.",
        photo: "/images/events/leadership-business-summit-2026/speakers/tobi-omotosho.jpg",
      },
      {
        name: "Charity Ineza",
        title: "CEO, Turategura Limited",
        bio: "An operations and talent specialist turned founder. An ALU graduate in Entrepreneurial Leadership, she has served as Project Manager at SLS Energy and previously led HR and Operations at Spouts International.",
        photo: "/images/events/leadership-business-summit-2026/speakers/charity-ineza.jpg",
      },
    ],
  },
  {
    id: "panel-2",
    label: "Panel 2",
    description: "Leading Through Growth: People, Capital, and Staying Power",
    speakers: [
      {
        name: "David Masoperh",
        title: "Co-founder & CEO, Pebla",
        bio: "Leads Pebla, a Kigali fintech simplifying mobile-money payments and personal finance. A CMU-Africa MSIT student, he grew Pebla from idea stage to a 9,000+ waitlist and angel investment within months.",
        photo: "/images/events/leadership-business-summit-2026/speakers/david-masoperh.jpg",
      },
      {
        name: "Prof. Jesse Thornburg",
        title: "Co-founder & CEO, Grid Fruit",
        bio: "CMU-Africa faculty member and co-founder and CEO of Grid Fruit, an energy data science company using AI-driven controls to cut energy use in food retail and commercial buildings. He mentors student founders across the region.",
        photo: "/images/events/leadership-business-summit-2026/speakers/jesse-thornburg.jpg",
      },
      {
        name: "Gabriel Ekman",
        title: "Co-founder & CEO, BAG Innovation",
        bio: "Co-founder of BAG Innovation, one of Africa's largest job-simulation and employability platforms, and co-owner of Lemo restaurant in Kigali.",
        photo: "/images/events/leadership-business-summit-2026/speakers/gabriel-ekman.jpg",
      },
      {
        name: "Vivens Uwizeyimana",
        title: "Founder & CEO, Umurava",
        bio: "Founder of Umurava, a talent marketplace and workforce outsourcing platform building Africa's digital-economy workforce, with tens of thousands of talents on the platform.",
        photo: "/images/events/leadership-business-summit-2026/speakers/vivens-uwizeyimana.png",
      },
    ],
  },
  {
    id: "showcase",
    label: "Student builders showcase",
    description: "CMU-Africa student builders share what they are building, why, and where they are on the journey.",
    speakers: [
      {
        name: "Frank Ebeledike",
        title: "Co-founder, Exuar",
        bio: "CMU-Africa student presenting the venture he is currently building.",
        photo: "/images/events/leadership-business-summit-2026/speakers/frank-ebeledike.png",
      },
      {
        name: "Paul Mugume",
        title: "Co-founder, Vitalabs",
        bio: "CMU-Africa student and demo-day finalist at the Harvard health hackathon.",
        photo: "/images/events/leadership-business-summit-2026/speakers/paul-mugume.jpg",
      },
    ],
  },
];
