import { MapPin, Navigation, MessageCircle, Truck } from "lucide-react";
import { getWhatsAppLink } from "../utils/whatsapp";

export default function ServiceArea() {
  const serviceCards = [
    {
      icon: MapPin,
      title: "Wilayah Kota Makassar",
      badge: "Layanan Utama",
      desc: "Kami melayani pengiriman beras langsung ke seluruh wilayah Kota Makassar untuk kebutuhan rumah tangga, toko, restoran, hotel, dan katering.",
      highlight: "Pengantaran Cepat & Langsung"
    },
    {
      icon: Navigation,
      title: "Area Sekitar Makassar",
      badge: "Jangkauan Area",
      desc: "Pengiriman terjangkau untuk wilayah di sekitar Makassar seperti Gowa, Maros, dan sekitarnya dengan penyesuaian jadwal armada.",
      highlight: "Aksesibilitas Luas"
    },
    {
      icon: MessageCircle,
      title: "Luar Wilayah Makassar",
      badge: "Konfirmasi Khusus",
      desc: "Untuk wilayah di luar Makassar, silakan hubungi kami melalui WhatsApp untuk memastikan jangkauan pengiriman dan biaya pengantaran.",
      highlight: "Hubungi Admin WA",
      actionText: "Cek Pengiriman via WA",
      isAction: true
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold tracking-wider uppercase mb-3">
            Jangkauan Pengiriman
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Area Layanan
          </h2>
          <p className="text-brand-primary/80 text-lg leading-relaxed">
            Kami melayani pengiriman beras di wilayah Makassar serta area sekitarnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-brand-primary/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-bg text-brand-primary border border-brand-primary/10">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-primary mb-3">
                    {card.title}
                  </h3>

                  <p className="text-brand-primary/70 leading-relaxed text-sm mb-6">
                    {card.desc}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-brand-primary/10 flex items-center gap-2 text-xs font-semibold text-brand-primary/80">
                    <Truck className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>{card.highlight}</span>
                  </div>

                  {card.isAction && (
                    <a
                      href={getWhatsAppLink("Halo Admin Beraskuini, saya ingin menanyakan jangkauan pengiriman dan biaya pengantaran ke lokasi saya.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-xl font-semibold text-sm hover:bg-[#20bd5a] transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {card.actionText}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
