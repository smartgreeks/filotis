import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { ContactPanel } from "@/components/site/ContactPanel";
import { MapEmbed } from "@/components/site/MapEmbed";
import { Footer } from "@/components/site/Footer";
import { buildLocalBusinessJsonLd } from "@/lib/seo";

export default function HomePage() {
  const jsonLd = buildLocalBusinessJsonLd("el");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <Hero />
      <ServicesGrid />
      <About />
      <Testimonials />
      <FAQ />
      <ContactPanel />
      <MapEmbed />
      <Footer />
    </>
  );
}

