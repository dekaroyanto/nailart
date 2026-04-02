// components/testimonials-section.jsx
"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Wijaya",
    role: "Klien Tetap",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    text: "Sangat suka dengan hasil kuku saya setiap kali ke sini! Senimannya sangat berbakat dan desainnya selalu sempurna. Studio nail art terbaik di kota!",
    rating: 5,
  },
  {
    name: "Emily Tan",
    role: "Klien Baru",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    text: "Saya sangat terkesan dengan kualitas dan kreativitasnya. Mereka mengambil inspirasi saya dan membuatnya lebih baik dari yang saya bayangkan!",
    rating: 5,
  },
  {
    name: "Jessica Lau",
    role: "Klien Pernikahan",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    text: "Mereka membuat kuku pernikahan saya dan hasilnya sempurna! Profesional, bersih, dan desainnya tahan berminggu-minggu.",
    rating: 5,
  },
];

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
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
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
