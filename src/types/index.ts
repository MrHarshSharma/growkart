export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  /** Business category, shown as the card label — e.g. "Restaurant". */
  industry: string;
  /** What the site does for the business, in customer terms. */
  outcome: string;
  description: string;
  tags: string[];
  image: string;
  accent: string;
  url?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export interface TechItem {
  name: string;
  icon: string;
}
