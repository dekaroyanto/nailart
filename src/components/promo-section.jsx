// components/promo-section.jsx
"use client";

import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";

export function PromoSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Gift className="w-4 h-4" />
            <span className="text-sm font-medium">Promo Spesial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Diskon 20% untuk Kunjungan Pertama!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Booking kunjungan pertamamu dan nikmati diskon 20% untuk layanan
            apapun. Penawaran terbatas!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-semibold shadow-lg">
              Klaim Promo
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg"
            >
              Info Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
