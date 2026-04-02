"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Amelia Febrianti",
    role: "Klien Tetap",
    text: "Udah beberapa kali ke sini dan selalu puas! Hasil kukunya rapi banget, terus orangnya juga enak diajak ngobrol. Jadi betah 😍",
    rating: 5,
  },
  {
    name: "Rina Oktaviani",
    role: "Klien Baru",
    text: "Pertama kali coba di sini dan langsung suka! Aku cuma kasih referensi dikit, tapi hasilnya malah lebih bagus dari yang aku bayangin ✨",
    rating: 5,
  },
  {
    name: "Dewi Anggraini",
    role: "Klien Pernikahan",
    text: "Aku bikin kuku buat hari nikahan di sini dan hasilnya bagus banget! Tahan lama dan detailnya bener-bener diperhatiin 💕",
    rating: 5,
  },
];

// fungsi ambil inisial
const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-pink-500 font-semibold text-sm uppercase tracking-wide">
            Testimoni
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-gray-500">
            Lihat langsung pengalaman seru dari para klien yang sudah merasakan
            layanan kami 💖
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-pink-200" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>

              {/* User */}
              <div className="flex items-center gap-3">
                {/* Avatar Inisial */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center text-white font-semibold">
                  {getInitials(testimonial.name)}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 rounded-full px-6 py-3">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="font-semibold text-gray-800">4.9 dari 5</span>
            <span className="text-gray-500">berdasarkan 500+ ulasan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
