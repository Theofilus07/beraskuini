import { Truck, ThumbsUp, BadgePercent, Store } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Antar Langsung",
    description: "Pesan dari rumah, beras langsung kami antar ke depan pintu Anda dengan aman."
  },
  {
    icon: BadgePercent,
    title: "Harga Kompetitif",
    description: "Dapatkan harga terbaik untuk kualitas beras premium, cocok untuk rumah tangga maupun usaha."
  },
  {
    icon: ThumbsUp,
    title: "Garansi Kualitas",
    description: "Beras pilihan yang telah melewati proses seleksi ketat untuk menjamin kepuasan Anda."
  },
  {
    icon: Store,
    title: "Supply Restoran & Cafe",
    description: "Kami siap menjadi mitra terpercaya untuk menyuplai kebutuhan beras bisnis kuliner Anda."
  }
];

export default function Features() {
  return (
    <section id="keunggulan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Mengapa Memilih Beraskuini?</h2>
          <p className="text-brand-primary/70 max-w-2xl mx-auto text-lg">
            Kami berkomitmen memberikan pelayanan dan kualitas beras terbaik untuk warga Makassar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-brand-bg rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-brand-primary/5">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">{feature.title}</h3>
                <p className="text-brand-primary/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
