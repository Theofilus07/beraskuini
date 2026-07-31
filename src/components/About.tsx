import { Building2, Utensils, Store, Truck, ShieldCheck, Tag } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Building2,
      title: "Rumah Tangga & Usaha",
      desc: "Supplier beras terpercaya untuk rumah tangga hingga skala usaha besar."
    },
    {
      icon: Tag,
      title: "Harga Kompetitif",
      desc: "Penawaran harga terbaik untuk eceran maupun pembelian partai besar."
    },
    {
      icon: Truck,
      title: "Pengantaran Cepat",
      desc: "Layanan pengantaran langsung yang aman dan tepat waktu di area Makassar."
    },
    {
      icon: ShieldCheck,
      title: "Kualitas Terjamin",
      desc: "Menyediakan pilihan beras berkualitas dengan garansi pelayanan terbaik."
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-white border-t border-brand-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold tracking-wider uppercase mb-3">
            Distributor & Supplier Beras Makassar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
            Tentang Beraskuini
          </h2>
          <div className="bg-brand-bg rounded-2xl p-6 md:p-8 border border-brand-primary/10 shadow-sm text-left md:text-center">
            <p className="text-brand-primary/80 text-base md:text-lg leading-relaxed">
              <strong>Beraskuini</strong> adalah supplier dan distributor beras berkualitas di Makassar yang melayani kebutuhan rumah tangga, restoran, hotel, katering, toko sembako, dan pelaku usaha. Kami menyediakan berbagai pilihan beras berkualitas dengan harga yang kompetitif serta layanan pengantaran yang cepat dan terpercaya. Komitmen kami adalah menghadirkan produk berkualitas dengan pelayanan terbaik untuk setiap pelanggan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-brand-bg/60 rounded-xl p-6 border border-brand-primary/10 hover:border-brand-primary/20 transition-all hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-primary text-brand-accent flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-brand-primary text-lg mb-2">{item.title}</h3>
                <p className="text-brand-primary/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
