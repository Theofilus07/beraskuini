import { motion } from "motion/react";

const galleryImages = [
  {
    url: "https://picsum.photos/seed/rice1/800/600",
    title: "Beras Premium",
    desc: "Kualitas terbaik dari petani pilihan"
  },
  {
    url: "https://picsum.photos/seed/rice2/800/600",
    title: "Proses Higienis",
    desc: "Diproses dengan teknologi modern"
  },
  {
    url: "https://picsum.photos/seed/rice3/800/600",
    title: "Kemasan Rapi",
    desc: "Menjaga kesegaran beras hingga ke tangan Anda"
  },
  {
    url: "https://picsum.photos/seed/rice4/800/600",
    title: "Bulir Utuh",
    desc: "Beras bersih, putih, dan pulen"
  },
  {
    url: "https://picsum.photos/seed/rice5/800/600",
    title: "Panen Segar",
    desc: "Langsung dari sawah terbaik"
  },
  {
    url: "https://picsum.photos/seed/rice6/800/600",
    title: "Siap Saji",
    desc: "Nasi lezat untuk keluarga tercinta"
  }
];

export default function ProductGallery() {
  return (
    <section id="galeri" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-primary mb-4"
          >
            Galeri Produk Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-primary/60 max-w-2xl mx-auto"
          >
            Lihat lebih dekat kualitas beras premium Beraskuini yang kami hadirkan untuk meja makan Anda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
