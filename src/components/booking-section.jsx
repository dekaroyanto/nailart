"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Send } from "lucide-react";

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
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

    const message = `*📋 BOOKING NAIL ART STUDIO*%0A%0A
*Data Diri:*%0A
👤 Nama: ${formData.name}%0A
📞 Telepon: ${formData.phone}%0A%0A

*Detail Booking:*%0A
💅 Layanan: ${getServiceName(formData.service)}%0A
📅 Tanggal: ${formData.date}%0A
⏰ Waktu: ${formData.time}%0A%0A

*📝 Catatan Tambahan:*%0A
${formData.notes || "Tidak ada catatan khusus"}%0A%0A

_*Terima kasih, kami akan segera mengkonfirmasi booking Anda.*_`;

    const phoneNumber = "62882006487100";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  const inputClass =
    "w-full min-w-0 h-[48px] px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition box-border appearance-none";

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
            Isi formulir di bawah ini untuk melakukan booking
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
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nama */}
                  <div className="w-full">
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
                      className={inputClass}
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  {/* Telepon */}
                  <div className="w-full">
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
                      className={inputClass}
                      placeholder="08123456789"
                    />
                  </div>

                  {/* Layanan */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pilih Layanan *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className={inputClass}
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

                  {/* Tanggal */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tanggal Pilihan *
                    </label>
                    <div className="w-full">
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className={inputClass + " pr-3"}
                        style={{ WebkitAppearance: "none" }}
                      />
                    </div>
                  </div>

                  {/* Waktu */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Waktu Pilihan *
                    </label>
                    <div className="w-full">
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className={inputClass + " pr-3"}
                        style={{ WebkitAppearance: "none" }}
                      />
                    </div>
                  </div>

                  {/* Catatan */}
                  <div className="md:col-span-2 w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Permintaan Khusus
                    </label>
                    <textarea
                      rows="3"
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full min-w-0 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition box-border"
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
