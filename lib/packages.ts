export type StageId = "stage-1" | "stage-2" | "stage-3";

export type Package = {
  id: string;
  stageId: StageId;
  name: string;
  /** Higher reference price shown struck through above the sale price. */
  compareAtPriceLabel: string;
  priceLabel: string;
  tagline: string;
  features: string[];
  delivery: string;
  support: string;
  highlight?: boolean;
};

export type Stage = {
  id: StageId;
  number: number;
  title: string;
  subtitle: string;
  audience: string;
  href: string;
};

export const SALES_MESSAGE =
  "Whether you're a freelancer launching your first website or an enterprise building a scalable digital platform, Ascalify has a solution designed for your stage of growth.";

export const CTA_TAGLINE = "Start at $99 and scale beyond limits.";

export const stages: Stage[] = [
  {
    id: "stage-1",
    number: 1,
    title: "Start Online",
    subtitle: "For Freelancers, Personal Brands, Consultants & Small Local Businesses",
    audience:
      "Freelancers, coaches, consultants, doctors, lawyers, restaurants, gyms, local shops, and personal brands.",
    href: "/packages/stage-1",
  },
  {
    id: "stage-2",
    number: 2,
    title: "Grow Your Business",
    subtitle: "For Growing Companies & Startups",
    audience:
      "Growing businesses, agencies, startups, professional services, healthcare clinics, and real estate companies.",
    href: "/packages/stage-2",
  },
  {
    id: "stage-3",
    number: 3,
    title: "Scale Beyond Limits",
    subtitle: "For Established Businesses & Enterprises",
    audience:
      "SMEs, SaaS companies, logistics companies, marketplaces, fintech startups, and enterprise businesses.",
    href: "/packages/stage-3",
  },
];

export const packages: Package[] = [
  {
    id: "basic",
    stageId: "stage-1",
    name: "Basic",
    compareAtPriceLabel: "$149",
    priceLabel: "$99",
    tagline: "Perfect for individuals needing an online presence.",
    features: [
      "One Page Website",
      "Mobile Responsive Design",
      "Contact Form",
      "Social Media Links",
      "SSL Setup",
    ],
    delivery: "3-5 Days",
    support: "30 Days Support",
  },
  {
    id: "starter",
    stageId: "stage-1",
    name: "Starter",
    compareAtPriceLabel: "$449",
    priceLabel: "$299",
    tagline: "For small businesses and service providers.",
    features: [
      "Up to 5 Pages",
      "Custom Design",
      "Mobile Responsive",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO",
      "Google Maps Integration",
    ],
    delivery: "5-7 Days",
    support: "3 Months Maintenance",
    highlight: true,
  },
  {
    id: "professional",
    stageId: "stage-1",
    name: "Professional",
    compareAtPriceLabel: "$749",
    priceLabel: "$499",
    tagline: "For businesses wanting a strong online presence.",
    features: [
      "Up to 10 Pages",
      "Blog Setup",
      "Lead Capture Forms",
      "Google Analytics",
      "Speed Optimization",
      "SEO Setup",
      "Business Email Setup",
    ],
    delivery: "7-10 Days",
    support: "6 Months Maintenance",
  },
  {
    id: "growth",
    stageId: "stage-2",
    name: "Growth",
    compareAtPriceLabel: "$1,499",
    priceLabel: "$999",
    tagline: "Built for companies ready to expand their digital footprint.",
    features: [
      "Up to 15 Pages",
      "Advanced UI/UX",
      "Lead Generation Setup",
      "Blog & CMS",
      "Analytics Dashboard",
      "CRM Integration",
      "Advanced SEO",
    ],
    delivery: "2-3 Weeks",
    support: "1 Year Maintenance",
  },
  {
    id: "business-plus",
    stageId: "stage-2",
    name: "Business Plus",
    compareAtPriceLabel: "$2,999",
    priceLabel: "$1,999",
    tagline: "For teams that need more features and faster support.",
    features: [
      "Up to 25 Pages",
      "Custom Features",
      "Appointment Booking",
      "Multi-Language Support",
      "Advanced SEO",
      "Marketing Integrations",
      "Performance Optimization",
    ],
    delivery: "3-4 Weeks",
    support: "1 Year Priority Support",
    highlight: true,
  },
  {
    id: "business-pro",
    stageId: "stage-2",
    name: "Business Pro",
    compareAtPriceLabel: "$4,499",
    priceLabel: "$2,999",
    tagline: "Full-featured platform for ambitious growing brands.",
    features: [
      "Unlimited Pages",
      "Custom Dashboard",
      "API Integrations",
      "Automation Workflows",
      "AI Chat Assistant",
      "Advanced Analytics",
    ],
    delivery: "4-6 Weeks",
    support: "2 Years Maintenance",
  },
  {
    id: "scale",
    stageId: "stage-3",
    name: "Scale",
    compareAtPriceLabel: "$7,499",
    priceLabel: "$4,999",
    tagline: "Custom business platform for established operations.",
    features: [
      "Custom Business Platform",
      "Advanced Integrations",
      "User Management",
      "Admin Dashboard",
      "AI Features",
      "Cloud Deployment",
    ],
    delivery: "6-8 Weeks",
    support: "2 Years Maintenance",
  },
  {
    id: "enterprise",
    stageId: "stage-3",
    name: "Enterprise",
    compareAtPriceLabel: "$9,999",
    priceLabel: "$6,999",
    tagline: "Enterprise-grade web application with dedicated oversight.",
    features: [
      "Custom Web Application",
      "Multi-Role System",
      "Automation Engine",
      "Advanced Reporting",
      "Security Monitoring",
      "Dedicated Project Manager",
    ],
    delivery: "8-12 Weeks",
    support: "3 Years Maintenance",
    highlight: true,
  },
  {
    id: "enterprise-plus",
    stageId: "stage-3",
    name: "Enterprise Plus",
    compareAtPriceLabel: "$14,999+",
    priceLabel: "$9,999+",
    tagline: "End-to-end digital transformation with a dedicated team.",
    features: [
      "End-to-End Digital Transformation",
      "Web Platform Development",
      "AI & Automation Solutions",
      "Cloud Architecture",
      "API Ecosystem",
      "Dedicated Development Team",
      "Strategic Consulting",
    ],
    delivery: "Custom Timeline",
    support: "3+ Years Partnership",
  },
];

export const audienceSegments = [
  {
    priceBand: "$99 – $499",
    personas: [
      "Freelancers",
      "Coaches",
      "Consultants",
      "Doctors",
      "Lawyers",
      "Restaurants",
      "Gyms",
      "Local Shops",
      "Personal Brands",
    ],
  },
  {
    priceBand: "$999 – $2,999",
    personas: [
      "Growing Businesses",
      "Agencies",
      "Startups",
      "Professional Services",
      "Healthcare Clinics",
      "Real Estate Companies",
    ],
  },
  {
    priceBand: "$4,999 – $9,999+",
    personas: [
      "SMEs",
      "SaaS Companies",
      "Logistics Companies",
      "Marketplaces",
      "Fintech Startups",
      "Enterprise Businesses",
    ],
  },
];

export const faqs = [
  {
    question: "How long does delivery take for each package?",
    answer:
      "Delivery ranges from 3-5 days for Basic up to custom timelines for Enterprise Plus. Each package card lists its specific delivery window.",
  },
  {
    question: "What is included in maintenance and support?",
    answer:
      "Support includes bug fixes, minor content updates, security patches, and uptime monitoring for the duration listed on your package — from 30 days on Basic to 3+ years on Enterprise Plus.",
  },
  {
    question: "Can I upgrade from one stage to another later?",
    answer:
      "Yes. Many clients start at Stage 1 and grow into Stage 2 or 3. We can migrate your site and add features as your business scales.",
  },
  {
    question: "Do all packages include SSL and mobile-responsive design?",
    answer:
      "SSL is included from Basic onward. Mobile-responsive design is standard on every package from Starter and above; Basic includes responsive layout as well.",
  },
  {
    question: "How do I get a quote for Enterprise Plus?",
    answer:
      "Enterprise Plus is tailored to your scope. Contact us via WhatsApp or email with your requirements and we will provide a custom proposal and timeline.",
  },
  {
    question: "What do I need to provide before work starts?",
    answer:
      "We typically need your logo, brand colors (if any), content or page outline, and examples of sites you like. We guide you through a short discovery call before development begins.",
  },
];

export function getStage(id: StageId) {
  return stages.find((s) => s.id === id);
}

export function getPackagesByStage(stageId: StageId) {
  return packages.filter((p) => p.stageId === stageId);
}
