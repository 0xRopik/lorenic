import { ProductCard } from '@/components/product-card'
import { ConsultationButton } from '@/components/consultation-button'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { products } from '@/lib/products'

export function Products() {
  return (
    <section id="katalog" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading-gradient text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Salah satu katalog peptida riset terlengkap.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Konsultasikan tujuan Anda dengan tim kami dan kami akan membantu menemukan opsi yang paling sesuai dengan kebutuhan riset Anda.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <StaggerItem key={product.slug}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <ConsultationButton
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Bicara dengan Tim Kami
          </ConsultationButton>
        </div>

        <p className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-muted/50 p-4 text-center text-xs text-muted-foreground">
          Semua produk ditujukan{' '}
          <span className="font-semibold text-foreground">
            hanya untuk penelitian laboratorium
          </span>{' '}
          dan bukan untuk konsumsi manusia atau hewan.
        </p>
      </div>
    </section>
  )
}
