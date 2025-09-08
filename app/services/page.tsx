import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ServicesGrid } from "@/components/site/ServicesGrid";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container py-10">
          <h1 className="text-3xl font-semibold">Υπηρεσίες</h1>
          <p className="text-slate-700 mt-2">Εξατομικευμένες λύσεις για τις ανάγκες σας.</p>
        </div>
        <ServicesGrid />
      </main>
      <Footer />
    </>
  );
}

