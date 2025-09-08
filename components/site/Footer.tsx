import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, ExternalLink } from "lucide-react";
import { business } from "@/lib/business";

export function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-white">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-sky-400">{business.brandName}</h3>
            <p className="text-slate-300 leading-relaxed">
              Ολιστική υγεία και ευεξία με εξατομικευμένες θεραπείες για το σώμα και το πνεύμα.
            </p>
                        <div className="flex gap-4">
              {business.social?.instagram && (
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              )}
              {business.social?.facebook && (
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              )}
              {business.social?.googleBusinessUrl && (
                <a
                  href={business.social.googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                  aria-label="Google Business"
                >
                  <ExternalLink className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Σύνδεσμοι</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-slate-300 hover:text-sky-400 transition-colors">Αρχική</Link>
              <Link href="/about" className="block text-slate-300 hover:text-sky-400 transition-colors">Σχετικά</Link>
              <Link href="/services" className="block text-slate-300 hover:text-sky-400 transition-colors">Υπηρεσίες</Link>
              <Link href="/gallery" className="block text-slate-300 hover:text-sky-400 transition-colors">Gallery</Link>
              <Link href="/contact" className="block text-slate-300 hover:text-sky-400 transition-colors">Επικοινωνία</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Υπηρεσίες</h4>
            <div className="space-y-2">
              {business.services?.slice(0, 3).map((service, idx) => (
                <div key={idx} className="text-slate-300">
                  {typeof service.name === "string" ? service.name : service.name?.el}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Επικοινωνία</h4>
            <div className="space-y-3">
              {business.contact?.phone && (
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="h-5 w-5 text-sky-400 flex-shrink-0" />
                  <a href={`tel:${business.contact.phone}`} className="hover:text-sky-400 transition-colors">
                    {business.contact.phone}
                  </a>
                </div>
              )}
              {business.contact?.email && (
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="h-5 w-5 text-sky-400 flex-shrink-0" />
                  <a href={`mailto:${business.contact.email}`} className="hover:text-sky-400 transition-colors">
                    {business.contact.email}
                  </a>
                </div>
              )}
              {business.primaryLocation?.address && (
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>{business.primaryLocation.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} {business.brandName}. Όλα τα δικαιώματα διατηρούνται.</p>
        </div>
      </div>
    </footer>
  );
}

