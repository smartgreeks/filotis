# Website Prototype Generator Prompt

## ROLE & GOAL
You are a **Senior Full-Stack Prototyper**. In one shot, generate a **production-ready website prototype** for a small local business using the stack below. The output must be **runnable immediately** and easily extendable into a full site. Prioritize speed, sensible defaults, Local SEO, and clean UI.

## STACK (default)
- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Button, Card, Navbar, Drawer, Input, Accordion)
- **lucide-react** icons
- Google Maps embed (placeholder coords)

---

## 1) BUSINESS BRIEF (edit only this JSON)
```json
{
  "brandName": "Φιλότης Health Center",
  "tagline": "Ολιστική υγεία και εναλλακτική αντιγήρανση με εξατομικευμένες θεραπείες",
  "sectors": ["Υγεία", "Εναλλακτικές Θεραπείες", "Ολιστική Υγεία", "Αντιγήρανση"],
  "primaryLocation": {
    "city": "Αθήνα",
    "areas": ["Πλατεία Μαβίλη", "Αμπελόκηποι"],
    "address": "Πλατεία Μαβίλη 3, Αμπελόκηποι, Αθήνα 115 23",
    "geo": { "lat": 37.9849, "lng": 23.7507 }
  },
  "contact": {
    "phone": "+30 694 439 9991",
    "email": "filotis.health.center@gmail.com",
    "hours": {
      "mon_fri": "10:00–20:00",
      "sat": "10:00–16:00",
      "sun": "Κλειστά"
    }
  },
  "services": [
    { "name": "Ολιστικές Θεραπείες", "desc": "Εξατομικευμένες θεραπείες για εσωτερική και εξωτερική ομορφιά και υγεία.", "priceFrom": "€40" },
    { "name": "Εναλλακτική Αντιγήρανση", "desc": "Φυσικές μέθοδοι αντιγήρανσης με βάση τη φύση και την ολιστική προσέγγιση.", "priceFrom": "€50" },
    { "name": "Θεραπευτικό Μασάζ", "desc": "Ανακούφιση από άγχος, μυϊκές εντάσεις και καθημερινή κόπωση.", "priceFrom": "€45" }
  ],
  "social": {
    "googleBusinessUrl": "https://maps.app.goo.gl/tFfP7nmG9PXcytCM7",
    "facebook": "https://www.facebook.com/p/%CE%A6%CE%B9%CE%BB%CF%8C%CF%84%CE%B7%CF%82-Health-Center-61558494873963/",
    "instagram": "https://www.instagram.com/filotis_health_center/"
  },
  "seo": {
    "targetKeywordsEL": [
      "φιλότης health center",
      "ολιστική υγεία αθήνα",
      "εναλλακτική αντιγήρανση",
      "θεραπείες πλατεία μαβίλη",
      "εξατομικευμένες θεραπείες αθήνα",
      "θεραπευτικό μασάζ αμπελόκηποι"
    ],
    "targetKeywordsEN": [
      "Philotes Health Center Athens",
      "holistic health center Athens",
      "alternative anti-aging treatments",
      "personalized therapies Athens",
      "natural therapies near Mavili Square",
      "therapeutic massage Ampelokipoi"
    ]
  },
  "brand": {
    "primary": "#0EA5E9",
    "secondary": "#10B981",
    "accent": "#F59E0B",
    "dark": "#0F172A",
    "light": "#F8FAFC",
    "fontHeadings": "Inter",
    "fontBody": "Inter"
  },
  "bilingual": true,
  "imagesPolicy": "auto-or-placeholder",
  "notes": "CTA για κλείσιμο ραντεβού μέσω Treatwell ή τηλεφώνου. Έμφαση σε reviews και στη Χρυσούλα ως κεντρικό πρόσωπο. Συνδέσμος Treatwell: https://www.treatwell.gr/katasthma/philotes-health-center/"
}

## 2) REQUIREMENTS

    Pages: /, /about, /services, /gallery, /contact, optional /booking

    Components: Hero, ServicesGrid, About, Testimonials, FAQ, ContactPanel, MapEmbed, Footer

    Local SEO: titles, meta, OG, sitemap, robots

    JSON-LD: LocalBusiness + Services

    Responsive, accessible, Lighthouse 90+

    README.md with setup + Dokploy deploy instructions

## 3) OUTPUT FORMAT

    Project scaffolding summary

    Full code for key files (package.json, tailwind.config, app/page.tsx, components/*)

    Business config file with JSON brief

    Placeholder images in /public

    README with instructions

    Notes for replacing placeholders


## 4) QUALITY GUARDRAILS

    Mobile-first, Tailwind utilities

    No dead links

    All images alt-tagged

    Lean bundle

## 5) CONVERSION TO FULL SITE (Checklist)

    Replace placeholders with real assets

    Connect contact form

    Add booking integration

    Enhance SEO with blog/service subpages

    Run Lighthouse audits

## 6) EXAMPLES INSIDE THE CODE

    Example ServiceCard + FAQ

    Example JSON-LD

    Example bilingual string