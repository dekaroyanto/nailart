// components/gallery-section.jsx
"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1735236007245-9dc6e28bbe56?q=80&w=1046&auto=format&fit=crop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1572814601679-4ef8f7b5ebd1?q=80&w=705&auto=format&fit=crop",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1648844421727-cde6c4246b13?q=80&w=680&auto=format&fit=crop",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?q=80&w=764&auto=format&fit=crop",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=500&h=500&fit=crop",
  },
];

export function GallerySection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-100 rounded-full px-4 py-1 mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-600">
              Karya Kami
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Karya Terbaru
          </h2>
          <p className="text-gray-500">
            Lihat hasil karya nail art terbaru yang disukai oleh klien kami
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-square relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
