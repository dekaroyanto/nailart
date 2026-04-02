// components/services-section.jsx
"use client";

import {
  Brush,
  Sparkles,
  Crown,
  Heart,
  Scissors,
  Gem,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Brush,
    name: "Nail Art Design",
    description: "Desain custom dilukis tangan",
    price: "dari Rp 75.000",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-100",
  },
  {
    icon: Sparkles,
    name: "Gel Manicure",
    description: "Cat gel tahan lama",
    price: "dari Rp 105.000",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    icon: Crown,
    name: "Luxury Extension",
    description: "Ekstensi akrilik/gel premium",
    price: "dari Rp 150.000",
    iconColor: "text-amber-500",
    bgColor: "bg-amber-100",
  },
  {
    icon: Heart,
    name: "French Manicure",
    description: "Klasik & variasi modern",
    price: "dari Rp 90.000",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-100",
  },
  {
    icon: Scissors,
    name: "Pedicure Spa",
    description: "Perawatan kaki lengkap + pijat",
    price: "dari Rp 135.000",
    iconColor: "text-teal-500",
    bgColor: "bg-teal-100",
  },
  {
    icon: Gem,
    name: "3D Embellishments",
    description: "Batu, mutiara & aksesoris",
    price: "dari Rp 120.000",
    iconColor: "text-fuchsia-500",
    bgColor: "bg-fuchsia-100",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-pink-500 font-semibold text-sm uppercase tracking-wide">
            Layanan Kami
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Yang Kami Tawarkan
          </h2>
          <p className="text-gray-500">
            Temukan berbagai layanan nail art profesional yang kami sediakan
            untukmu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-500 mb-3">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-pink-500">
                  {service.price}
                </span>
                <span className="text-pink-400 group-hover:text-pink-600 flex items-center gap-1 text-sm font-medium cursor-pointer">
                  Booking
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
