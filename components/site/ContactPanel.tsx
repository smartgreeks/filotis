import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";

export function ContactPanel() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Επικοινωνία</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-3">
          {business.contact?.phone && (
            <p className="flex items-center gap-2 text-slate-700"><Phone className="h-4 w-4" /> <a className="hover:underline" href={`tel:${business.contact.phone}`}>{business.contact.phone}</a></p>
          )}
          {business.contact?.email && (
            <p className="flex items-center gap-2 text-slate-700"><Mail className="h-4 w-4" /> <a className="hover:underline" href={`mailto:${business.contact.email}`}>{business.contact.email}</a></p>
          )}
          {business.primaryLocation?.address && (
            <p className="flex items-center gap-2 text-slate-700"><MapPin className="h-4 w-4" /> {business.primaryLocation.address}</p>
          )}
          {business.contact?.hours && (
            <div className="mt-4 text-sm text-slate-600">
              <p><span className="font-medium">Δευτ–Παρ:</span> {business.contact.hours.mon_fri}</p>
              {business.contact.hours.sat && <p><span className="font-medium">Σάβ:</span> {business.contact.hours.sat}</p>}
              {business.contact.hours.sun && <p><span className="font-medium">Κυρ:</span> {business.contact.hours.sun}</p>}
            </div>
          )}
        </div>
        <form action={`mailto:${business.contact?.email ?? "info@example.com"}`} method="post" className="space-y-3">
          <Input name="name" placeholder="Ονοματεπώνυμο" required />
          <Input type="email" name="email" placeholder="Email" required />
          <Input name="phone" placeholder="Τηλέφωνο (προαιρετικό)" />
          <textarea name="message" placeholder="Μήνυμα" className="h-32 w-full rounded-md border border-slate-300 p-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"></textarea>
          <Button type="submit">Αποστολή</Button>
          <p className="text-xs text-slate-500">Σημ.: Συνδέστε εδώ πραγματική αποστολή email (API) για παραγωγή.</p>
        </form>
      </div>
    </section>
  );
}

