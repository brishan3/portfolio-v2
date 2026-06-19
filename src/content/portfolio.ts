export type PortfolioItem = {
  name: string;
  description: string;
  img: string;
  url: string;
  role: string;
  outcome: string;
  tags: string[];
};

export const PORTFOLIO_CONTENT: PortfolioItem[] = [
  {
    name: "Jon Thomas - Portfolio",
    description:
      "Cinematic portfolio for a Vancouver-based Director of Photography with full-screen project stills, soft transitions, and full page animations that lets the quality of his work speak for itself.",
    img: "/images/portfolio/jon-thomas.png",
    url: "https://jonthomas.ca/",
    role: "Design | Development | Deployment",
    outcome:
      "Professional showcase Jon is proud to share, matching his vision for how he wants to present his work to producers and collaborators.",
    tags: ["Next.js", "Tailwind", "Motion"],
  },
  {
    name: "Paint Bid Ninja",
    description:
      "Painting estimation SaaS for individuals and organizations, allowing estimators to quote painting jobs fast: generate proposals and work orders from templates, track client communications, and sync with CompanyCam and Jobber via Zapier.",
    img: "/images/portfolio/paintbidninja.webp",
    url: "https://paintbidninja.com/",
    role: "Product Management | Development | Deployment",
    outcome:
      "Fully fledged painting estimation software with a block-based document editor, subscription billing, templating systems, a KPI dashboard, Zapier integrations, client communication tracking, and much more, giving teams full control and visibility into quoting, revenue, and pipeline health.",
    tags: ["Next.js", "Supabase", "Stripe", "Resend", "Sentry"],
  },
  {
    name: "Solace with Sara",
    description:
      "Calm wellness business site for a practitioner who needs editable services, booking paths, and commerce-ready pages without a heavy admin flow.",
    img: "/images/portfolio/solacewithsara.webp",
    url: "https://solacewithsara.com/",
    role: "Development | Deployment",
    outcome: "Full client-editable service and commerce pages Sara can update as offerings change, along with a shop for her E-books and an affiliate shop for recommended products.",
    tags: ["Next.js", "PayloadCMS", "Stripe", "Resend"],
  },
  {
    name: "Vanguard Painting",
    description:
      "Professional business website for a Vancouver-based painting company, with service pages structured around local trust, project clarity, and quote intent.",
    img: "/images/portfolio/painter.webp",
    url: "https://painter.ca/",
    role: "Development | Deployment",
    outcome: "Polished local presence designed to turn service research into quote requests.",
    tags: ["Next.js", "WordPress", "Tailwind", "Motion"],
  },
  {
    name: "Fillogic",
    description:
      "U.S.-based retail logistics provider with the goal to streamline forward fulfillment, reverse logistics, and transportation services from their tech-enabled, mall-based hubs to deliver fast, efficient, and sustainable solutions for retailers and brands. ",
    img: "/images/portfolio/fillogic.webp",
    url: "https://fillogic.com/",
    role: "Development | Deployment",
    outcome: "On-brand, professional website with an interactive map displaying Fillogic's hubs around the U.S., with Algolia-backed content discovery over a CMS the marketing team can maintain, allowing for easy updates and a seamless user experience.",
    tags: ["Next.js", "WordPress", "Algolia", "Tailwind"],
  },
  {
    name: "ViDA",
    description:
      "Coaching and keynote platform for Adam Kreek, Canadian Olympian and founder of Values Driven Achievement, combining articles, products, speaking content, and editable brand pages.",
    img: "/images/portfolio/values-driven.webp",
    url: "https://www.valuesdrivenachievement.com/",
    role: "Development | Deployment",
    outcome: "Elegant, professional business website with a clean, modern design, and a focus on showcasing Adam's achievements and his message of values-driven achievement. Fully client-editable content and commerce pages where Adam can update content without technical knowledge, along with a shop for his book(s) and a blog for his articles.",
    tags: ["Next.js", "WordPress", "Shopify", "Motion"],
  },
  {
    name: "Fibrebox",
    description:
      "Non-profit trade association that represents North American corrugated packaging manufacturers. Fibrebox strives to grow, protect and enhance the overall well-being of the industry by providing member-valued programs and services. ",
    img: "/images/portfolio/fibrebox.webp",
    url: "https://www.fibrebox.org/",
    role: "Development",
    outcome: "Fast search and CMS workflows for a resource library that keeps growing.",
    tags: ["Next.js", "WordPress", "Algolia", "Tailwind"],
  },
  {
    name: "Lionheart Coaching",
    description:
      "Focused coaching website for a Victoria-based authenticity coach, shaped around trust-building and clear next steps for prospective clients.",
    img: "/images/portfolio/lionheartcoaching.webp",
    url: "https://lionheartcoaching.co/",
    role: "Development | Deployment",
    outcome: "A warmer path from first impression to coaching inquiry.",
    tags: ["Next.js", "WordPress", "Tailwind", "Motion"],
  },
];
