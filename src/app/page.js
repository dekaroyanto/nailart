// app/page.jsx
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { GallerySection } from "@/components/gallery-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PromoSection } from "@/components/promo-section";
import { BookingSection } from "@/components/booking-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <div id="gallery">
        <GallerySection />
      </div>
      <TestimonialsSection />
      <PromoSection />
      <div id="booking">
        <BookingSection />
      </div>
      <Footer />
    </main>
  );
}
