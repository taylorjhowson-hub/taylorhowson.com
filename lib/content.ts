export type Metric = {
  value: string;
  label: string;
};

export type GalleryItem = {
  label: string;
  src?: string;
  alt?: string;
};

export type CaseSection = {
  title: string;
  eyebrow?: string;
  body: string[];
  gallery?: GalleryItem[];
};

export type CaseStudy = {
  slug: "applygrid" | "consent-management" | "uqual";
  title: string;
  shortTitle: string;
  route: string;
  description: string;
  previewImage: string;
  previewAlt: string;
  logoImage?: string;
  logoAlt?: string;
  executiveSummary: string[];
  atAGlance: Record<string, string>;
  problem: string[];
  discoveryTitle: string;
  discovery: string[];
  approachTitle: string;
  approach: string[];
  solutionTitle: string;
  solutionIntro?: string[];
  solutionSections: CaseSection[];
  metrics: Metric[];
  resultsText: string[];
  whatILearned: string[];
  accent: "blue" | "brown" | "caramel";
};

export const home = {
  name: "Taylor Howson",
  headline: "I design products that make complex work feel simple.",
  about: [
    "I'm a Product Manager with a background in marketing and advertising. After several years helping companies bring products to market, I realized I wanted to be involved earlier in the product lifecycle—from understanding customer problems to designing and delivering the solution.",
    "Over the past six years, I've led both product strategy and execution across a wide range of products, including sales platforms, marketing technology, strategic partnerships, compliance, and most recently, AI-powered products. I enjoy taking ownership of a product from understanding the problem and defining a strategy to collaborating with engineering and bringing a solution to life.",
    "Today, I'm particularly excited about how AI is changing product development. It gives product managers the ability to move from ideas to working prototypes faster than ever, making it easier to validate solutions and stay involved throughout the product lifecycle.",
  ],
};

export const contact = {
  name: "Taylor Howson",
  title: "Product Manager",
  email: "taylorjhowson@gmail.com",
  linkedIn: "https://www.linkedin.com/in/taylor-howson/",
  phone: "503-568-2607",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "applygrid",
    title: "ApplyGrid",
    shortTitle: "ApplyGrid",
    route: "/case-studies/applygrid",
    description:
      "An AI-powered product designed to bring the modern job search into a single workflow.",
    previewImage: "/images/case-studies/applygrid-workspace-preview.png",
    previewAlt: "ApplyGrid product workspace preview",
    logoImage: "/images/case-studies/applygrid-logo.jpeg",
    logoAlt: "ApplyGrid logo",
    executiveSummary: [
      "The modern job search isn't a single task—it's an ongoing workflow spread across dozens of disconnected tools. Existing platforms help people find jobs or track applications, but none manage the entire workflow from discovery to networking to interview preparation. ApplyGrid is my attempt to bring that workflow into a single, AI-powered product.",
    ],
    atAGlance: {
      Role: "Founder & Product Manager",
      Team: "Placeholder: Team details not provided in source markdown.",
      Timeline: "2026 – Present",
      Product: "ApplyGrid",
      "Business Impact":
        "Placeholder: Business impact details not provided in source markdown.",
      Platform: "AI-Powered Job Search Platform",
      Focus: "Product Strategy, UX Design, AI-Assisted Development",
    },
    problem: [
      "The modern job search has become increasingly fragmented. Finding opportunities, tailoring resumes, tracking applications, preparing for interviews, networking, and managing recruiter conversations all happen across different platforms, spreadsheets, and AI tools.",
      "While researching existing job search products, I realized that each platform solved a single part of the process well, but none managed the entire workflow. As a result, job seekers spend as much time managing their search as they do actually searching for jobs.",
      "ApplyGrid was designed to bring that workflow into a single, AI-powered platform.",
    ],
    discoveryTitle: "Product Discovery",
    discovery: [
      "Rather than starting with a fixed set of requirements, ApplyGrid evolved through continuous iteration. As I evaluated existing products and tested new ideas, I found that many features users considered essential already existed—but they were scattered across separate applications and disconnected workflows.",
      "Throughout the design process, I continually simplified the experience by questioning each step of the user's journey. Features that added unnecessary complexity were removed, workflows were consolidated, and AI became increasingly responsible for automating repetitive tasks rather than requiring additional user input.",
      "Each iteration reinforced the same product principle: the goal wasn't to build more features—it was to reduce the amount of work required to manage a successful job search.",
    ],
    approachTitle: "Designing the Product",
    approach: [
      "ApplyGrid was designed using an iterative, AI-assisted product development process that allowed ideas to move quickly from concept to working software.",
      "I designed the user experience in Figma, rapidly prototyped new workflows using AI development tools, and continuously refined the product based on testing and feedback. Rather than treating design and development as separate phases, I used AI to quickly validate ideas, explore alternative user experiences, and evolve the product through rapid iteration.",
      "This approach significantly shortened the feedback loop between identifying a problem, designing a solution, and testing it, allowing the product to evolve much faster than a traditional development process.",
    ],
    solutionTitle: "The Product",
    solutionSections: [
      {
        title: "Personalized Onboarding",
        eyebrow: "Start with what the user already has.",
        body: [
          "Rather than asking users to manually configure every aspect of their job search, ApplyGrid begins by understanding who they are. Users upload their resume, connect their email, and define the type of opportunities they're looking for. AI uses this information to personalize the entire experience from day one.",
        ],
        gallery: [
          {
            label: "ApplyGrid Product Workspace",
            src: "/images/case-studies/applygrid-workspace-preview.png",
            alt: "ApplyGrid product workspace preview",
          },
          {
            label: "ApplyGrid Login Screen",
            src: "/images/case-studies/applygrid-login-screen.png",
            alt: "ApplyGrid login screen",
          },
          {
            label: "Search Preferences",
            src: "/images/case-studies/applygrid-search-preferences.png",
            alt: "ApplyGrid search preferences screen",
          },
        ],
      },
      {
        title: "Opportunity Discovery",
        eyebrow: "Relevant opportunities—not endless searching.",
        body: [
          "Instead of requiring users to constantly search multiple job boards, ApplyGrid continuously surfaces opportunities that align with their background and career goals. The focus is on helping users spend less time searching and more time evaluating the right opportunities.",
        ],
        gallery: [
          {
            label: "Opportunity Discovery",
            src: "/images/case-studies/applygrid-opportunities.svg",
            alt: "ApplyGrid opportunity discovery visual",
          },
        ],
      },
      {
        title: "Application Pipeline",
        eyebrow: "Manage the entire workflow in one place.",
        body: [
          "The pipeline brings together applications, recruiter conversations, interviews, follow-ups, and next steps into a single workspace. Rather than relying on spreadsheets or disconnected tools, users can understand the status of every opportunity from one screen.",
        ],
        gallery: [
          {
            label: "Your Job Search Today",
            src: "/images/case-studies/applygrid-job-search-today.png",
            alt: "ApplyGrid job search dashboard with updated metrics",
          },
        ],
      },
      {
        title: "AI Workspace",
        eyebrow: "AI where it's actually useful.",
        body: [
          "Rather than existing as a standalone chatbot, AI is integrated directly into the workflow. It helps tailor resumes, prepare for interviews, summarize job postings, draft networking messages, and reduce repetitive work without requiring users to constantly switch contexts.",
        ],
        gallery: [
          {
            label: "AI Workspace",
            src: "/images/case-studies/applygrid-ai-workspace.svg",
            alt: "ApplyGrid AI workspace visual",
          },
        ],
      },
      {
        title: "Automation",
        eyebrow: "Reduce manual work.",
        body: [
          "ApplyGrid continuously synchronizes job search activity, monitors connected accounts, updates application status, and surfaces relevant information automatically. The goal is to reduce the administrative burden of job searching so users can focus on finding the right opportunity.",
        ],
        gallery: [
          {
            label: "Automation",
            src: "/images/case-studies/applygrid-automation.svg",
            alt: "ApplyGrid automation visual",
          },
        ],
      },
    ],
    metrics: [],
    resultsText: [
      "Although ApplyGrid is still an active product, it has already demonstrated how AI can fundamentally change the product development process.",
      "Product Outcomes",
      "Designed the complete product experience from concept to interactive application.",
      "Built a fully functional platform using AI-assisted design and development tools.",
      "Created an end-to-end workflow spanning onboarding, opportunity discovery, application management, AI assistance, and automation.",
      "Continuously refined the product through rapid iteration and user feedback.",
      "Development Outcomes",
      "Used Figma to rapidly explore and validate user experiences.",
      "Leveraged AI development tools to prototype working software in days rather than weeks.",
      "Iterated through dozens of product revisions while continuously simplifying the user experience.",
      "Demonstrated how AI can dramatically shorten the feedback loop between identifying a problem and validating a solution.",
    ],
    whatILearned: [
      "Building ApplyGrid fundamentally changed how I think about product management.",
      "Before AI-assisted development, product managers often had to rely on lengthy design and engineering cycles before validating an idea. Today, it's possible to move from identifying a problem to testing a working solution in a matter of days. That has completely changed the way I approach product development.",
      "More importantly, ApplyGrid reinforced something I've believed throughout my career: product managers create the most value when they stay closely connected to the entire product lifecycle. Understanding users, designing intuitive experiences, rapidly validating ideas, and continuously improving the product shouldn't be separate activities—they're all part of building great products.",
    ],
    accent: "blue",
  },
  {
    slug: "consent-management",
    title: "Consent Management Platform",
    shortTitle: "Consent Management Platform",
    route: "/case-studies/consent-management",
    description:
      "An internal enterprise platform that centralized customer privacy, consent, and compliance workflows.",
    previewImage: "/images/case-studies/consent-customer-search.png",
    previewAlt: "Consent Management Platform customer search screen",
    executiveSummary: [
      "I led the design and development of an internal Consent Management Platform that replaced four disconnected compliance applications with a single enterprise platform. The solution centralized customer privacy and communication preferences, integrated with the company's microservices architecture, achieved 100% adoption, and reduced annual software costs by approximately $100K.",
    ],
    atAGlance: {
      Role: "Product Manager",
      Team: "Legal, Customer Service, Engineering, Data Services",
      Timeline: "2 Months",
      Product: "Internal Consent Management Platform",
      "Business Impact":
        "100% adoption • Eliminated 4 third-party tools • ~$100K annual savings",
    },
    problem: [
      "Customer privacy, consent, and communication preferences were managed across four separate third-party applications that didn't integrate with the company's backend systems. This created inconsistent customer data, manual workflows, compliance risk, and limited visibility into customer records.",
      "The goal was to create a single platform that centralized these workflows while integrating directly with the company's enterprise architecture.",
    ],
    discoveryTitle: "Discovery & Research",
    discovery: [
      "Before defining the product, I spent time understanding both the business workflows and the underlying technical architecture.",
      "I met with Legal and Customer Service teams to understand how they were using the four existing platforms, what functionality they relied on, and where the biggest pain points existed. Together, we identified the capabilities that needed to be preserved and the opportunities to improve their day-to-day workflows.",
      "From there, I partnered with our Data Services team to understand how customer consent and compliance data was stored across the existing platforms and what information needed to be migrated into a centralized solution.",
      "Finally, I worked closely with our Microservices team to understand our enterprise data model and API architecture. This allowed me to define how the new platform would integrate with our backend services and become the system of record for customer privacy and consent data.",
    ],
    approachTitle: "My Approach",
    approach: [
      "Once I had a clear understanding of the business requirements and technical architecture, I translated those findings into a product strategy and implementation plan.",
      "I defined the product requirements, prioritized functionality, and designed the user experience in Figma, working closely with Legal and Customer Service stakeholders to validate the workflows before development began.",
      "To accelerate development, I used Cursor to build an initial working version of the application, including the core user interface and integrations with our internal APIs. This gave stakeholders an interactive prototype to validate the experience early and provided engineering with a production-ready foundation that became a significant part of the final application.",
      "Throughout development, I partnered closely with engineering to refine requirements, answer questions, and ensure the final product met both business and technical needs. After launch, I led user training sessions and created product documentation to support adoption across Legal and Customer Service.",
    ],
    solutionTitle: "The Solution",
    solutionSections: [
      {
        title: "Unified Consent Management",
        body: [
          "The platform provided Legal and Customer Service teams with a single place to search for customers, manage TCPA and communication preferences, update compliance settings, and review a complete audit history.",
        ],
        gallery: [
          {
            label: "Customer Search",
            src: "/images/case-studies/consent-customer-search.png",
            alt: "Consent Management Platform customer search screen",
          },
        ],
      },
      {
        title: "Approval Workflow",
        body: [
          "Sensitive compliance changes required manager approval before taking effect, creating a transparent review process with a complete audit trail.",
        ],
        gallery: [
          {
            label: "Consent Management / Customer Preferences",
            src: "/images/case-studies/consent-preferences.png",
            alt: "Consent Management Platform customer preferences screen",
          },
        ],
      },
      {
        title: "Audit & Exception Management",
        body: [
          "One legacy loan servicing platform couldn't integrate directly with our modern architecture, but it contained critical compliance data.",
          "I designed a daily synchronization process that migrated more than 20,000 historical records and automatically synchronized approximately 2,000 records per day. I also created an audit dashboard that tracked synchronization results and allowed users to download, correct, and reprocess failed records without engineering involvement.",
        ],
        gallery: [
          {
            label: "Audit Dashboard",
            src: "/images/case-studies/consent-audit-dashboard.png",
            alt: "Consent Management Platform audit dashboard screen",
          },
        ],
      },
    ],
    metrics: [
      { value: "4", label: "Third-party applications replaced" },
      { value: "~$100K", label: "Annual software costs reduced" },
      { value: "100%", label: "Adoption across Legal and Customer Service" },
      { value: "20,000+", label: "Historical compliance records migrated" },
      { value: "~2,000", label: "Daily records synchronized" },
      { value: "98.7%", label: "Automated processing success rate" },
    ],
    resultsText: [
      "Created a centralized audit trail and single source of truth for customer consent data",
    ],
    whatILearned: [
      "This project reinforced that successful enterprise products require understanding both user workflows and technical architecture. The best solutions aren't just intuitive—they fit naturally into the systems that support them.",
      "It also strengthened my interest in owning products end to end, from discovery and product design to implementation, adoption, and continuous improvement.",
    ],
    accent: "brown",
  },
  {
    slug: "uqual",
    title: "Growing Revenue Through a Strategic Partnership",
    shortTitle: "Strategic Partnership with Uqual",
    route: "/case-studies/uqual",
    description:
      "A strategic partnership integration that automated referrals, connected systems, and increased completed deals.",
    previewImage: "/images/case-studies/uqual-reporting-dashboard.svg",
    previewAlt: "Uqual partnership reporting dashboard visual",
    executiveSummary: [
      "I led the product strategy and execution for New American Funding's partnership with Uqual, designing a seamless referral experience that connected customers, internal teams, and an external strategic partner. The solution automated referrals, integrated internal and external systems, and created a scalable customer recovery process that generated thousands of referrals each month and increased completed deals.",
    ],
    atAGlance: {
      Role: "Product Manager",
      Team: "Strategic Partnerships, Engineering, Data Services, Sales, Uqual",
      Timeline: "6 Months",
      Product: "Uqual Partnership Integration",
      "Business Impact":
        "4,000+ referrals/month • ~20% customer recovery • ~240 completed deals/month",
    },
    problem: [
      "Every month, thousands of customers began a transaction but ultimately weren't qualified to move forward. Once they exited the process, there was no scalable way to help them improve their financial readiness or reconnect them with New American Funding when they became eligible.",
      "New American Funding partnered with Uqual, a financial wellness company specializing in debt consolidation and financial coaching, to help these customers improve their financial health. The challenge was creating a seamless experience that automatically connected eligible customers with Uqual while keeping internal teams informed throughout the customer's journey.",
      "The goal was to create a connected referral experience that benefited customers, internal teams, and both organizations while recovering opportunities that otherwise would have been lost.",
    ],
    discoveryTitle: "Discovery & Research",
    discovery: [
      "I worked closely with Strategic Partnerships, Sales, Uqual, Engineering, and Data Services to understand how referrals were managed, how customer information moved between both organizations, and where friction existed throughout the process.",
      "I met with Uqual multiple times each week to understand their business processes, technical requirements, and product roadmap while partnering with internal stakeholders to define a solution that aligned with both organizations. Together, we mapped the data exchanged between systems, defined the API requirements, and designed referral workflows that supported both automated and user-initiated referrals.",
      "This discovery process helped define a product that not only connected two systems, but created a seamless experience for customers, internal teams, and our strategic partner.",
    ],
    approachTitle: "My Approach",
    approach: [
      "My goal was to make the partnership feel like a natural extension of New American Funding's existing customer experience rather than a separate process.",
      "I designed the referral workflows, defined the product requirements, and collaborated with both organizations to ensure customer information moved seamlessly between internal systems and Uqual's platform. This included mapping data between our microservices architecture, Strategic Partnership Services (SPS), Uqual's APIs, and Salesforce.",
      "As the partnership evolved, I continued identifying opportunities to improve the customer and internal user experience. This included embedding referrals directly into the application experience, integrating Uqual updates into our internal CRM, creating dashboards to measure partnership performance, and expanding the platform to support additional referral workflows.",
    ],
    solutionTitle: "The Solution",
    solutionIntro: [
      "The partnership was designed to create a seamless experience for customers who weren't yet ready to complete a transaction while giving internal teams visibility into every step of the referral journey.",
    ],
    solutionSections: [
      {
        title: "Automated Customer Referrals",
        body: [
          "Customers who met specific qualification criteria during the application process were automatically offered the opportunity to connect with Uqual. Referral information was securely transferred between both organizations, eliminating manual processes and creating a frictionless customer experience.",
        ],
        gallery: [
          {
            label: "Application + Referral Experience",
            src: "/images/case-studies/uqual-application-referral.svg",
            alt: "Uqual application referral experience visual",
          },
        ],
      },
      {
        title: "Internal User Experience",
        body: [
          "Internal users could initiate referrals directly from the CRM and monitor customer progress without leaving the platform. Real-time updates from Uqual gave teams visibility into each customer's journey and helped them re-engage customers as they became qualified.",
        ],
        gallery: [
          {
            label: "CRM Integration",
            src: "/images/case-studies/uqual-crm-integration.svg",
            alt: "Uqual CRM integration visual",
          },
        ],
      },
      {
        title: "Connected Partner Ecosystem",
        body: [
          "I designed the data mapping and product workflows that connected New American Funding's internal systems, Strategic Partnership Services (SPS), Uqual's APIs, and Salesforce. This ensured customer information remained synchronized throughout the referral lifecycle while minimizing manual effort for both organizations.",
        ],
        gallery: [
          {
            label: "Architecture / Integration",
            src: "/images/case-studies/uqual-architecture.svg",
            alt: "Uqual architecture and integration visual",
          },
        ],
      },
      {
        title: "Reporting & Partnership Insights",
        body: [
          "I partnered with our Data Services team to create shared reporting dashboards that gave both organizations visibility into referral volume, customer progress, and partnership performance. These insights helped measure the success of the partnership while identifying opportunities for continued growth and optimization.",
        ],
        gallery: [
          {
            label: "Reporting Dashboard",
            src: "/images/case-studies/uqual-reporting-dashboard.svg",
            alt: "Uqual reporting dashboard visual",
          },
        ],
      },
    ],
    metrics: [
      { value: "4,000+", label: "Referrals per month" },
      { value: "~20%", label: "Customer recovery" },
      { value: "~240", label: "Completed deals per month" },
      { value: "~50%", label: "Internal referral process adoption" },
    ],
    resultsText: [
      "The Uqual partnership transformed what had traditionally been a dead end in the customer journey into a scalable customer recovery program that benefited customers, internal teams, and both organizations.",
      "Business Impact",
      "Generated 4,000+ referrals per month through automated referral workflows and embedded application experiences.",
      "Helped return approximately 20% of referred customers after improving their financial readiness.",
      "Contributed to approximately 240 completed deals per month through the partnership.",
      "Operational Improvements",
      "Gave internal teams real-time visibility into customer progress through CRM integrations and shared reporting dashboards.",
      "Created a seamless referral experience that eliminated manual handoffs between organizations.",
      "Technical Outcomes",
      "Integrated New American Funding's internal microservices architecture with Strategic Partnership Services (SPS), Uqual's APIs, Salesforce, and third-party credit services.",
      "Automated customer referrals and status updates between both organizations.",
      "Built shared reporting dashboards that provided both companies with visibility into referral performance and customer outcomes.",
    ],
    whatILearned: [
      "One of the biggest lessons I took away from this project is that visibility creates trust.",
      "Early in the partnership, internal teams had very little insight into what happened after they referred a customer. By integrating Uqual's progress directly into our CRM, they could see where each customer was in their journey and when they were ready to re-engage. That visibility gave teams confidence that their referrals were creating value, which ultimately encouraged greater adoption and increased participation in the partnership.",
      "This project reinforced that successful partnerships aren't built through integrations alone. They're built by creating transparency, aligning incentives, and designing experiences that benefit everyone involved.",
    ],
    accent: "caramel",
  },
];

export function getCaseStudy(slug: CaseStudy["slug"]) {
  return caseStudies.find((study) => study.slug === slug);
}
