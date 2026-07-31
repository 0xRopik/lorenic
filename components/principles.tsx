import { Button } from '@/components/ui/button'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

const principles = [
  {
    no: '01',
    title: 'Kualitas Terkontrol',
    body: 'Tidak ada produk dengan asal-usul yang tidak jelas. Setiap batch diproduksi di fasilitas manufaktur yang memenuhi standar kualitas Eropa, dengan kontrol kualitas yang ketat.',
  },
  {
    no: '02',
    title: 'Konsultasi Gratis 24/7',
    body: 'Tim kami membantu Anda memilih produk dan protokol yang tepat sebelum Anda membeli. Tanpa biaya, tanpa paksaan.',
  },
  {
    no: '03',
    title: 'Transparansi Penuh',
    body: 'Spesifikasi produk dapat diverifikasi untuk setiap pesanan. Anda tahu persis apa yang Anda gunakan.',
  },
]

export function Principles() {
  return (
    <section className="bg-foreground py-16 text-background md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="heading-gradient-light max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Dirancang bagi Anda yang serius tentang regenerasi &amp; kesehatan sel.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-10 md:grid-cols-3">
          {principles.map((item) => (
            <StaggerItem key={item.no}>
              <span className="font-display text-4xl font-bold text-accent">
                {item.no}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-background/70">
                {item.body}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-12">
          <Button
            render={<a href="#katalog" />}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Lihat Katalog
          </Button>
        </div>
      </div>
    </section>
  )
}
