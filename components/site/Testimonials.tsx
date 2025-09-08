import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const items = [
    {
      name: "Μαρία Κ.",
      text: "Υπέροχη εμπειρία, ένιωσα αμέσως ανακούφιση! Η θεραπεία ήταν εξατομικευμένη και το αποτέλεσμα ξεπέρασε τις προσδοκίες μου.",
      rating: 5,
      service: "Θεραπευτικό Μασάζ"
    },
    {
      name: "Γιάννης Μ.",
      text: "Επαγγελματισμός και φροντίδα σε υψηλό επίπεδο. Το συστήνω ανεπιφύλακτα σε όλους όσους αναζητούν ολιστική υγεία.",
      rating: 5,
      service: "Αντιγήρανση Προσώπου"
    },
    {
      name: "Ελένη Π.",
      text: "Χαλαρωτικό περιβάλλον και αποτελεσματικές θεραπείες. Ένιωσα πραγματική ανανέωση και ευεξία.",
      rating: 5,
      service: "Λεμφική Αποσυμφόρηση"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Τι Λένε οι Πελάτες Μας
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Διαβάστε τις εμπειρίες πελατών που εμπιστεύτηκαν την ολιστική φροντίδα μας
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((it, idx) => (
            <div key={idx} className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-4 left-8">
                <div className="bg-sky-600 rounded-full p-3">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="pt-4">
                <div className="flex mb-4">
                  {[...Array(it.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-slate-700 text-lg leading-relaxed mb-6">
                  "{it.text}"
                </blockquote>

                <div className="border-t pt-4">
                  <div className="font-semibold text-slate-900">{it.name}</div>
                  <div className="text-sm text-sky-600 font-medium">{it.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-sky-50 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
              ))}
            </div>
            <span className="text-slate-700 font-semibold">4.9/5 από 150+ αξιολογήσεις</span>
          </div>
        </div>
      </div>
    </section>
  );
}
