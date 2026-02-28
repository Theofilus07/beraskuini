import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ibu Rina",
    role: "Ibu Rumah Tangga, Panakkukang",
    content: "Sangat praktis! Pesan pagi, siang sudah sampai. Berasnya juga pulen dan wangi. Anak-anak suka sekali.",
    rating: 5
  },
  {
    id: 2,
    name: "Pak Budi",
    role: "Pemilik Warung Makan, Tamalanrea",
    content: "Harga sangat bersaing untuk pembelian partai. Kualitas konsisten, pelanggan warung saya tidak pernah komplain.",
    rating: 5
  },
  {
    id: 3,
    name: "Siti",
    role: "Mahasiswi, Biringkanaya",
    content: "Bisa pesan ukuran 5kg via WA, sangat membantu untuk anak kos. Adminnya juga ramah dan fast respon.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Apa Kata Pelanggan Kami?</h2>
          <p className="text-brand-primary/70 max-w-2xl mx-auto text-lg">
            Kepercayaan Anda adalah prioritas kami. Bergabunglah dengan ratusan pelanggan puas lainnya di Makassar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-brand-bg rounded-2xl p-8 border border-brand-primary/5">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-brand-primary/80 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-brand-primary">{testimonial.name}</h4>
                <p className="text-sm text-brand-primary/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
