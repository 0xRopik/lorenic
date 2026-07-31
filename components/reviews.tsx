'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const ALL_REVIEWS = [
  {
    body: 'Sebagai pendiri startup biotech, saya mengutamakan transparansi data uji lab di atas segalanya. Lorenic memberikan standar COA Eropa yang konsisten di setiap batch.',
    initial: 'M',
    name: 'Michael S.',
    detail: 'Pendiri & Biohacker (38th)',
  },
  {
    body: 'Protokolnya sangat rinci dan didukung penjelasan ilmiah yang solid. Kualitas peptida yang sangat konsisten untuk penelitian regeneratif.',
    initial: 'D',
    name: 'Dr. Hendra W.',
    detail: 'Dokter Spesialis Regeneratif & Longevity (45th)',
  },
  {
    body: 'Format pen dan cartridge pra-terukur sangat memudahkan pemakaian rutin tanpa ribet. Pengiriman cold chain juga menjaga potensi peptida tetap 100%.',
    initial: 'S',
    name: 'Sofia R.',
    detail: 'Atlet Profesional & Bio-Optimizer (29th)',
  },
  {
    body: 'Layanan konsultasi gratisnya sangat membantu menjawab pertanyaan spesifik mengenai riset kami. Tim sangat responsif dan paham sains peptida.',
    initial: 'A',
    name: 'Andreas K.',
    detail: 'Peneliti Klinis Independen (41th)',
  },
  {
    body: 'Lorenic adalah satu-satunya penyedia peptida riset di mana kita bisa memeriksa COA instan melalui QR code pada setiap kemasan fisik.',
    initial: 'R',
    name: 'Reza A.',
    detail: 'Pendiri Komunitas Health & Performance (34th)',
  },
  {
    body: 'Kualitas dan kemurnian peptida sangat terasa dari stabilitas hasilnya. Kemasan dingin dan segel laboratoriumnya sangat profesional.',
    initial: 'T',
    name: 'Tanja M.',
    detail: 'Konsultan Kesehatan & Anti-Aging (39th)',
  },
  {
    body: 'Pelayanan cepat, pengiriman aman, dan sertifikat pengujian independen selalu disertakan. Sangat direkomendasikan!',
    initial: 'B',
    name: 'Budi H.',
    detail: 'Eksekutif & Praktisi Longevity (48th)',
  },
  {
    body: 'BPC-157 dan Retatrutide dari Lorenic memberikan standar tingkat tinggi yang sulit ditemukan di penyedia lain.',
    initial: 'K',
    name: 'Kevin L.',
    detail: 'Biohacker & Formulator (32th)',
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
              <strong className="text-foreground">4.95</strong> dari 142 ulasan
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
