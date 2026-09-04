import { AcademicQualification, SkillCategory, Project, CaseCompetition, Certification, AchievementItem, LeadershipItem } from './types';

export const personalInfo = {
  name: 'Udit Kumar',
  title: 'PGDM Candidate (Finance & Analytics)',
  institution: 'Great Lakes Institute of Management, Gurgaon',
  tagline: 'Bridging Advanced Data Science and AI/ML Research with Core Corporate Finance & Business Strategy',
  contact: {
    email: 'udit.pgdm27g@greatlakes.edu.in',
    phone: '+91 94568 XXXXX', // Placeholder phone
    linkedin: 'https://www.linkedin.com/in/udit-kumar-79433a238/',
    github: 'https://github.com/uditkumar-placeholder', // GitHub placeholder
  },
  photoUrl: '/photo.jpg', // Placeholder profile photo path
  introVideoUrl: '/video1.mp4', // Placeholder video path
};

export const profileSummary = `A high-performing PGDM Candidate in Finance & Analytics with a robust technical foundation (B.Tech in Computer Science Engineering, CGPA 9.03/10, 2024). Highly accomplished AI/ML researcher who designed a skin cancer detection system using Explainable AI (SHAP), presented and published at the prestigious ICANEHA-2024 conference in Kuala Lumpur. Complemented by professional ML experience in fraud detection, hands-on strategy and organizational diagnostics during a Corporate SIP at the GM's Office, Taj Mahal Hotel (IHCL), New Delhi. Positioned at the strategic intersection of quantitative analytics, machine learning, and rigorous financial analysis to drive data-backed business decisions, consulting initiatives, and financial models.`;

export const whyFinanceAnalytics = `The choice to double major in Finance & Analytics is a natural synthesis of my computer science engineering background and my aspiration to lead strategic corporate initiatives. Data-driven decision-making lies at the heart of modern business. My training in Machine Learning and pattern recognition directly empowers my approach to Financial Modeling, Ratio Analysis, and valuation under risk. In today's volatile markets, combining quantitative analytics (my natural technical strength) with financial rigor (structuring, capital allocation, and valuation) creates a powerful, highly complementary skill set. This unique blend allows me to translate complex data patterns into actionable financial strategies and strategic advisory roles in corporate consulting and finance.`;

export const skillsData: SkillCategory[] = [
  {
    title: 'Finance & Analytics',
    iconName: 'TrendingUp',
    skills: [
      'Financial Ratio Analysis',
      'Corporate Valuation',
      'Power BI Dashboards',
      'Financial Modeling',
      'Advanced Data Analytics',
      'Python for Financial Analytics',
    ],
  },
  {
    title: 'Technology & AI/ML',
    iconName: 'Cpu',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Explainable AI (SHAP)',
      'Python Programming',
      'Data Preprocessing',
      'Feature Engineering',
      'Model Evaluation & Tuning',
    ],
  },
  {
    title: 'Business & Strategy',
    iconName: 'Briefcase',
    skills: [
      'Organizational Diagnostics',
      'Capability Framework Design',
      'Competitor Benchmarking',
      'Case Study Problem-Solving',
      'Stakeholder Interviews',
      'Change Management Prep',
    ],
  },
  {
    title: 'Tools & Software',
    iconName: 'Wrench',
    skills: [
      'Power BI Desktop',
      'Microsoft Excel (VBA/Macros)',
      'Python (Pandas, Scikit-Learn)',
      'MS Office Suite',
      'Git & Version Control',
    ],
  },
];

export const academicsData: AcademicQualification[] = [
  {
    degree: 'PGDM (Finance & Analytics)',
    institution: 'Great Lakes Institute of Management, Gurgaon',
    score: 'CGPA: 3.43 / 4.00',
    year: '2025 - 2027 (Pursuing)',
  },
  {
    degree: 'B.Tech (Computer Science & Engineering)',
    institution: 'Bharath Institute of Higher Education and Research, Lucknow / Chennai',
    score: 'CGPA: 9.03 / 10.00',
    year: '2020 - 2024',
  },
  {
    degree: 'Higher Secondary Certificate (12th Grade)',
    institution: 'Blue Birds International School, Mandi Dhanaura',
    score: 'Percentage: 87.80%',
    year: '2019 - 2020',
  },
  {
    degree: 'Secondary School Certificate (10th Grade)',
    institution: 'Blue Birds International School, Mandi Dhanaura',
    score: 'Percentage: 77.20%',
    year: '2017 - 2018',
  },
];

export const sipData = {
  title: 'Building a Capability Framework for Taj Mahal Hotel, New Delhi',
  type: 'Summer Internship Project (SIP)',
  company: 'Indian Hotels Company Limited (IHCL)',
  office: "GM's Office, Taj Mahal Hotel, New Delhi",
  period: 'Summer 2026',
  award: 'Trainee of the Quarter Award, 2026',
  challenge: 'Luxury hospitality thrives on "Tajness" — the Taj’s signature culture of warmth, trust, and service — but this was practiced intuitively, not structured or systematically taught. Capability-building was reactive, standards varied across shifts and departments, and mid-management lacked strategic thinking — a critical gap as IHCL scales rapidly toward 700+ hotels under its Accelerate 2030 strategy.',
  whatIDid: [
    'Conducted an exhaustive 8-week organizational diagnostic across 9 core hotel departments involving 120+ hours of direct observation and stakeholder interviews.',
    'Designed "IMPACT" — a robust 3×3 capability-building framework spanning 3 essential pillars (Strategic Thinking, Cultural Ethos, Behavioral Excellence) mapped across 3 organizational hierarchy tiers (Entry-level, Mid-Management, and Leadership).',
    'Delivered 12 ready-to-run training modules, complete with structured facilitator guides, hospitality-specific real-world caselets, and a Train-the-Trainer rollout blueprint.',
    'Led 6 critical parallel initiatives: launched the hotel’s first internal culture magazine (PRATIBHA), analyzed an OTA sentiment database of over 200+ reviews, benchmarked 5 major luxury hotel competitors in New Delhi, and authored executive strategic research papers on luxury hotel repositioning and MICE (Meetings, Incentives, Conferences, Exhibitions) demand dynamics.',
  ],
  impactMetrics: [
    {
      value: '350+',
      label: 'Employees Reached',
      subtext: 'Structured training library projected to scale across all hotel departments',
    },
    {
      value: '70%+',
      label: 'Service-Driven satisfaction',
      subtext: 'Identified key OTA driver to design the Behavioral Excellence pillar',
    },
    {
      value: '6',
      label: 'Strategic Reports Adopted',
      subtext: 'Research papers adopted by the General Manager\'s office for ongoing execution',
    },
    {
      value: 'Scale',
      label: 'Self-Sustaining Model',
      subtext: 'Shifted hotel capability development from ad-hoc to a scalable internal function',
    },
  ],
};

export const projectsData: Project[] = [
  {
    id: 'skin-cancer',
    title: 'Multiple Skin Cancer Detection Model & Explainable AI',
    domain: 'AI-ML',
    period: 'Sep 2023 - Feb 2024',
    summary: 'B.Tech Major Project: Designed an advanced deep learning framework combining convolutional networks with explainable artificial intelligence for clinical diagnostic support.',
    details: [
      'Designed a multi-model deep learning architecture combining VGG-based models and EfficientNet, achieving excellent multi-type skin cancer classification accuracy.',
      'Integrated SHAP (SHapley Additive exPlanations) as an Explainable AI layer, providing pixel-level visual explanations for model predictions to establish clinical trust and regulatory alignment.',
      'Presented the final research findings at the International Conference (ICANEHA-2024) hosted by Asia Pacific University, Kuala Lumpur, Malaysia, which was officially published in the conference proceedings.',
    ],
    techStack: ['Python', 'Deep Learning', 'VGG/EfficientNet', 'SHAP', 'TensorFlow', 'Explainable AI'],
  },
  {
    id: 'zomato-ops',
    title: 'Zomato Delivery Operations Performance Analysis',
    domain: 'Analytics',
    period: '2025',
    summary: 'Operational dashboard analyzing a comprehensive logistics database containing 45,584 records to optimize transit times and fleet efficiency.',
    details: [
      'Ingested and preprocessed a massive dataset of 45,584 delivery transactions in Power BI to evaluate the impact of environmental and driver attributes.',
      'Formulated statistical correlations proving that traffic congestion is the single largest delay driver, semi-urban cities experience the highest relative delivery delay, and driver rating has a strong negative correlation with delivery time.',
      'Recommended actionable strategic actions: deploying AI-driven dynamic route optimization for high-traffic clusters and executing a hyper-local partner expansion in semi-urban sectors.',
    ],
    techStack: ['Power BI', 'Data Cleansing', 'Statistical Analysis', 'Logistics Optimization', 'Excel'],
  },
  {
    id: 'hpcl-finance',
    title: 'Hindustan Petroleum (HPCL) Financial Ratio Analysis',
    domain: 'Finance',
    period: '2025',
    summary: 'Corporate valuation and financial diagnostic benchmarked against competitor BPCL and industry averages to assess investment feasibility.',
    details: [
      'Performed detailed historical financial ratio analysis for HPCL over multiple financial years, assessing liquidity, solvency, asset efficiency, and profitability.',
      'Benchmarked performance against industry peer Bharat Petroleum (BPCL), identifying that while HPCL has stable liquidity (current ratio ~1.4 - 1.56), it bears far higher financial leverage (D/E ratio 2.5 - 4.0 vs. industry norm of 0.5 - 0.7).',
      'Diagnosed weaker historical profitability margins (ROE, net margins) with signs of modest recovery in FY24-25, categorizing HPCL as a high-leverage, turnaround-dependent investment profile.',
    ],
    techStack: ['Financial Modeling', 'Ratio Analysis', 'Competitor Benchmarking', 'Corporate Finance', 'Valuation'],
  },
  {
    id: 'fintech-placeholder',
    title: 'Fintech Project Space',
    domain: 'Fintech',
    period: 'Upcoming / Modular Slot',
    summary: 'This slot is reserved for forthcoming financial technology applications, quantitative trading scripts, or blockchain finance integrations.',
    details: [
      'Prepared for integrating Python-based algorithmic trading or decentralized finance (DeFi) case studies.',
      'UI-ready container is fully optimized for subsequent quantitative asset models, portfolio optimization codes, or digital banking architectures.',
    ],
    techStack: ['Fintech', 'Python', 'API Integration'],
    isPlaceholder: true,
  },
  {
    id: 'ops-placeholder',
    title: 'Operations Project Space',
    domain: 'Operations',
    period: 'Upcoming / Modular Slot',
    summary: 'This slot is reserved for forthcoming supply chain, queueing theory, project management (CPM/PERT), or manufacturing simulation studies.',
    details: [
      'Configured for subsequent linear programming optimization, supply chain logistics routing, or six-sigma case analyses.',
      'Modular layout guarantees immediate scaling when operational diagnostics are updated.',
    ],
    techStack: ['Operations', 'Supply Chain', 'Optimization'],
    isPlaceholder: true,
  },
];

export const caseCompetitionsData: CaseCompetition[] = [
  {
    title: "Operatius'26 — National Level Operations Case Study",
    organizer: 'IIM Kashipur × Great Lakes Institute of Management, Gurgaon',
    team: 'Team Authentic',
    rank: 'Rank 4 (National Finalist)',
    problem: 'Thriveni Transport & Logistics (TTL) required a strategic model to scale regional, road-led coal logistics into an expansive, environmentally sustainable multi-modal platform without sacrificing cost efficiency or evacuation reliability.',
    solution: 'Designed a comprehensive 3-phase strategic roadmap: (1) Standardizing and automating first-mile road transit operations. (2) Engineering corridor-based dedicated fleets and signing asset-light, long-term rail infrastructure partnerships. (3) Deploying an AI-enabled centralized dispatch system. Built a custom mathematical network optimization routing tool alongside an interactive, multi-modal logistics dashboard in Power BI.',
    expectedOutcome: [
      '15% to 20% reduction in vehicle turnaround time (TAT)',
      '22% projected annual reduction in overall shipping and handling costs',
      'On-time delivery (OTD) reliability improving from 90% to 97%',
      'Avoided ₹30 - ₹50 Cr in immediate Capital Expenditure (CapEx) through strategic asset-light partnerships',
      'Unlocked 20% to 30% incremental cargo volume capacity within 18 months',
    ],
    metrics: [
      { label: 'Annual Cost Saved', value: '22%' },
      { label: 'TAT Reduction', value: '15-20%' },
      { label: 'On-Time Delivery', value: '97%' },
      { label: 'CapEx Avoided', value: '₹30-50 Cr' },
    ],
  },
  {
    title: 'Seed To Scale — Case Study Competition',
    organizer: 'Symbiosis Institute of Business Management (SIBM), Pune',
    team: 'Team The Alchemist',
    rank: 'Rank 4 (National Finalist)',
    problem: 'Successfully rebrand and reposition a traditional rural FMCG brand ("Swamy") to "Bhaitonkar" while mitigating consumer trust leakage in highly fragmented, low-literacy rural markets with weak brand recall.',
    solution: 'Developed a meticulous continuity-mapped rebranding brand narrative to retain local association. Crafted an ambient channel-wise rural communication plan leveraging physical localized touchpoints. Deployed a grassroots "proof before promotion" campaign model, establishing a trust-to-growth household flywheel spreading via community word-of-mouth rather than high-cost paid ads, rolled out in 3 risk-mitigated phases.',
    expectedOutcome: [
      'Consistent decline in long-term Customer Acquisition Cost (CAC) through localized trust networks',
      'Compounding organic brand recall and deep emotional equity among target rural households',
      'Rapid, community-driven organic market penetration without extensive, speculative marketing spends',
    ],
    metrics: [
      { label: 'Ad Spends', value: 'Minimal/Organic' },
      { label: 'Rural CAC', value: 'Declining' },
      { label: 'Adoption', value: 'Organic Flywheel' },
    ],
  },
];

export const leadershipData: LeadershipItem[] = [
  {
    role: 'Head SPOC',
    organization: 'CREST (Fellowship Program, GLIM Gurgaon)',
    year: '2026 - Present',
    description: 'Spearheading student operations, acting as the key liaison between program directors, corporate mentors, and fellows to optimize academic and social output.',
  },
  {
    role: 'Student POC (SPOC)',
    organization: 'Self Interest Club, GLIM Gurgaon',
    year: '2025 - Present',
    description: 'Directing club activities, organizing student workshops, and aligning special interest seminars with the student body.',
  },
  {
    role: 'Club Member',
    organization: 'Cyber Security Club, GLIM',
    year: '2024',
    description: 'Advocated for secure digital practices, organized awareness webinars, and collaborated on cyber defense study sessions.',
  },
  {
    role: 'Team Lead',
    organization: 'Ministry of Education Hackathon',
    year: '2023',
    description: 'Led a cross-functional 5-person technical team in developing localized software prototypes under compressed hackathon timelines.',
  },
];

export const extracurricularsData = [
  {
    activity: 'Cricket Team Captaincy',
    description: 'Captained the University Cricket team in an Inter-university national level tournament, demonstrating outstanding tactical field planning and group coordination.',
    year: '2023',
  },
  {
    activity: 'Badminton Championship',
    description: 'Secured the 2nd position in the prestigious university-wide Badminton singles competition.',
    year: '2023',
  },
  {
    activity: 'Kurukshetra Fest Victory',
    description: 'Secured 1st position (as a team) in Kurukshetra, the flagship sports and management fest at Great Lakes Institute of Management, Gurgaon.',
    year: '2026',
  },
];

export const certificationsData: Certification[] = [
  {
    name: 'Financial Analytics with Python',
    issuer: 'Koed Learning',
    duration: '4 weeks',
    year: '2025',
  },
  {
    name: 'Geo Data Sharing and Cyber Security',
    issuer: 'Indian Institute of Remote Sensing (IIRS), ISRO',
    year: '2022',
  },
  {
    name: 'Workshop on UAV Remote Sensing',
    issuer: 'Indian Institute of Remote Sensing (IIRS), ISRO',
    year: '2022',
  },
  {
    name: 'IBM Product Management Specialization',
    issuer: 'IBM / Coursera',
    year: '2026',
  },
];

export const achievementsData = [
  {
    text: 'Published and presented a peer-reviewed research paper on "Multiple Skin Cancer Detection using Explainable AI" at ICANEHA-2024, hosted by Asia Pacific University, Kuala Lumpur, Malaysia.',
    year: '2024',
  },
  {
    text: 'Received the highly competitive "Trainee of the Quarter" award at the legendary Taj Mahal Hotel, New Delhi (IHCL) during the Summer Internship Project in the GM\'s Office.',
    year: '2026',
  },
];
