// components/hero-section.jsx
"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-orange-100">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
      <div className="absolute top-40 right-40 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12 py-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-gray-700">
                Studio Nail Art Profesional
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
                Kuku Cantik
              </span>
              <br />
              <span className="text-gray-800">Untuk Dirimu</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Ubah kukumu menjadi karya seni yang menakjubkan bersama seniman
              berpengalaman kami. Produk premium, lingkungan higienis, dan
              desain kreatif.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("booking")}
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Booking Sekarang
                <ArrowRight className="ml-2 w-5 h-5 text-white" />
              </Button>
              <Button
                onClick={() => scrollToSection("gallery")}
                variant="outline"
                className="px-8 py-6 rounded-full text-lg border-2 border-pink-300 text-pink-600 hover:bg-pink-50"
              >
                Lihat Galeri
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start mt-12">
              <div>
                <div className="text-3xl font-bold text-pink-600">500+</div>
                <div className="text-sm text-gray-500">Klien Bahagia</div>
              </div>
              <div className="w-px h-12 bg-pink-200" />
              <div>
                <div className="text-3xl font-bold text-pink-600">1000+</div>
                <div className="text-sm text-gray-500">Desain Kuku</div>
              </div>
              <div className="w-px h-12 bg-pink-200" />
              <div>
                <div className="text-3xl font-bold text-pink-600">4.9</div>
                <div className="text-sm text-gray-500">Rating Klien</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=700&fit=crop"
                alt="Nail art yang indah"
                className="w-full h-auto object-cover rounded-[3rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-[3rem]" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 ring-2 ring-white" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 ring-2 ring-white" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 ring-2 ring-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="font-semibold">4.9</span>
                  </div>
                  <div className="text-xs text-gray-500">500+ ulasan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
