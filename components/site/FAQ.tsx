import { Accordion } from "@/components/ui/accordion";

export function FAQ() {
  const items = [
    { id: "q1", question: "Χρειάζεται ραντεβού;", answer: "Ναι, συνιστούμε ραντεβού για την καλύτερη εξυπηρέτηση." },
    { id: "q2", question: "Δέχεστε κάρτες;", answer: "Ναι, δεχόμαστε μετρητά και κάρτες." },
    { id: "q3", question: "Πόσο διαρκεί μια συνεδρία;", answer: "Συνήθως 45–60 λεπτά ανάλογα με την υπηρεσία." },
  ];
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Συχνές ερωτήσεις</h2>
      <Accordion items={items} />
    </section>
  );
}

