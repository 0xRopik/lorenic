import Image from 'next/image'
import { ConsultationButton } from '@/components/consultation-button'
import { getAssetPath } from '@/lib/utils'

export function LabTesting() {
  return (
    <section id="kualitas" className="bg-background py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Pengujian Laboratorium
          </span>
          <h2 className="heading-gradient mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Diuji di laboratorium Eropa.
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Setiap batch yang kami kirim diuji oleh laboratorium independen Eropa
            sesuai dengan standar kualitas Eropa, mengacu pada European
            Pharmacopoeia (Ph. Eur.) jika berlaku. Certificate of Analysis (Sertifikat Analisis)
            tersedia untuk setiap pesanan.
          </p>
          <ConsultationButton
            size="lg"
            className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Mulai Konsultasi Gratis
          </ConsultationButton>
        </div>

        <div>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
            <Image
              src={getAssetPath('/coa.png')}
              alt="Contoh Certificate of Analysis untuk produk Lorenic"
              width={1024}
              height={1024}
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            *Penafian: sampel COA tersedia untuk setiap produk.
          </p>
        </div>
      </div>
    </section>
  )
}
