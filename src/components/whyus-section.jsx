"use client";

import { Shield, Award, Clock, Users, Sparkles, ThumbsUp } from "lucide-react";

const whyUsItems = [
  {
    icon: Shield,
    title: "Hygienis & Steril",
    description: "Alat selalu disterilkan dan aman untuk setiap pelanggan.",
    bgColor: "bg-purple-100",
  },
  {
    icon: Award,
    title: "Berpengalaman",
    description: "Sudah melayani ratusan pelanggan dengan hasil memuaskan.",
    bgColor: "bg-green-100",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Pelayanan cepat tanpa mengurangi kualitas.",
    bgColor: "bg-orange-100",
  },
  {
    icon: Users,
    title: "Pelayanan Ramah",
    description: "Nyaman, santai, dan bikin betah selama treatment.",
    bgColor: "bg-yellow-100",
  },
  {
    icon: Sparkles,
    title: "Desain Kekinian",
    description: "Selalu update tren nail art terbaru.",
    bgColor: "bg-blue-100",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nail art"
              className="rounded-xl shadow-2xl w-full max-w-md"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Kenapa Harus Pilih Kami?
            </h2>

            <p className="text-gray-500 mb-8">
              Kami nggak cuma bikin kuku cantik, tapi juga kasih pengalaman yang
              nyaman dan bikin kamu pengen balik lagi ✨
            </p>

            <div className="space-y-6">
              {whyUsItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* ICON */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bgColor}`}
                  >
                    <item.icon className="w-5 h-5 text-gray-700" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
