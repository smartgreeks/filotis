import { business } from "@/lib/business";

export function MapEmbed() {
  const { lat, lng } = business.primaryLocation.geo || { lat: 37.9849, lng: 23.7507 };
  const q = encodeURIComponent(business.primaryLocation.address || "Athens, Greece");
  const src = `https://www.google.com/maps?q=${q}&hl=el&ll=${lat},${lng}&z=15&output=embed`;
  return (
    <div className="container pb-12">
      <div className="aspect-video w-full overflow-hidden rounded-xl border">
        <iframe title="Χάρτης" src={src} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

