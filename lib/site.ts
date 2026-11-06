// Everything the site says lives in this file. Edit copy here, not in the pages.

export const flags = {
  // Shows the NSA program, title and dates, plus the clearance line on the resume page only.
  showNSA: true,
  // Shows a gray frame wherever a photo/video hasn't been added yet.
  // Turn this off before you submit anything if some media is still missing.
  showPendingMedia: false,
  // Hides the Writing link and pages. The drafts in content/writing are kept for later.
  showWriting: false,
};

export const profile = {
  name: "Vihaan Jain",
  // The home page opens on this, full screen, one line per entry. It also becomes
  // the header line once you scroll past the opening screen.
  statement: ["Still in high school.", "Already in national security."],
  // The quieter line under it. Defense software and a company are where you want
  // to go, not what you are yet, so keep them as wants.
  next: "I want to build for defense. Software first, then a company of my own.",
  email: "jainvihaan65@gmail.com",
  location: "Ellicott City, Maryland",
  github: "https://github.com/vjwheelie",
  linkedin: "https://www.linkedin.com/in/vihaan-jain1",
  site: "https://vihaan-jain.com",
  description:
    "Vihaan Jain is a high school senior with an early start in national security, at Johns Hopkins APL and SalesPatriot (YC W25), who wants to build software and, someday, a company in defense.",
};

// The strip along the bottom of the opening screen: proof for the statement.
// The NSA line only shows while flags.showNSA is on, and only ever the title.
export const proof = [
  { org: "National Security Agency", role: "Intelligence analysis aide", when: "Now", nsa: true },
  { org: "Johns Hopkins APL", role: "Cyber and electronic warfare", when: "Now" },
  { org: "SalesPatriot (YC W25)", role: "AI for defense procurement", when: "2025" },
  { org: "Howard High School", role: "Senior", when: "Class of 2027" },
];

export type Media = {
  // File inside public/media/. The frame fills in automatically once the file exists.
  file?: string;
  // YouTube video id (the part after watch?v=). Used instead of `file`; shows
  // the thumbnail and opens YouTube, since not every video allows embedding.
  youtube?: string;
  alt: string;
  caption?: string;
  aspect: string; // CSS aspect-ratio, e.g. "16 / 9"
  wide?: boolean; // Spans both columns on a case study page.
};

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
  results?: { head: string[]; rows: string[][]; note?: string };
  list?: { title: string; text: string }[];
  links?: { label: string; href: string }[];
  stack: string[];
  media: Media[];
};

export const projects: Project[] = [
  {
    slug: "apl",
    year: "2026",
    title: "AI agents for cyber attack and threat analysis",
    org: "Johns Hopkins APL",
    role: "ASPIRE intern, cyber-physical systems",
    dates: "Summer 2026",
    summary: "One set of agents runs attacks on an isolated network; another reads the logs and works out what happened. Selected for the ASPIRE showcase, 40 of 92 teams.",
    metric: { value: "90%", label: "of attacks caught, 20 runs" },
    body: [
      "A lot of cyber work still means an analyst running attacks by hand, then reading through system logs to piece together what happened. Over the summer, Emmanuel Osei, Josiah Wheeler and I automated both halves with AI agents.",
      "We built an isolated cyber range: two Kali Linux machines to attack from and two Raspberry Pis to attack. First we ran the attacks manually with Nmap, Hydra, SSH and Metasploit to set a baseline. Then we built the agents in Langflow. The attack agent takes a request in plain English, picks the tool and runs it. On defense, a logging agent pulls logs off the targets over SSH and an analysis agent classifies what it finds. I wrote the custom Python tools and SSH capabilities that let the agents run commands on real machines instead of a simulation.",
      "Across 20 runs, the analyzer caught 90% of attacks, and we cut a full run from 135 seconds to 23. We were one of 40 teams, out of 92, selected for APL's in-person ASPIRE showcase, and presented to more than 200 APL engineers and community members.",
      "The next step is countermeasures for what the analyzer detects, and a single workflow that runs offense and defense together. For the school year I've moved to an electronic warfare project, which stays at APL.",
    ],
    results: {
      head: ["Measure", "Result"],
      rows: [
        ["Attacks caught, 20 runs", "90%"],
        ["Time for one full run", "135 s → 23 s"],
        ["Teams selected for the showcase", "40 of 92"],
      ],
    },
    stack: ["Langflow", "Python", "SSH", "Kali Linux", "Raspberry Pi", "Nmap", "Hydra", "Metasploit"],
    media: [
      {
        file: "apl-showcase.jpg",
        alt: "Vihaan Jain standing next to the team's poster at the ASPIRE showcase",
        caption: "At the ASPIRE showcase, Johns Hopkins APL, summer 2026.",
        aspect: "4 / 3",
      },
      {
        file: "apl-poster.jpg",
        alt: "Poster: Leveraging Agentic AI for Cyber Attack Execution and Threat Analysis",
        caption: "The poster. Approved for public release; the cracked test credentials in Fig. 1 are blurred here.",
        aspect: "4 / 3",
      },
      {
        file: "apl-attack-agent.jpg",
        alt: "The attack agent in Langflow, wired to a Hydra tool and a command-execution tool",
        caption: "The attack agent. It picks a tool and runs it from a Kali machine.",
        aspect: "16 / 10",
      },
      {
        file: "apl-detections.jpg",
        alt: "Table of attack types the analysis agent identified in the logs",
        caption: "Attacks the analysis agent picked out of the target's logs.",
        aspect: "16 / 10",
      },
      {
        file: "apl-defense-agents.jpg",
        alt: "The defensive pipeline in Langflow: an SSH tool, a logging agent and an analysis agent",
        caption: "Defense. The logging agent pulls logs over SSH and hands them to the analysis agent.",
        aspect: "2047 / 803",
        wide: true,
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
    summary: "A hand-checked benchmark on real requests for quote, then an audit log and a human review step for the AI's answers.",
    metric: { value: "9% / 5%", label: "critical errors, two models" },
    body: [
      "SalesPatriot helps defense suppliers find and bid on Pentagon contracts. Thousands of new requests for quote (RFQs) go up on DIBBS, the Defense Logistics Agency's bid board, every day, full of codes like NSNs and laid out differently by each office. The product leans on language models to read them, so we measured how often the models get the details wrong.",
      "With Yashvi Mehta and Émillien Lavallée, I built a benchmark on four real RFQs. The models had to find seven fields in each: NSN, quantity, unit, delivery time, delivery type, delivery address and whether the contract was set aside for small businesses. Each RFQ went in twice, once as extracted text and once as images of the pages, and every answer was compared against a value we'd checked by hand.",
      "Text beat images for both models, and GPT-4o-mini reading page images did worst, with 3 of 28 values wrong. Text has its own blind spot, though: it can't show which checkbox is ticked, and that's how an RFQ marks a small-business set-aside.",
      "The sample was small, and to stay under token limits the models only saw the first ten pages of each RFQ. I presented those limits to SalesPatriot's CTO along with what we found and what we recommended.",
      "The models were useful but couldn't be trusted alone, so we spent the next two weeks making them checkable, joined by Krish Sachithanand, Aditya Desale and Garvit Chadha. First we built an audit log that records the model, prompt version, timestamp and sources behind every answer. We chose not to store full responses, which kept the log light and kept sensitive text out of it.",
      "Then we designed a review screen. The AI flags a risk in an RFQ, highlights the clause it came from and explains the issue, the risk and the impact, and the contractor confirms or dismisses it before anything goes out.",
    ],
    results: {
      head: ["Model", "Text", "Images", "Overall"],
      rows: [
        ["GPT-4o-mini", "2 of 28", "3 of 28", "9%"],
        ["Claude 3.5 Sonnet", "1 of 28", "2 of 28", "5%"],
      ],
      note: "Critical errors, meaning the model gave a wrong value. Formatting slips, like “4” for “4.000”, were counted separately and aren't included.",
    },
    links: [
      { label: "Benchmark code", href: "https://github.com/vjwheelie/dibbs-rfq-hallucination-experiment" },
      { label: "Audit log code", href: "https://github.com/ThousandthStar/llm-audit" },
    ],
    stack: ["Python", "LangChain", "Pydantic", "OpenAI API", "Anthropic API", "Figma"],
    media: [
      {
        file: "rfq-page.jpg",
        alt: "First page of a DLA request for quotations, with four fields outlined",
        caption:
          "Page 1 of 26 from one of the RFQs. The set-aside answer is a pair of checkboxes, and the address says “See Schedule”: it's on page 7. The buyer's contact details are blurred.",
        aspect: "1749 / 643",
        wide: true,
      },
      {
        file: "audit-log.png",
        alt: "An audit log entry showing the timestamp, model, two prompt versions and the source RFQs",
        caption: "The audit log. Each answer keeps its model, prompt versions, timestamp and source documents.",
        aspect: "7 / 4",
      },
      {
        file: "review-screen.png",
        alt: "Mockup of the review screen: an RFQ with a highlighted clause next to the AI's explanation and Confirm and Dismiss buttons",
        caption: "The review screen, a Figma mockup. The flagged clause is highlighted in the RFQ.",
        aspect: "7 / 4",
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
    summary: "Co-founder and CTO. A label scanner that scores food against FDA reference values and the limits you set. Launching Q1 2027.",
    metric: { value: "26", label: "beta testers" },
    body: [
      "MustCheck reads a food or cosmetic label, from a photo or a barcode, and scores it in about three seconds. I co-founded the company, designed the scoring and built the app end to end.",
      "The web beta runs in eight languages, including Hindi and Gujarati, and has 26 testers. The Jain Society of Metropolitan Washington and JITO USA are our distribution partners, and the iOS and Android apps launch in Q1 2027, with Apple Health on iOS.",
    ],
    list: [
      {
        title: "Allergens are hard stops",
        text: "If you've excluded an allergen, you get an alert. It never gets averaged into a score.",
      },
      {
        title: "Two scores, side by side",
        text: "One against FDA reference values (21 CFR 101.9) and NOVA processing levels, one against your own limits.",
      },
      {
        title: "Open scoring",
        text: "Every formula and threshold is published, and no brand pays for placement.",
      },
    ],
    links: [
      { label: "Try the web beta", href: "https://mustcheck.vercel.app" },
      { label: "imaiventures.com", href: "https://www.imaiventures.com" },
    ],
    stack: ["OCR", "Barcode scanning", "Scoring model", "Full stack", "Apple Health"],
    media: [
      {
        file: "mustcheck-scan.png",
        alt: "MustCheck's scan screen, with camera, upload and barcode options",
        caption: "Scan by camera, photo or barcode.",
        aspect: "9 / 19.5",
      },
      {
        file: "mustcheck-profile.png",
        alt: "MustCheck's health profile, listing health conditions to choose from",
        caption: "Your health focus and diet shape every score.",
        aspect: "9 / 19.5",
      },
    ],
  },
  {
    slug: "documentaries",
    year: "2022–",
    title: "Documentaries on state secrets",
    org: "National History Day",
    role: "Co-director and researcher",
    dates: "2022 – present",
    summary: "Three films: the Pentagon Papers, India's 1998 nuclear tests, the Partition border.",
    metric: { value: "3×", label: "Maryland champion" },
    body: [
      "Since 2022, I've co-directed documentaries for National History Day, each built on 50+ sources and interviews with experts. They've won the Maryland title three times, won two national awards, and earned a citation from the Maryland House of Delegates.",
      "Each one turns on a secret: a leaked study of the Vietnam War, nuclear tests hidden from American satellites, and a border kept quiet until two days after independence.",
    ],
    list: [
      {
        title: "The Controversy Behind the First Amendment, 2025",
        text: "New York Times Co. v. United States, and whether a newspaper could print the Pentagon Papers. Maryland champion; national qualifier.",
      },
      {
        title: "The Turning Point in Indian Nuclear History: Pokhran '98, 2024",
        text: "India prepared five nuclear tests under American spy satellites, and the CIA didn't see them coming. Maryland champion; national qualifier.",
      },
      {
        title: "From Traders to Traitors, 2023",
        text: "How Britain framed the Partition of India, including a border it kept secret until two days after independence. Maryland champion, junior division; national qualifier.",
      },
    ],
    links: [{ label: "YouTube channel", href: "https://www.youtube.com/@VihaanNealNHD" }],
    stack: ["Research", "Interviews", "Film editing"],
    media: [
      { youtube: "eKtTNYSOXc8", alt: "Documentary: The Controversy Behind the First Amendment", caption: "The Controversy Behind the First Amendment", aspect: "16 / 9" },
      { youtube: "OtLiACj-QFo", alt: "Documentary: Pokhran '98", caption: "Pokhran '98", aspect: "16 / 9" },
      { youtube: "MJC6wFqdYmE", alt: "Documentary: From Traders to Traitors", caption: "From Traders to Traitors", aspect: "16 / 9" },
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

// Your own words. Read in order, they're a process: problem, understanding, questions, build.
export const beliefs = [
  "Start with the problem, not the solution.",
  "Understand it before you try to fix it.",
  "Keep asking the question why and so what.",
  "Build! Execute on ideas.",
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
      // Added at your request. This is the only place on the site the clearance appears.
      bullets: ["TS/SCI Clearance w/ Full Scope Poly"],
      nsa: true,
    },
    {
      org: "Johns Hopkins University Applied Physics Laboratory",
      title: "ASPIRE Intern · Summer: Cyber-Physical Systems · School year: Electronic Warfare",
      dates: "Jun 2026 – Present",
      bullets: [
        "Co-built agentic AI attack and analysis pipelines in Langflow; built custom Python tools and SSH capabilities. Analyzer flagged 90% of attacks across 20 runs on an isolated cyber range (two Kali Linux attackers, two Raspberry Pi targets); cut run time from 135 s to 23 s.",
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
        "Web beta live with 26 testers; channel partners JSMW and JITO USA; iOS and Android launch planned for Q1 2027, with Apple Health integration.",
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
