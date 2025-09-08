import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users } from "lucide-react";
import { business, t } from "@/lib/business";
import Link from "next/link";

export function ServicesGrid() {
  const services = business.services || [];
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-4">
            Οι Υπηρεσίες Μας
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Εξατομικευμένες Θεραπείες
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ανακαλύψτε τις ολιστικές θεραπείες μας που προσαρμόζονται στις ανάγκες σας
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Card key={i} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white overflow-hidden">
              <div className="relative">
                <img
                  src="/placeholder/service.svg"
                  alt={typeof s.name === "string" ? s.name : t(s.name, "el")}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    4.9
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {typeof s.name === "string" ? s.name : t(s.name, "el")}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  {typeof s.desc === "string" ? s.desc : t(s.desc, "el")}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      60 min
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      1-1
                    </div>
                  </div>
                  {s.priceFrom && (
                    <div className="text-2xl font-bold text-sky-600">
                      {s.priceFrom}
                    </div>
                  )}
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3">
                    Κλείσε Ραντεβού
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="outline" size="lg" className="border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white">
              Δες Όλες τις Υπηρεσίες
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

