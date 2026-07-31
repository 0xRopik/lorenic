'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const faqs = [
  {
    q: 'Apa itu peptida dan bagaimana cara kerjanya?',
    a: 'Peptida adalah rantai pendek asam amino yang bertindak sebagai sinyal biologis. Dalam konteks senyawa riset, peptida dipelajari untuk memahami bagaimana tubuh merespons proses-proses seperti pemulihan, metabolisme, performa, dan penuaan yang sehat.',
  },
  {
    q: 'Apa yang membedakan Lorenic dari pemasok peptida lainnya?',
    a: 'Lorenic berfokus pada presisi, kualitas batch, dan dukungan pelanggan. Setiap produk disiapkan dengan dokumentasi COA, penanganan cold-chain (rantai dingin), dan instruksi penggunaan yang jelas sebelum pembelian.',
  },
  {
    q: 'Apakah peptida Lorenic aman?',
    a: 'Kami memprioritaskan produk yang terdokumentasi dan teruji. Namun, keamanan penggunaan tetap bergantung pada kondisi individu, tujuan, dan protokol yang dipilih. Konsultasikan dengan profesional kesehatan sebelum memulai.',
  },
  {
    q: 'Apakah peptida Lorenic mematuhi peraturan yang berlaku?',
    a: 'Klasifikasi regulasi bervariasi tergantung pada produk dan yurisdiksi. Selalu tinjau informasi produk, Certificate of Analysis (COA), dan Disclamer yang berlaku sebelum membeli. Jika Anda memerlukan informasi tentang status regulasi produk tertentu, silakan hubungi tim kami.',
  },
  {
    q: 'Produk mana yang sebaiknya saya mulai terlebih dahulu?',
    a: 'Mulailah dengan tujuan utama Anda: manajemen berat badan, pemulihan, tidur, komposisi tubuh, performa, atau dukungan kognitif. Tim kami dapat membantu merekomendasikan opsi yang paling sesuai berdasarkan kebutuhan dan pengalaman Anda.',
  },
  {
    q: 'Berapa lama sampai saya melihat hasilnya?',
    a: 'Respons setiap individu bervariasi. Beberapa pengguna mungkin menyadari perubahan dalam beberapa minggu pertama, sementara protokol lain memerlukan evaluasi yang lebih lama. Konsistensi dan dokumentasi yang baik mengenai perkembangan Anda sangat disarankan.',
  },
  {
    q: 'Bagaimana cara membaca Certificate of Analysis (COA)?',
    a: 'COA biasanya mencakup nama senyawa, nomor batch, kemurnian, metode pengujian, tanggal pengujian, dan hasil laboratorium. Cocokkan nomor batch produk Anda dengan COA untuk memverifikasi dokumentasi batch tepat yang Anda terima.',
  },
  {
    q: 'Apakah peptida dapat dikombinasikan?',
    a: 'Beberapa peptida umum dipelajari dalam protokol kombinasi, tetapi tidak semua kombinasi sesuai untuk setiap individu. Pilih kombinasi berdasarkan tujuan, pengalaman, dan panduan profesional Anda.',
  },
  {
    q: 'Apa perbedaan antara Versi Pen dan Versi Cartridge?',
    a: 'Versi Pen dirancang untuk kenyamanan lebih dan pemberian dosis yang terukur. Versi cartridge pra-terisi ditujukan bagi pelanggan yang telah memiliki perangkat Lorenic Pen dan ingin terus menggunakannya.',
  },
  {
    q: 'Untuk siapa peptida Lorenic cocok?',
    a: 'Produk Lorenic ditujukan untuk pengguna dewasa yang mencari pendekatan lebih terarah pada riset regenerasi, kesehatan sel, pemulihan, performa, atau kebugaran. Produk ini tidak ditujukan untuk anak-anak, wanita hamil atau menyusui, atau penggunaan tanpa pertimbangan profesional.',
  },
  {
    q: 'Bagaimana kebijakan pengembalian di Lorenic?',
    a: 'Karena sifat dari produk ini (kualitas farmasi, penanganan cold-chain, dan sekali pakai), kami tidak dapat menerima pengembalian produk yang telah diterima dalam kondisi baik. Jika produk tiba dalam keadaan rusak, salah kirim, atau memiliki masalah kualitas yang terdokumentasi, kami akan meninjau kasus tersebut secara individual. Silakan hubungi tim kami dalam waktu 24 jam setelah menerima pesanan Anda.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            FAQ
          </span>
          <h2 className="heading-gradient mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground">{faq.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-accent transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-muted/50 p-6">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            DISCLAIMER
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Konten ini disediakan untuk tujuan pendidikan dan informasi mengenai
            senyawa riset peptida. Konten ini tidak dimaksudkan untuk mendiagnosis,
            mengobati, menyembuhkan, atau mencegah penyakit apa pun, dan tidak boleh
            dianggap sebagai pengganti saran medis profesional. Selalu berkonsultasi
            dengan profesional kesehatan berkualifikasi sebelum memulai protokol
            baru apa pun.
          </p>
        </div>
      </div>
    </section>
  )
}
