export type Hours = {
  mon_fri: string;
  sat?: string;
  sun?: string;
};

export type Service = {
  name: string | { el: string; en: string };
  desc: string | { el: string; en: string };
  priceFrom?: string;
};

export type BusinessConfig = {
  brandName: string;
  tagline?: string | { el: string; en: string };
  sectors?: string[];
  primaryLocation: {
    city: string;
    areas?: string[];
    address?: string;
    geo?: { lat: number; lng: number };
  };
  contact: {
    phone?: string;
    email?: string;
    hours?: Hours;
  };
  services?: Service[];
  social?: {
    googleBusinessUrl?: string;
    facebook?: string;
    instagram?: string;
  };
  seo?: {
    targetKeywordsEL?: string[];
    targetKeywordsEN?: string[];
  };
  brand?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    dark?: string;
    light?: string;
    fontHeadings?: string;
    fontBody?: string;
  };
  bilingual?: boolean;
  imagesPolicy?: string;
  notes?: string;
};

