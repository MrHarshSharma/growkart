/**
 * Single source of truth for business facts used across the site.
 * Change a number here and it updates everywhere.
 */

export const startingPrice = "₹9,999";

/**
 * The person behind the business — this is what turns an anonymous
 * agency into someone a local owner is willing to pay.
 *
 * TODO(growkart): drop a real photo at /public/founder.jpg and set
 * `photo` to "/founder.jpg". Until then the block renders initials,
 * so nothing breaks on deploy. Fill in `city` too.
 */
export const founder = {
  name: "Harsh Sharma",
  initials: "HS",
  role: "Founder, GrowKart",
  photo: null as string | null,
  city: null as string | null, // e.g. "Pune"
};

/** Only claims that are independently checkable belong here. */
export const founderFacts = [
  {
    value: "8+",
    label: "business websites live today — every one of them clickable and open",
  },
  {
    value: "1:1",
    label: "you deal with me directly, not an account manager",
  },
];

export const phoneDisplay = "+91 96656 54326";
export const phoneHref = "tel:+919665654326";
export const whatsappNumber = "919665654326";
export const instagramUrl = "https://instagram.com/growkart.in";

/** Builds a wa.me deep link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const auditLink = whatsappLink(
  "Hi GrowKart, I'd like a free website audit for my business."
);

export const quoteLink = whatsappLink(
  "Hi GrowKart, I'd like a quote for a website for my business."
);

/** Monthly capacity — drives the scarcity line near the CTAs. */
export const monthlySlots = 6;

export const industries = [
  {
    name: "Restaurants & Cafés",
    outcome: "Take orders online instead of losing them to aggregators.",
  },
  {
    name: "Retail & Grocery Stores",
    outcome: "Put your full catalogue where customers already search.",
  },
  {
    name: "Showrooms & Boutiques",
    outcome: "Let buyers browse your collection before they walk in.",
  },
  {
    name: "Local Service Businesses",
    outcome: "Turn Google searches in your area into direct enquiries.",
  },
];

export const guarantees = [
  {
    title: "Fixed price, fixed timeline",
    description:
      "You get the full cost and the delivery date in writing before we start. No mid-project surprises.",
  },
  {
    title: "Free revisions until you're happy",
    description:
      "We keep refining the design during the build. You are not paying extra to get it right.",
  },
  {
    title: "Mobile-first and SEO-ready",
    description:
      "Most of your customers arrive on a phone from Google. Every site we ship is built for exactly that.",
  },
  {
    title: "We stay after launch",
    description:
      "Ongoing technical support, so a broken menu or a down site never costs you a day of business.",
  },
];

export const plans = [
  {
    name: "Starter Site",
    price: startingPrice,
    tagline: "For businesses getting online for the first time.",
    features: [
      "Up to 5 pages",
      "Mobile-first design",
      "Google Business setup",
      "Enquiry & WhatsApp buttons",
      "Live in 2–3 weeks",
    ],
    featured: false,
  },
  {
    name: "Online Store",
    price: "₹19,999",
    tagline: "For shops that want to take orders and payments online.",
    features: [
      "Full product catalogue",
      "Online payments & order management",
      "Customer accounts",
      "SEO-ready product pages",
      "Live in 4–6 weeks",
    ],
    featured: true,
  },
  {
    name: "Growth Partner",
    price: "Custom",
    tagline: "For businesses that want the site plus ongoing growth.",
    features: [
      "Everything in Online Store",
      "Monthly SEO & content",
      "Google Ads management",
      "Performance reporting",
      "Priority support",
    ],
    featured: false,
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Free consultation",
    description:
      "A 20-minute call about your business, your customers, and what you actually need. No cost, no obligation.",
  },
  {
    num: "02",
    title: "Plan & quote",
    description:
      "You get a fixed price, a page-by-page plan, and a delivery date in writing before any work begins.",
  },
  {
    num: "03",
    title: "Design",
    description:
      "You see the design before we build it, and we revise it until it looks like your business — not a template.",
  },
  {
    num: "04",
    title: "Development",
    description:
      "We build it fast, mobile-first, and SEO-ready, with your content and photos in place.",
  },
  {
    num: "05",
    title: "Launch",
    description:
      "We put it live on your domain, connect Google Business, and make sure customers can find you.",
  },
  {
    num: "06",
    title: "Support",
    description:
      "We stay on to fix, update, and improve. You always have someone to call.",
  },
];
