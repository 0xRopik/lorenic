import Image from 'next/image'
import { ConsultationButton } from '@/components/consultation-button'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { getAssetPath } from '@/lib/utils'

const formats = [
  {
    name: 'Versi CARTRIDGE',
    image: '/cartridgepackagelorenic.png',
    body: 'Cocok untuk pelanggan yang sudah pernah membeli PEN PACKAGE dan ingin melanjutkan penggunaan, dapatkan harga lebih hemat dengan hanya membeli cartridge refill Lorenic dengan isi peptide.',
  },
  {
    name: 'Versi PEN',
    image: '/penpackageloreniccatalog.png',
    body: 'dilengkapi dengan pen reusable premium, cartridge, dan travel set pendingin eksklusif.',
  },
]

export function Formats() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading-gradient text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Satu standar kualitas. Dua cara penggunaan.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Kualitas yang sama, cara penggunaan yang berbeda. Pilih format yang paling sesuai dengan rutinitas dan kebutuhan Anda.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {formats.map((format) => (
            <StaggerItem
              key={format.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={getAssetPath(format.image || '/placeholder.svg')}
                  alt={`Lorenic ${format.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {format.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {format.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <ConsultationButton
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Mulai Konsultasi Gratis
          </ConsultationButton>
        </div>
      </div>
    </section>
  )
}
