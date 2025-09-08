import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { business } from "@/lib/business";

export default function BookingPage() {
  return (
    <>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl font-semibold mb-4">Κράτηση</h1>
        <p className="text-slate-700">Για online κράτηση, μπορείτε να χρησιμοποιήσετε το Treatwell:</p>
        <p className="mt-3"><a className="text-brand-primary underline" href="https://www.treatwell.gr/katasthma/philotes-health-center/" target="_blank">Treatwell — Filotis Health Center</a></p>
      </main>
      <Footer />
    </>
  );
}

