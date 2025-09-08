import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Star } from "lucide-react";
import { business, t } from "@/lib/business";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230EA5E9' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
                <Star className="h-4 w-4" />
                Ολιστική Υγεία & Ευεξία
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                {business.brandName}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                {t(business.tagline, "el")}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-600">100+</div>
                <div className="text-sm text-slate-600">Ευχαριστημένοι Πελάτες</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">5+</div>
                <div className="text-sm text-slate-600">Χρόνια Εμπειρίας</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">24/7</div>
                <div className="text-sm text-slate-600">Υποστήριξη</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="h-5 w-5 mr-2" />
                  Κλείσε Ραντεβού
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-sky-600 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  <Phone className="h-5 w-5 mr-2" />
                  Επικοινωνία
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="h-5 w-5 text-sky-600" />
                <span className="font-medium">{business.contact?.phone}</span>
              </div>
              <div className="text-slate-400">•</div>
              <div className="text-slate-600">
                {business.primaryLocation?.address}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-3xl blur-lg opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <Image
                  src="/placeholder/hero.svg"
                  alt="Φιλότης Health Center - Ολιστική υγεία και ευεξία"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 right-8 bg-white rounded-full p-4 shadow-lg">
              <Star className="h-6 w-6 text-amber-400 fill-current" />
            </div>
            <div className="absolute bottom-8 left-8 bg-sky-600 text-white rounded-full p-4 shadow-lg">
              <Phone className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

