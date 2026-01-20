import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyTrust from "@/components/WhyTrust";
import AgeGroups from "@/components/AgeGroups";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingContactBubble from "@/components/FloatingContactBubble";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Floating Contact Bubble */}
      <FloatingContactBubble />

      {/* Sticky Header */}
      <Header />

      {/* Hero Section - Full width with gradient */}
      <Hero />

      {/* Services Section - What I Offer */}
      <Services />

      {/* Why Parents Trust Me */}
      <WhyTrust />

      {/* Age Groups Served */}
      <AgeGroups />

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Booking/Contact Form */}
      <BookingForm />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </main>
  );
}
