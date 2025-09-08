import raw from "@/data/business.json" assert { type: "json" };
import type { BusinessConfig } from "@/lib/types";

export const business = raw as BusinessConfig;

export function t(bilingualValue: string | { el: string; en: string }, locale: "el" | "en" = "el"): string {
  if (typeof bilingualValue === "string") return bilingualValue;
  return bilingualValue[locale] || bilingualValue.el || bilingualValue.en;
}

export function getLocaleFromHeaders(): "el" | "en" {
  // Very simple default; could be enhanced to read cookies/search params.
  return "el";
}

