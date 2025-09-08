import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ContactPanel } from "@/components/site/ContactPanel";
import { MapEmbed } from "@/components/site/MapEmbed";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPanel />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}

