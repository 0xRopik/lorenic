import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { type Product } from '@/lib/products'
import { getAssetPath } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="relative aspect-square overflow-hidden bg-white">
        <Image
          src={getAssetPath(product.image || '/placeholder.svg')}
          alt={`Lorenic ${product.name}`}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-accent">
          {product.category}
        </span>
        <h3 className="mt-1 font-display text-base font-semibold text-foreground line-clamp-1">
          {product.name}
        </h3>
        <div className="mt-3 flex flex-wrap items-baseline gap-1.5">
          <span className="font-display text-lg font-bold text-primary">
            {product.cartridgePrice}
          </span>
          {product.cartridgeOriginalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {product.cartridgeOriginalPrice}
            </span>
          )}
          <span className="text-xs text-muted-foreground">/ cartridge</span>
        </div>
        <span className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors group-hover:bg-secondary/70">
          Lihat Produk
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}
