import { Wheat, MapPin, Phone, Instagram, Facebook } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-accent py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          <div>
            <div className="flex items-center gap-2 h-12 mb-6">
              <img src="/logo.png" alt="Beraskuini Logo" className="h-12 w-auto object-contain" />
              <span className="font-bold text-2xl tracking-tight text-white">Beraskuini</span>
            </div>
            <p className="text-brand-accent/70 max-w-xs leading-relaxed">
              Platform pemesanan beras berkualitas di Makassar dengan layanan antar langsung.
            </p>
          </div>

          <div>
            <div className="h-12 flex items-center mb-6">
              <h3 className="text-white font-bold text-lg">Hubungi Kami</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-accent/80">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Jl.Sungai Poso No.10 RT.002/RW.002<br/>Kel.Lajangiru Kec.Ujungpandang, Makassar 90114</span>
              </li>
              <li className="flex items-center gap-3 text-brand-accent/80">
                <Phone className="w-5 h-5 shrink-0" />
                <span>+62 851-1770-4082</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="h-12 flex items-center mb-6">
              <h3 className="text-white font-bold text-lg">Ikuti Kami</h3>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/beraskuini?igsh=ZzY4NWVnczI3cnN3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/1NJPhfA5da/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@beraskuini_makassar?_r=1&_t=ZS-94F4FYLJ5BU" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-brand-accent/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Beraskuini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
