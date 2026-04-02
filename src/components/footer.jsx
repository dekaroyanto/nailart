// components/footer.jsx
export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
              NailArt Studio
            </h3>
            <p className="text-sm">
              Transforming nails into masterpieces with creativity and precision
              since 2019.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Beauty Street</li>
              <li>New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@nailartstudio.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 10am - 8pm</li>
              <li>Saturday: 10am - 6pm</li>
              <li>Sunday: 11am - 5pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2024 NailArt Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
