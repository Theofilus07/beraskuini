import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Produk", href: "#produk" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Area Layanan", href: "#layanan" },
    { name: "FAQ", href: "#faq" },
    { name: "Testimoni", href: "#testimoni" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-bg/90 backdrop-blur-md border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <img src="/logo.png" alt="Beraskuini Logo" className="h-10 w-auto object-contain" />
            <span className="font-bold text-xl tracking-tight text-brand-primary">Beraskuini</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: index * 0.05 + 0.1 } }}
                whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.15 } }}
                className="text-brand-primary/80 hover:text-brand-primary text-sm font-semibold transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-primary hover:bg-brand-primary/10 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-bg border-b border-brand-primary/10 px-4 pt-2 pb-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 text-brand-primary font-medium hover:bg-brand-primary/10 rounded-lg transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
