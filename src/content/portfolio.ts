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
      "A cinematic portfolio for a Director of Photography, built so reels, stills, and credits stay fast to browse without burying the work in chrome.",
    img: "/images/portfolio/jon-thomas.png",
    url: "https://jonthomas.ca/",
    role: "Portfolio Build",
    outcome: "A visual archive that lets producers assess the work in seconds.",
    tags: ["Next.js", "Tailwind", "Motion"],
  },
  {
    name: "Paint Bid Ninja",
    description:
      "A SaaS platform for painting companies to price jobs, assemble professional bids, collect payments, and keep estimates moving.",
    img: "/images/portfolio/paintbidninja.webp",
    url: "https://paintbidninja.com/",
    role: "Full-Stack SaaS",
    outcome: "Full-stack bid workflow with auth, payments, email, and client-ready proposal output.",
    tags: ["Next.js", "Supabase", "Stripe", "Resend"],
  },
  {
    name: "Solace with Sara",
    description:
      "A calm wellness business site for a practitioner who needs editable services, booking paths, and commerce-ready pages without a heavy admin flow.",
    img: "/images/portfolio/solacewithsara.webp",
    url: "https://solacewithsara.com/",
    role: "Business Website",
    outcome: "Service pages and content tools Sara can update as offerings change.",
    tags: ["Next.js", "PayloadCMS", "Stripe", "Resend"],
  },
  {
    name: "Vanguard Painting",
    description:
      "A professional website for a Vancouver painting company, with service pages structured around local trust, project clarity, and quote intent.",
    img: "/images/portfolio/painter.webp",
    url: "https://painter.ca/",
    role: "Marketing Site",
    outcome: "A polished local presence designed to turn service research into quote requests.",
    tags: ["Next.js", "WordPress", "Tailwind", "Motion"],
  },
  {
    name: "Fillogic",
    description:
      "A business site for a U.S. retail logistics provider, giving teams a searchable way to publish insights, services, and industry pages.",
    img: "/images/portfolio/fillogic.webp",
    url: "https://fillogic.com/",
    role: "Enterprise Website",
    outcome: "Algolia-backed content discovery over a CMS the marketing team can maintain.",
    tags: ["Next.js", "WordPress", "Algolia", "Tailwind"],
  },
  {
    name: "ViDA",
    description:
      "A coaching and keynote platform for Values Driven Achievement, combining articles, products, speaking content, and editable brand pages.",
    img: "/images/portfolio/values-driven.webp",
    url: "https://www.valuesdrivenachievement.com/",
    role: "Brand Platform",
    outcome: "WordPress and Shopify content stitched into a cohesive conversion path.",
    tags: ["Next.js", "WordPress", "Shopify", "Motion"],
  },
  {
    name: "Fibrebox",
    description:
      "A nonprofit resource site for corrugated cardboard education, built around searchable industry content and easy editorial upkeep.",
    img: "/images/portfolio/fibrebox.webp",
    url: "https://www.fibrebox.org/",
    role: "Nonprofit Website",
    outcome: "Fast search and CMS workflows for a resource library that keeps growing.",
    tags: ["Next.js", "WordPress", "Algolia", "Tailwind"],
  },
  {
    name: "Lionheart Coaching",
    description:
      "A focused coaching website for a Victoria-based authenticity coach, shaped around trust-building copy and clear next steps for prospective clients.",
    img: "/images/portfolio/lionheartcoaching.webp",
    url: "https://lionheartcoaching.co/",
    role: "Business Website",
    outcome: "A warmer path from first impression to coaching inquiry.",
    tags: ["Next.js", "WordPress", "Tailwind", "Motion"],
  },
];
