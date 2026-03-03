import { products } from "../data/products";
import { getWhatsAppLink } from "../utils/whatsapp";
import { MessageCircle } from "lucide-react";
import { getGoogleDriveDirectLink } from "../utils/googleDrive";

export default function Pricelist() {
  return (
    <section id="produk" className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Daftar Harga Beras</h2>
          <p className="text-brand-primary/70 max-w-2xl mx-auto text-lg mb-6">
            Pilihan beras berkualitas untuk kebutuhan Anda. Harga tertera adalah untuk kemasan 25kg.
          </p>
          <div className="inline-block bg-white px-6 py-3 rounded-xl border border-brand-primary/10 shadow-sm">
            <p className="text-sm font-medium text-brand-primary">
              💡 Butuh ukuran 5kg atau 10kg? Silakan tanyakan via WhatsApp!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-brand-primary/5 group">
              <div className="relative h-56 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                <img 
                  src={getGoogleDriveDirectLink(product.image)} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {product.is_featured && (
                  <div className="absolute top-3 right-3 bg-brand-primary text-brand-accent text-xs font-bold px-3 py-1 rounded-full">
                    Terlaris
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-primary mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-2xl font-bold text-brand-primary">
                    Rp {product.price_25kg.toLocaleString('id-ID')}
                  </span>
                  <span className="text-sm text-brand-primary/60 mb-1">/ 25kg</span>
                </div>
                
                <a 
                  href={getWhatsAppLink(`Halo Admin Beraskuini, saya ingin pesan ${product.name} (25kg).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white py-3 rounded-xl font-medium hover:bg-brand-primary/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pesan via WA
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
