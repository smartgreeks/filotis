import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl font-semibold mb-4">Σχετικά</h1>
        <div className="container-prose space-y-3">
          <p>
            Είμαστε μια ομάδα με πάθος για την ευεξία και την υγεία. Συνδυάζουμε
            σύγχρονες και φυσικές μεθόδους για ασφαλή, αποτελεσματικά αποτελέσματα.
          </p>
          <p>
            Στόχος μας είναι να προσφέρουμε εξατομικευμένες υπηρεσίες με φροντίδα και
            αξιοπιστία.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

