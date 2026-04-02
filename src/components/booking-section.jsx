// components/booking-section.jsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const getServiceName = (serviceValue) => {
    const services = {
      basic: "Basic Manicure - Rp 75.000",
      gel: "Gel Deluxe - Rp 105.000",
      luxury: "Ultimate Spa - Rp 150.000",
      pedicure: "Pedicure Spa - Rp 135.000",
    };
    return services[serviceValue] || serviceValue;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format pesan WhatsApp
    const message = `*📋 BOOKING NAIL ART STUDIO*%0A%0A
*Data Diri:*%0A
👤 Nama: ${formData.name}%0A
📧 Email: ${formData.email}%0A
📞 Telepon: ${formData.phone}%0A%0A

*Detail Booking:*%0A
💅 Layanan: ${getServiceName(formData.service)}%0A
📅 Tanggal: ${formData.date}%0A
⏰ Waktu: ${formData.time}%0A%0A

*📝 Catatan Tambahan:*%0A
${formData.notes || "Tidak ada catatan khusus"}%0A%0A

_*Terima kasih, kami akan segera mengkonfirmasi booking Anda.*_`;

    // Nomor WhatsApp (tanpa tanda +, 0, atau spasi)
    const phoneNumber = "62882006487100";

    // Buat URL WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-pink-500 font-semibold text-sm uppercase tracking-wide">
            Booking
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Reservasi Sekarang
          </h2>
          <p className="text-gray-500">
            Isi formulir di bawah ini dan kami akan menghubungi Anda dalam 24
            jam
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Kunjungi Kami
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-pink-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">Alamat</p>
                      <p className="text-sm text-gray-500">
                        Permata Harjamukti Kota Cirebon Jawa Barat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-pink-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">Telepon</p>
                      <p className="text-sm text-gray-500">0882006487100</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-pink-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-sm text-gray-500">
                        dekaroy05@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-pink-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800">
                        Jam Operasional
                      </p>
                      <p className="text-sm text-gray-500">
                        Senin-Jumat: 10.00 - 20.00
                      </p>
                      <p className="text-sm text-gray-500">
                        Sabtu-Minggu: 10.00 - 18.00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-pink-200">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-pink-300 ring-2 ring-white" />
                      <div className="w-8 h-8 rounded-full bg-purple-300 ring-2 ring-white" />
                      <div className="w-8 h-8 rounded-full bg-orange-300 ring-2 ring-white" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Dipercaya 500+ klien
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                      placeholder="email@contoh.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                      placeholder="0882 0064 87100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pilih Layanan *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                    >
                      <option value="">Pilih layanan</option>
                      <option value="basic">Basic Manicure - Rp 75.000</option>
                      <option value="gel">Gel Deluxe - Rp 105.000</option>
                      <option value="luxury">Ultimate Spa - Rp 150.000</option>
                      <option value="pedicure">
                        Pedicure Spa - Rp 135.000
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tanggal Pilihan *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Waktu Pilihan *
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Permintaan Khusus
                    </label>
                    <textarea
                      rows="3"
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                      placeholder="Desain yang diinginkan atau preferensi khusus?"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white py-6 rounded-xl text-lg font-semibold"
                >
                  Kirim Booking via WhatsApp
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  Klik tombol di atas untuk mengirim booking via WhatsApp
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
