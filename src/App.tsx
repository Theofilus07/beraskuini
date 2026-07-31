import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Pricelist from "./components/Pricelist";
import ServiceArea from "./components/ServiceArea";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Pricelist />
        <Features />
        <ServiceArea />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
