// components/footer.jsx
"use client";

export function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
              NailArt Studio
            </h3>
            <p className="text-sm">
              Mengubah kuku menjadi mahakarya dengan kreativitas dan presisi.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="hover:text-pink-400 transition cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-pink-400 transition cursor-pointer"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-pink-400 transition cursor-pointer"
                >
                  Galeri
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="hover:text-pink-400 transition cursor-pointer"
                >
                  Booking
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Alamat</h4>
            <ul className="space-y-2 text-sm">
              <li>Permata Harjamukti</li>
              <li>Kota Cirebon, Jawa Barat</li>
              <li>0882006487100</li>
              <li>dekaroy05@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Jam Operasional</h4>
            <ul className="space-y-2 text-sm">
              <li>Senin-Jumat: 10.00 - 20.00</li>
              <li>Sabtu-Minggu: 10.00 - 18.00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2026 NailArt Studio</p>
        </div>
      </div>
    </footer>
  );
}
