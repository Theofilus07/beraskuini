import { getWhatsAppLink } from "../utils/whatsapp";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1920&auto=format&fit=crop" 
          alt="Beras Berkualitas" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-primary/80 mix-blend-multiply"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
          SUPPLY RESTORAN & RUMAH TANGGA
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Beras Berkualitas,<br className="hidden md:block" /> Antar Langsung ke Rumah Anda
        </h1>
        <p className="text-lg md:text-xl text-brand-accent/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Pesan beras pilihan terbaik di Makassar dengan mudah. Kami melayani pembelian eceran dan partai besar untuk kebutuhan bisnis Anda.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <ShoppingBag className="w-5 h-5" />
            Pesan Sekarang via WA
          </a>
          <a 
            href="#produk"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/10 transition-all"
          >
            Lihat Harga
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
