'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CARTRIDGE_PRICE, type Product } from '@/lib/products'
import { getAssetPath } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const cardImages = [
    { src: product.image || '/placeholder.svg', label: 'Vial' },
    { src: '/cartridgepackagelorenic.png', label: 'Cartridge' },
    { src: '/penpackageloreniccatalog.png', label: 'Paket Pen' },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % cardImages.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [cardImages.length])

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="relative aspect-square overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={cardImages[currentImageIndex].src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative h-full w-full"
          >
            <Image
              src={getAssetPath(cardImages[currentImageIndex].src)}
              alt={`Lorenic ${product.name} - ${cardImages[currentImageIndex].label}`}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
        </AnimatePresence>

        {/* Format badge indicator */}
        <div className="absolute top-3 left-3 z-10 rounded-full border border-border/60 bg-background/90 px-2.5 py-0.5 text-[0.65rem] font-semibold text-foreground shadow-sm backdrop-blur-sm">
          {cardImages[currentImageIndex].label}
        </div>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/20 px-2 py-1 backdrop-blur-sm">
          {cardImages.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentImageIndex === idx
                  ? 'w-4 bg-accent'
                  : 'w-1.5 bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-accent">
          {product.category}
        </span>
        <h3 className="mt-1 font-display text-base font-semibold text-foreground line-clamp-1">
          {product.name}
        </h3>
        <div className="mt-3 flex items-baseline gap-1.5">
          <span className="font-display text-lg font-bold text-primary">
            {CARTRIDGE_PRICE}
          </span>
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
