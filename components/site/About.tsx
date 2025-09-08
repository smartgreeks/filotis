import { business } from "@/lib/business";
import { CheckCircle, Heart, Users, Award } from "lucide-react";

export function About() {
  const features = [
    { icon: Heart, text: "Εξατομικευμένες Θεραπείες" },
    { icon: Users, text: "Προσωπική Φροντίδα" },
    { icon: Award, text: "Πιστοποιημένοι Θεραπευτές" },
    { icon: CheckCircle, text: "Φυσικές Μέθοδοι" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Σχετικά με το {business.brandName}
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Είμαστε ένα ολιστικό κέντρο υγείας με έμφαση στις εξατομικευμένες θεραπείες
                  ευεξίας και αντιγήρανσης. Εστιάζουμε σε ασφαλείς, φυσικές μεθόδους που
                  σέβονται το σώμα και τον ρυθμό σας.
                </p>
                <p>
                  Εξυπηρετούμε τις περιοχές {business.primaryLocation?.areas?.join(", ")}
                  {business.primaryLocation?.city ? `, ${business.primaryLocation.city}` : ""}.
                  Η ομάδα μας αποτελείται από έμπειρους θεραπευτές που είναι αφοσιωμένοι
                  στην υγεία και την ευεξία σας.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-slate-50">
                  <feature.icon className="h-6 w-6 text-sky-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-3xl blur-lg opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <img
                  src="/placeholder/about.svg"
                  alt="Φιλότης Health Center - Ολιστική υγεία και ευεξία"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-100 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

