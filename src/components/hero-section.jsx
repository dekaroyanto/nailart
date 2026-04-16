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
    <section className="relative min-h-screen lg:h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-orange-100">
      {/* Decorative circles - hidden on mobile to save space */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000 hidden lg:block" />
      <div className="absolute top-40 right-40 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700 hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen lg:h-full gap-6 sm:gap-8 py-6 sm:py-8 lg:py-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left w-full">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-sm">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-pink-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                Studio Nail Art Profesional
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
                Kuku Cantik
              </span>
              <br />
              <span className="text-gray-800">Untuk Dirimu</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
              Ubah kukumu menjadi karya seni yang menakjubkan bersama seniman
              berpengalaman kami. Produk premium, lingkungan higienis, dan
              desain kreatif.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("booking")}
                className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-5 sm:px-6 py-4 sm:py-5 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
              >
                Booking Sekarang
                <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("gallery")}
                variant="outline"
                className="px-5 sm:px-6 py-4 sm:py-5 rounded-full text-sm sm:text-base border-2 border-pink-300 text-pink-600 hover:bg-pink-50"
              >
                Lihat Galeri
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-8 justify-center lg:justify-start mt-6 sm:mt-8">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-pink-600">
                  500+
                </div>
                <div className="text-[11px] sm:text-xs text-gray-500">
                  Klien Bahagia
                </div>
              </div>
              <div className="w-px h-8 sm:h-10 bg-pink-200" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-pink-600">
                  1000+
                </div>
                <div className="text-[11px] sm:text-xs text-gray-500">
                  Desain Kuku
                </div>
              </div>
              <div className="w-px h-8 sm:h-10 bg-pink-200" />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-pink-600">
                  4.9
                </div>
                <div className="text-[11px] sm:text-xs text-gray-500">
                  Rating Klien
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - now visible on all devices */}
          <div className="flex-1 relative w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none mt-6 sm:mt-8 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=600&fit=crop"
                alt="Nail art yang indah"
                className="w-full h-auto max-h-[250px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] object-cover rounded-2xl sm:rounded-[2rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-2xl sm:rounded-[2rem]" />
            </div>
            {/* Floating badge - adjusted for mobile */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white rounded-xl p-2 sm:p-3 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 ring-2 ring-white" />
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 ring-2 ring-white" />
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 ring-2 ring-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xs sm:text-sm">
                      ★★★★★
                    </span>
                    <span className="font-semibold text-xs sm:text-sm">
                      4.9
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500">
                    500+ ulasan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
