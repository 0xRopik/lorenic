import { Check, MessageCircle, ShieldCheck } from 'lucide-react'
import { ConsultationButton } from '@/components/consultation-button'
import { Reveal } from '@/components/reveal'

export function Consultation() {
  return (
    <section
      id="konsultasi"
      className="bg-primary py-16 text-primary-foreground md:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Konsultasi Gratis
          </span>
          <h2 className="heading-gradient-light mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Bicara dengan tim kami sebelum Anda memesan.
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
            Sampaikan tujuan Anda dan tim kami akan membantu menyusun rekomendasi produk
            dan protokol yang paling sesuai untuk Anda. Tanpa biaya, tanpa kewajiban
            membeli.
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-sm text-primary-foreground/90">
            {[
              'Rekomendasi produk yang dipersonalisasi',
              'Panduan protokol dan dosis',
              'Dukungan purna jual 24/7',
            ].map((point) => (
              <li key={point} className="flex items-center gap-3">
                <Check className="size-5 shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <ShieldCheck className="size-6" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold">
              Konsultasi aman dan terverifikasi.
            </h3>
            <p className="mt-3 leading-relaxed text-primary-foreground/80">
              Mulai konsultasi Anda secara langsung dengan tim resmi kami melalui
              WhatsApp. Kami akan mengonfirmasi nomor kontak resmi kami sebelum Anda
              membagikan rincian apa pun, sehingga Anda selalu terlindungi dari penipuan.
            </p>
            <ConsultationButton
              size="lg"
              className="mt-6 w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <MessageCircle className="size-4" />
              Mulai Konsultasi Gratis
            </ConsultationButton>
            <p className="mt-4 text-center text-xs text-primary-foreground/60">
              Data Anda aman dan hanya digunakan untuk keperluan konsultasi.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
