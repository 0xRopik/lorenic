import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { getAssetPath } from '@/lib/utils'

export function Testimonial() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading-gradient text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Dipercaya oleh atlet dan praktisi kesehatan.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Praktisi kebugaran dan regenerasi &amp; kesehatan sel menjadikan peptida
            premium Lorenic bagian dari rutinitas mereka.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            *Pengalaman yang ditampilkan bersifat individu dan tidak selalu mewakili
            hasil yang sama bagi setiap orang.
          </p>
        </Reveal>

        <Reveal>
        <article className="mt-12 grid gap-8 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={getAssetPath('/athlete.png')}
              alt="Atlet menggunakan peptida Lorenic"
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-balance font-display text-2xl font-bold text-foreground">
              &ldquo;Kemajuan saya kembali terlihat, dan itu membuat saya terus termotivasi.&rdquo;
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Gue udah latihan lumayan lama, tapi baru sekarang beneran kerasa bedanya. Dalam beberapa minggu bentuk badan keliatan lebih padat, otot lebih terdefinisi, dan energi pas gym terasa jauh lebih mantap!
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                RA
              </span>
              <div>
                <p className="font-semibold text-foreground">Reza A.</p>
                <p className="text-sm text-muted-foreground">
                  Praktisi binaraga &amp; kesehatan
                </p>
              </div>
            </div>
          </div>
        </article>
        </Reveal>
      </div>
    </section>
  )
}
