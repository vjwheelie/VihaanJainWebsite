// Everything the site says lives in this file. Edit copy here, not in the pages.

export const flags = {
  // Leave false until your security officer says it's fine to list NSA publicly.
  // Your clearance is intentionally not anywhere on this site.
  showNSA: false,
  // Shows a gray frame wherever a photo/video hasn't been added yet.
  // Turn this off before you submit anything if some media is still missing.
  showPendingMedia: true,
};

export const profile = {
  name: "Vihaan Jain",
  role: "Software for national security",
  email: "jainvihaan65@gmail.com",
  location: "Ellicott City, Maryland",
  github: "https://github.com/vjwheelie",
  linkedin: "https://www.linkedin.com/in/vihaan-jain1",
  site: "https://vihaan-jain.com",
  headline: "I build software for national security, and I measure whether it works.",
  intro:
    "Senior at Howard High School in Maryland. Intern at the Johns Hopkins Applied Physics Laboratory, working on electronic warfare. Previously at SalesPatriot (YC W25).",
  introNSA: "Also in the NSA's High School Work Study Program.",
  description:
    "Vihaan Jain builds software for national security. Electronic warfare at Johns Hopkins APL, AI for defense procurement at SalesPatriot (YC W25).",
};

export type Media = {
  // File inside public/media/. The frame fills in automatically once the file exists.
  file?: string;
  // YouTube video id (the part after watch?v=). Used instead of `file`.
  youtube?: string;
  alt: string;
  caption?: string;
  aspect: string; // CSS aspect-ratio, e.g. "16 / 9"
};

export const heroMedia: Media[] = [
  {
    file: "apl-showcase.jpg",
    alt: "Presenting at the ASPIRE showcase, Johns Hopkins APL",
    caption: "ASPIRE showcase, Johns Hopkins APL, 2026",
    aspect: "4 / 3",
  },
  { file: "portrait.jpg", alt: "Portrait of Vihaan Jain", caption: "Portrait", aspect: "4 / 5" },
];

export const why = [
  "The U.S. buys most of its defense technology from five companies. In the 1990s there were 51. They're good at building ships and aircraft and slow at shipping software, which is now where a lot of the fighting happens.",
  "Some Ukrainian electronic warfare teams can push a software fix to the field in about a week. A major U.S. weapons program can take more than a decade. I want to work on that gap: software that updates as fast as the threat changes, and AI whose error rate is measured before anyone depends on it.",
];

export type Project = {
  slug: string;
  year: string;
  title: string;
  org: string;
  role: string;
  dates: string;
  summary: string;
  metric: { value: string; label: string };
  body: string[];
  results?: { head: [string, string]; rows: [string, string][]; note?: string };
  list?: { title: string; text: string }[];
  stack: string[];
  media: Media[];
};

export const projects: Project[] = [
  {
    slug: "apl",
    year: "2026",
    title: "Agentic attack and analysis on a live network",
    org: "Johns Hopkins APL",
    role: "ASPIRE intern, cyber-physical systems",
    dates: "Summer 2026",
    summary: "AI agents attacking and defending four real machines. Selected for the ASPIRE showcase, 40 of 92 teams.",
    metric: { value: "90%", label: "of attacks caught, 20 runs" },
    body: [
      "Our team built two sets of AI agents in Langflow and pointed them at a network of four Raspberry Pis. One set ran attacks. The other watched the network and tried to catch them. I built the custom Python tools and SSH capabilities that let the agents act on real machines instead of a simulation.",
      "Across 20 runs, the analyzer caught 90% of attacks, and we cut a full run from 135 seconds to 23. We were one of 40 teams, out of 92, selected for APL's in-person ASPIRE showcase, and presented to more than 200 APL engineers and community members.",
      "I also did independent research on neural networks (PyTorch, MNIST) and digital logic design. For the school year I've moved to an electronic warfare project, which stays at APL.",
    ],
    results: {
      head: ["Measure", "Result"],
      rows: [
        ["Attacks caught, 20 runs", "90%"],
        ["Time for one full run", "135 s → 23 s"],
        ["Teams selected for the showcase", "40 of 92"],
      ],
    },
    stack: ["Langflow", "Python", "SSH", "Raspberry Pi", "PyTorch"],
    media: [
      {
        file: "apl-showcase.jpg",
        alt: "Presenting at the ASPIRE showcase",
        caption: "ASPIRE showcase, Johns Hopkins APL",
        aspect: "4 / 3",
      },
      {
        file: "apl-architecture.png",
        alt: "Diagram of the attack and analysis pipeline",
        caption: "How the pipeline fits together",
        aspect: "4 / 3",
      },
    ],
  },
  {
    slug: "llm-eval",
    year: "2025",
    title: "How often LLMs misread Pentagon contracts",
    org: "SalesPatriot (YC W25)",
    role: "Software engineering intern, via HUVTSP",
    dates: "Summer 2025",
    summary: "A hand-checked benchmark on real requests for quote, then a bidding prototype with a human in the loop.",
    metric: { value: "9% / 5%", label: "critical errors, two models" },
    body: [
      "SalesPatriot helps defense suppliers find and bid on Pentagon contracts. Its product relies on language models to pull details out of requests for quote (RFQs), so I measured how often those details were wrong.",
      "I built a benchmark on real DIBBS RFQs. It converted the PDFs into model inputs, extracted fields like NSN, quantity, delivery time and delivery address, and compared every answer against values I checked by hand. Each run logged the model and prompt so any result could be reproduced. I presented the findings, their limits and my recommendations to SalesPatriot's CTO.",
      "The models were useful but couldn't be trusted alone, so our team built a prototype that used them anyway. It scrapes open solicitations from SAM.gov and DIBBS, drafts a proposal, checks each claim against its source and logs every step. Anything flagged as risky goes to the contractor to confirm or dismiss before the bid goes out.",
    ],
    results: {
      head: ["Model", "Critical errors"],
      rows: [
        ["GPT-4o-mini", "9%"],
        ["Claude 3.5 Sonnet", "5%"],
      ],
      note: "112 values, each checked by hand.",
    },
    stack: ["Python", "LangChain", "OpenAI API", "Anthropic API", "Web scraping"],
    media: [
      {
        file: "bid-pipeline.png",
        alt: "Screenshot of the bidding prototype review screen",
        caption: "The review screen, where a contractor confirms or dismisses each flagged risk",
        aspect: "16 / 10",
      },
    ],
  },
  {
    slug: "mustcheck",
    year: "2026",
    title: "MustCheck",
    org: "Imai Ventures, LLC",
    role: "Co-founder & CTO",
    dates: "Mar 2026 – present",
    summary: "Co-founder and CTO. A food scanner that scores food against health goals and dietary restrictions.",
    metric: { value: "26", label: "beta testers" },
    body: [
      "MustCheck scans a food and scores it against your health goals and dietary restrictions. I co-founded the company, designed the rating algorithm and built the app end to end.",
      "The web version is in beta with 26 testers. We're partnered with the Jain Society of Metropolitan Washington and JITO USA as distribution channels, and I'm building an iOS version that connects to Apple Health.",
    ],
    stack: ["Full stack", "Rating algorithm", "iOS", "Apple Health"],
    media: [
      { file: "mustcheck-scan.png", alt: "MustCheck scanning a food label", caption: "Scanning", aspect: "9 / 19.5" },
      { file: "mustcheck-score.png", alt: "MustCheck score screen", caption: "The score", aspect: "9 / 19.5" },
    ],
  },
  {
    slug: "documentaries",
    year: "2022–",
    title: "Documentaries on state secrets",
    org: "National History Day",
    role: "Director and researcher",
    dates: "2022 – present",
    summary: "The Pentagon Papers, India's 1998 nuclear tests, the Partition border.",
    metric: { value: "3×", label: "Maryland champion" },
    body: [
      "Since 2022 I've made documentaries for National History Day, each built on 50+ sources and interviews with experts. They've won the Maryland title three times, won two national awards, and earned a citation from the Maryland House of Delegates.",
    ],
    list: [
      {
        title: "New York Times v. United States",
        text: "The Pentagon Papers, and the Supreme Court case over whether a newspaper could print them.",
      },
      {
        title: "Pokhran '98",
        text: "India prepared five nuclear tests under American spy satellites. The CIA didn't see them coming.",
      },
      {
        title: "Partition of India",
        text: "The border that split India and Pakistan was kept secret until two days after independence.",
      },
    ],
    stack: ["Research", "Interviews", "Film editing"],
    media: [
      { youtube: "", alt: "Documentary: New York Times v. United States", caption: "New York Times v. United States", aspect: "16 / 9" },
      { youtube: "", alt: "Documentary: Pokhran '98", caption: "Pokhran '98", aspect: "16 / 9" },
      { youtube: "", alt: "Documentary: Partition of India", caption: "Partition of India", aspect: "16 / 9" },
    ],
  },
];

export type EarlierItem = { year: string; title: string; note: string };

export const earlier: EarlierItem[] = [
  {
    year: "2025",
    title: "MyJSMW",
    note: "Interviewed 40+ community leaders, designed the app in Figma and helped ship it on iOS and Android. Volunteer turnout up 20%.",
  },
  {
    year: "2024",
    title: "5 MW solar project, InfraVolt Renewables, Pune",
    note: "Cost and ROI analysis. Researched five autonomous panel-cleaning systems; the one adopted led to a ~20% output gain.",
  },
  {
    year: "PLTW",
    title: "Autonomous vehicle, material sorter, high-torque tractor",
    note: "VEX and C++, Arduino, and Fusion 360. The tractor's 11.65:1 gear reduction delivers 18.04 ft-lbs of calculated output torque.",
  },
];

// Rewrite these in your own words. Each one points at something you did.
export const beliefs = [
  "Measure it before you trust it.",
  "Ship the rough version, then make it fast.",
  "Read the primary source.",
  "Ask the people closest to the problem first.",
];

export const record = [
  { what: "USACO", detail: "Gold Division" },
  { what: "National History Day", detail: "3× Maryland champion, 2× national award winner" },
  { what: "FBLA", detail: "Maryland champion, International Business; 3× national qualifier" },
  { what: "DECA", detail: "Chapter president; international qualifiers 0 → 6" },
  { what: "Future Jain Leadership Program", detail: "President, youth wing of a 21,800+ member organization" },
  { what: "Outside", detail: "Varsity tennis, cross country, mountain biking" },
];

// Used by /resume. Mirrors the PDF minus anything that shouldn't be public.
export const resume = {
  education: {
    school: "Howard High School",
    place: "Ellicott City, MD",
    dates: "Class of 2027",
    lines: [
      "GPA 3.91 UW / 4.78 W · ACT 34 (35 STEM) · NHS, Science, Social Studies and Technical honor societies",
      "AP Calculus AB, AP Physics C: Mechanics, AP Computer Science A, AP Micro/Macroeconomics, PLTW Engineering, Calculus II (CC), Intro to Business (CC)",
    ],
  },
  experience: [
    {
      org: "National Security Agency",
      title: "High School Work Study Program · Intelligence Analysis Aide",
      dates: "Sep 2026 – Present",
      bullets: [],
      nsa: true,
    },
    {
      org: "Johns Hopkins University Applied Physics Laboratory",
      title: "ASPIRE Intern · Summer: Cyber-Physical Systems · School year: Electronic Warfare",
      dates: "Jun 2026 – Present",
      bullets: [
        "Co-built agentic AI attack and analysis pipelines in Langflow; built custom Python tools and SSH capabilities. Analyzer flagged 90% of attacks across 20 runs on a four-node Raspberry Pi network; cut run time from 135 s to 23 s.",
        "Selected for the in-person ASPIRE Showcase (40 of 92 teams); presented to 200+ APL engineers and community members.",
        "Independent research on neural networks and digital logic design (PyTorch, MNIST, Boolean algebra, gates and circuits).",
      ],
    },
    {
      org: "SalesPatriot (YC W25)",
      title: "Software Engineering Intern, through HUVTSP",
      dates: "Jun 2025 – Sep 2025",
      bullets: [
        "Quantified LLM hallucination risk in federal RFQ data extraction (112 values; 9% critical error rate for GPT-4o-mini vs 5% for Claude 3.5 Sonnet); presented findings, limitations and recommendations to the CTO.",
        "Built an end-to-end bidding prototype: SAM.gov scraping, AI proposal generation, source verification, audit logging, and human-in-the-loop review of AI-flagged risks.",
      ],
    },
    {
      org: "Imai Ventures, LLC",
      title: "Co-Founder & CTO",
      dates: "Mar 2026 – Present",
      bullets: [
        "Built MustCheck, a food-scanning app that scores foods against health goals and dietary restrictions; designed the rating algorithm; full-stack development.",
        "Web beta live with 26 testers; channel partners JSMW and JITO USA; iOS version with Apple Health integration in development.",
      ],
    },
    {
      org: "Jain Society of Metropolitan Washington",
      title: "Project Intern, Executive Committee",
      dates: "Oct 2024 – Jun 2025",
      bullets: [
        "Surveyed 40+ leaders and members, designed the MyJSMW app in Figma, and supported its iOS/Android launch; volunteer turnout up 20%.",
      ],
    },
    {
      org: "InfraVolt Renewables Pvt. Ltd., Pune",
      title: "Project Management Intern",
      dates: "Jun 2024 – Jul 2024",
      bullets: [
        "Analyzed cost, ROI and performance of a 5 MW solar project; joined bank and contractor meetings on financing and vendors.",
        "Researched five autonomous panel-cleaning options across three site visits; the one adopted led to a ~20% output gain.",
      ],
    },
  ],
  leadership: [
    { org: "Future Jain Leadership Program", title: "President", dates: "Jul 2025 – Present", line: "Run the executive board of the youth wing of a 21,800+ member organization." },
    { org: "DECA", title: "Chapter President", dates: "Aug 2025 – Present", line: "6-person board, 65 members; membership +30%; ICDC qualifiers 0 → 6; $800+ in sponsorships." },
    { org: "FBLA", title: "Maryland Champion, International Business", dates: "Aug 2024 – Present", line: "3× national qualifier; regional and state wins in three events." },
    { org: "National History Day", title: "3× Maryland Champion, 2× National Award Winner", dates: "2022 – Present", line: "Documentaries on NYT v. United States, Pokhran '98 and the Partition of India; Maryland House of Delegates citation." },
    { org: "Investment & Stocks Club", title: "Co-Founder & Vice President", dates: "Sep 2024 – Jun 2026", line: "Portfolio analysis workshops for 20+ members." },
  ],
  skills: [
    { label: "Programming & AI", value: "Python, Java, C++, SQL, R, LLM APIs, Langflow, Metasploit" },
    { label: "Engineering", value: "Fusion 360, TinkerCAD, Logisim" },
    { label: "Honors", value: "USACO Gold; International Research Olympiad Honor Roll" },
    { label: "Languages", value: "English, Hindi (fluent), Spanish (working)" },
  ],
};
