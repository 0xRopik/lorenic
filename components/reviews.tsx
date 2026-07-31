'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const ALL_REVIEWS = [
  {
    body: 'Protokol pengujiannya sangat sistematis dan dokumentasinya sangat lengkap. Kualitas peptida yang sangat konsisten untuk setiap tahapan evaluasi.',
    initial: 'A',
    name: 'Arya K.',
    detail: 'Peneliti & Bio-Optimizer (41th)',
  },
  {
    body: 'Transparansi standar lab Eropa dan jaminan batch dari Lorenic membuat kami merasa sangat yakin terhadap keamanan dan mutunya.',
    initial: 'M',
    name: 'Mahendra S.',
    detail: 'Praktisi Kesehatan & Longevity (38th)',
  },
  {
    body: 'Sistem pengiriman cold-chain menjaga kesegaran dan efektivitas senyawa peptida hingga tiba di tempat kami tanpa ada penurunan kualitas.',
    initial: 'R',
    name: 'Rian A.',
    detail: 'Kinesiolog & Performance Specialist (34th)',
  },
  {
    body: 'Format pen cartridge yang presisi memudahkan kontrol dosis harian dengan sangat mudah dan higienis.',
    initial: 'T',
    name: 'Tari M.',
    detail: 'Konsultan Kebugaran & Wellness (39th)',
  },
  {
    body: 'Pengiriman yang tepat waktu, kemasan terlindungi dengan baik, dan layanan responsif. Sangat direkomendasikan!',
    initial: 'B',
    name: 'Bambang H.',
    detail: 'Eksekutif & Health Enthusiast (48th)',
  },
  {
    body: 'Varian BPC-157 dan Retatrutide dari Lorenic memberikan hasil yang terukur dengan kestabilan standar kelas atas.',
    initial: 'K',
    name: 'Kresna L.',
    detail: 'Formulator & Biohacker (32th)',
  },
]

export function Reviews() {
  const [displayReviews, setDisplayReviews] = useState(ALL_REVIEWS.slice(0, 6))

  useEffect(() => {
    // Shuffle reviews slightly on load for dynamic variation
    const shuffled = [...ALL_REVIEWS].sort(() => 0.5 - Math.random())
    setDisplayReviews(shuffled.slice(0, 6))
  }, [])

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
              <strong className="text-foreground">4.87</strong> dari 122 ulasan
              terverifikasi
            </span>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayReviews.map((review) => (
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
