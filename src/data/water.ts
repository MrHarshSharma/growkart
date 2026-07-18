/**
 * Branded Water — GrowKart's second service line.
 * Custom-labelled packaged drinking water for restaurants, cafés and events.
 *
 * Figures mirror the planning document. Update them here and the whole
 * /branded-water page follows.
 */

import { whatsappLink } from "./business";

export const waterCity = "Nagpur";

/** Entry price per bottle, shown as an indication only. */
export const waterFromPrice = "₹8";

export const waterMockupLink = whatsappLink(
  "Hi GrowKart, I run a restaurant and I'd like a free mockup of my logo on a water bottle."
);

export const waterQuoteLink = whatsappLink(
  "Hi GrowKart, I'd like a quote for custom-labelled water bottles for my business."
);

/**
 * Ranked by what actually closes the deal. MRP freedom leads — it is the pitch.
 *
 * TODO(growkart): confirm the MRP position with a qualified advisor before
 * this page goes live. It is the load-bearing commercial claim here.
 */
export const waterReasons = [
  {
    title: "Set your own MRP",
    description:
      "With a national brand you're capped at the printed price. With your own label you decide the MRP and keep the difference on every bottle you serve.",
  },
  {
    title: "Your brand on every table",
    description:
      "Every guest, every meal, every day — your name sits in front of them for the length of the visit. Advertising you're already paying for.",
  },
  {
    title: "Better margin per bottle",
    description:
      "A better spread than reselling somebody else's brand, on a product your kitchen already buys every single week.",
  },
  {
    title: "A table that looks the part",
    description:
      "A branded bottle reads as considered. It lifts the table the same way your plating and menu design do.",
  },
  {
    title: "One local partner",
    description:
      "The same people who design your brand handle the label, the supply and the delivery. One number to call when something's wrong.",
  },
];

export const waterTiers = [
  {
    name: "House Brand",
    price: "₹8",
    unit: "per bottle",
    tagline: "For cafés and smaller kitchens getting started.",
    features: [
      "Our house label design",
      "500ml bottles",
      "Weekly delivery on your route",
      "No design fee",
    ],
    featured: false,
  },
  {
    name: "Custom Label",
    price: "₹9",
    unit: "per bottle",
    tagline: "Your own brand on the bottle. The usual choice.",
    features: [
      "Label designed around your brand",
      "500ml and 1L available",
      "Free mockup before you commit",
      "Weekly delivery on your route",
      "You set your own MRP",
    ],
    featured: true,
  },
  {
    name: "Premium & Events",
    price: "₹11+",
    unit: "per bottle",
    tagline: "For fine dining, banquets and weddings.",
    features: [
      "Premium label finish",
      "Event and single-day batches",
      "Bulk volumes for functions",
      "Dedicated delivery scheduling",
    ],
    featured: false,
  },
];

export const waterProcess = [
  {
    num: "01",
    title: "Send us your logo",
    description:
      "Message us on WhatsApp. If we've built your website, we already have your brand files and you don't need to send anything.",
  },
  {
    num: "02",
    title: "See a free mockup",
    description:
      "We design the label and show you your bottle before you commit to anything. No cost, and no obligation to order.",
  },
  {
    num: "03",
    title: "Approve and order",
    description:
      "You confirm the design and your first quantity. We agree your delivery day and the price per bottle in writing.",
  },
  {
    num: "04",
    title: "We deliver, every week",
    description:
      "Bottles arrive on a fixed weekly route. You reorder by WhatsApp, and we invoice and collect directly — no middleman.",
  },
];

export const waterAudience = [
  "Restaurants & bars",
  "Cafés & QSR",
  "Banquet halls & lawns",
  "Caterers & event planners",
];
