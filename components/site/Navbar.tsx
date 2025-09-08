"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";

const links = [
  { href: "/", label: "Αρχική" },
  { href: "/about", label: "Σχετικά" },
  { href: "/services", label: "Υπηρεσίες" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Επικοινωνία" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight text-slate-900 hover:text-sky-600 transition-colors">
          {business.brandName}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-slate-700 hover:text-slate-900">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {business.contact?.phone && (
            <a href={`tel:${business.contact.phone}`} className="hidden text-sm md:flex items-center gap-1 text-slate-700 hover:text-slate-900">
              <Phone className="h-4 w-4" /> {business.contact.phone}
            </a>
          )}
          <Button className="md:hidden" variant="outline" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetHeader>Μενού</SheetHeader>
        <SheetContent>
          <div className="flex flex-col gap-2 mt-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 hover:text-slate-900 font-medium">
                {l.label}
              </Link>
            ))}
            {business.contact?.phone && (
              <a href={`tel:${business.contact.phone}`} className="px-3 py-3 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 hover:text-slate-900 font-medium flex items-center gap-2">
                <Phone className="h-4 w-4" /> {business.contact.phone}
              </a>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

