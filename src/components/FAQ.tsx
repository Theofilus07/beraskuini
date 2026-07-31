import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../utils/whatsapp";

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "Apakah Beraskuini melayani pembelian eceran dan grosir?",
    answer: "Ya. Kami melayani pembelian eceran maupun grosir untuk rumah tangga, toko, restoran, hotel, katering, dan pelaku usaha."
  },
  {
    question: "Jenis beras apa saja yang tersedia?",
    answer: "Kami menyediakan berbagai pilihan beras berkualitas, mulai dari beras premium hingga beras medium. Hubungi kami untuk informasi stok terbaru."
  },
  {
    question: "Apakah tersedia layanan pengantaran?",
    answer: "Ya. Kami melayani pengantaran di Makassar dan wilayah yang tercakup dalam area layanan."
  },
  {
    question: "Bagaimana cara memesan?",
    answer: "Klik tombol WhatsApp di website, kirimkan kebutuhan Anda, dan kami akan mengonfirmasi harga, stok, serta jadwal pengiriman."
  },
  {
    question: "Metode pembayaran apa yang diterima?",
    answer: "Kami menerima pembayaran tunai maupun transfer bank."
  },
  {
    question: "Apakah stok selalu tersedia?",
    answer: "Kami berusaha menjaga ketersediaan stok setiap hari. Untuk pembelian dalam jumlah besar, silakan hubungi kami terlebih dahulu."
  },
  {
    question: "Apakah melayani restoran dan usaha?",
    answer: "Ya. Kami melayani restoran, hotel, katering, toko sembako, dan berbagai jenis usaha lainnya."
  },
  {
    question: "Bagaimana menjadi pelanggan tetap?",
    answer: "Hubungi kami melalui WhatsApp untuk mendiskusikan kebutuhan rutin dan penawaran harga sesuai volume pembelian."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-brand-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block py-1 px-3.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold tracking-wider uppercase mb-3">
            Informasi & Bantuan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-brand-primary/70 text-base md:text-lg max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan umum seputar pemesanan, layanan pengantaran, dan stok beras berkualitas di Beraskuini Makassar.
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-brand-bg rounded-2xl border border-brand-primary/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-semibold text-brand-primary text-base md:text-lg hover:bg-brand-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-primary/60 shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`} 
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 md:px-6 md:pb-6 text-brand-primary/80 text-sm md:text-base leading-relaxed border-t border-brand-primary/5 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-brand-bg/80 rounded-2xl p-6 border border-brand-primary/10">
          <p className="text-brand-primary font-medium mb-3">
            Punya pertanyaan lain yang belum terjawab?
          </p>
          <a
            href={getWhatsAppLink("Halo Admin Beraskuini, saya ingin bertanya tentang...")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-primary/90 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Tanyakan via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
