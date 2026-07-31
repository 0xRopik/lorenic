import { ConsultationButton } from '@/components/consultation-button'
import { ShieldCheck, Award, Microscope } from 'lucide-react'

export function LabTesting() {
  return (
    <section id="kualitas" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
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
              Pharmacopoeia (Ph. Eur.) jika berlaku.
            </p>
            <ConsultationButton
              size="lg"
              className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Mulai Konsultasi Gratis
            </ConsultationButton>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <ShieldCheck className="size-8 text-accent" />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Standar Farmasi Eropa
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Proses pengujian ketat sesuai spesifikasi analisis independen secara menyeluruh.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Microscope className="size-8 text-accent" />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                Verifikasi Kemurnian
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Memastikan konsentrasi dan stabilitas peptida pada potensi tertinggi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
