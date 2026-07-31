import { Star } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const reviews = [
  {
    body: 'Protokolnya jelas, tim sangat responsif, dan produk tiba dalam kondisi sempurna. Tidak ada yang dibiarkan menebak-nebak.',
    initial: 'A',
    name: 'Andreas',
    detail: '44, Pengusaha',
  },
  {
    body: 'Akhirnya ada brand yang menunjukkan hasil labnya. Saya merekomendasikannya kepada siapa saja yang serius tentang kesehatan jangka panjang.',
    initial: 'M',
    name: 'Michael',
    detail: '42, Pendiri',
  },
  {
    body: 'Konsultasi gratis memberikan perbedaan besar. Mereka benar-benar memahami apa yang saya cari.',
    initial: 'S',
    name: 'Sofia',
    detail: '35, Atlet',
  },
  {
    body: 'Kualitas premium tanpa keraguan. Semuanya terdokumentasi dengan sangat baik.',
    initial: 'D',
    name: 'David',
    detail: '51, Eksekutif',
  },
  {
    body: 'Saya telah mencoba beberapa sumber peptida. Lorenic adalah satu-satunya yang menyediakan COA tanpa harus diminta.',
    initial: 'R',
    name: 'Rafael',
    detail: '38, Dokter Umum',
  },
  {
    body: 'Saya sangat mengapresiasi transparansinya. COA dapat diperiksa secara instan dan tim merespons dengan cepat.',
    initial: 'T',
    name: 'Tanja',
    detail: '39, Konsultan',
  },
]

export function Reviews() {
  return (
    <section id="ulasan" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading-gradient text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Apa kata mereka tentang Lorenic.
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-accent text-accent" />
              ))}
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              <strong className="text-foreground">4.9</strong> dari 107 ulasan
              terverifikasi
            </span>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <StaggerItem
              key={review.name + review.detail}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </span>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                {review.body}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                  {review.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{review.detail}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
