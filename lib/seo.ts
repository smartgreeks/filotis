import { business, t } from "@/lib/business";

export function siteTitle(locale: "el" | "en" = "el") {
  const tag = business.tagline ? t(business.tagline as any, locale) : undefined;
  return tag ? `${business.brandName} — ${tag}` : business.brandName;
}

export function siteDescription(locale: "el" | "en" = "el") {
  if (typeof business.tagline === "string") return business.tagline;
  return business.tagline ? t(business.tagline, locale) : "";
}

export function buildLocalBusinessJsonLd(locale: "el" | "en" = "el") {
  const services = (business.services || []).map((s) => ({
    "@type": "Service",
    name: typeof s.name === "string" ? s.name : t(s.name, locale),
    description: typeof s.desc === "string" ? s.desc : t(s.desc, locale),
    offers: s.priceFrom ? { "@type": "Offer", priceCurrency: "EUR", price: s.priceFrom.replace(/[^0-9.]/g, "") } : undefined,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.brandName,
    description: siteDescription(locale),
    url: "https://example.com", // replace in production
    areaServed: business.primaryLocation?.areas,
    telephone: business.contact?.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.primaryLocation?.city,
      streetAddress: business.primaryLocation?.address,
      addressCountry: "GR"
    },
    geo: business.primaryLocation?.geo,
    sameAs: [business.social?.facebook, business.social?.instagram, business.social?.googleBusinessUrl].filter(Boolean),
    makesOffer: services,
  };
}

