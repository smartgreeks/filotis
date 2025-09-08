import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const images = Array.from({ length: 6 }, (_, i) => `/placeholder/gallery-${(i % 3) + 1}.svg`);

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl font-semibold mb-6">Gallery</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Gallery item ${i + 1}`} className="w-full rounded-xl border" />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

