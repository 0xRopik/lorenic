'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  FlaskConical,
  FileCheck2,
  Snowflake,
  Headset,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from 'lucide-react'
import { ConsultationButton } from '@/components/consultation-button'
import { VARIANTS, type Product, type VariantId } from '@/lib/products'
import { getAssetPath } from '@/lib/utils'

const usps = [
  { icon: FlaskConical, label: 'Teruji Laboratorium Eropa' },
  { icon: FileCheck2, label: 'COA Spesifik Tiap Batch' },
  { icon: Snowflake, label: 'Pengiriman Cold Chain' },
  { icon: Headset, label: 'Dukungan Ilmiah' },
]

export function ProductDetail({ product }: { product: Product }) {
  const [variant, setVariant] = useState<VariantId>('cartridge')
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)

  const activeVariant = VARIANTS.find((v) => v.id === variant) ?? VARIANTS[0]

  // Image slideshow array:
  // 0: Main Product Vial
  // 1: Cartridge Package (/cartridgepackagelorenic.png)
  // 2: Pen Package (/penpackageloreniccatalog.png)
  const galleryImages = [
    { src: product.image || '/placeholder.svg', label: 'Vial Riset', variantId: null },
    { src: '/cartridgepackagelorenic.png', label: 'Paket Cartridge', variantId: 'cartridge' as VariantId },
    { src: '/penpackageloreniccatalog.png', label: 'Paket Pen', variantId: 'pen' as VariantId },
  ]

  // Sync format selection with active image
  const handleVariantSelect = (vId: VariantId) => {
    setVariant(vId)
    setIsAutoPlaying(false) // pause auto-play on manual click
    if (vId === 'cartridge') {
      setActiveImageIndex(1)
    } else if (vId === 'pen') {
      setActiveImageIndex(2)
    }
  }

  const handleImageSelect = (index: number) => {
    setActiveImageIndex(index)
    setIsAutoPlaying(false)
    const matchingVariant = galleryImages[index].variantId
    if (matchingVariant) {
      setVariant(matchingVariant)
    }
  }

  // Auto-slide effect every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setActiveImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % galleryImages.length
        const matchingVariant = galleryImages[nextIndex].variantId
        if (matchingVariant) {
          setVariant(matchingVariant)
        }
        return nextIndex
      })
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoPlaying, galleryImages.length])

  return (
    <section className="bg-background pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Link
          href="/#katalog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Kembali ke katalog
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: Animated image gallery & slideshow */}
          <div className="flex flex-col gap-4">
            <div
              className="group relative aspect-square overflow-hidden rounded-3xl border border-border bg-white shadow-md"
              onMouseEnter={() => setIsAutoPlaying(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={galleryImages[activeImageIndex].src}
                  initial={{ opacity: 0, scale: 0.96, x: 15 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.96, x: -15 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={getAssetPath(galleryImages[activeImageIndex].src)}
                    alt={`Lorenic ${product.name} - ${galleryImages[activeImageIndex].label}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-6"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Format Badge Overlay */}
              <div className="absolute top-4 left-4 z-10 rounded-full border border-border/80 bg-background/95 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md">
                {galleryImages[activeImageIndex].label}
              </div>

              {/* Carousel Navigation Arrows */}
              <button
                type="button"
                onClick={() =>
                  handleImageSelect(
                    (activeImageIndex - 1 + galleryImages.length) % galleryImages.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground opacity-0 shadow-md transition-all hover:bg-background group-hover:opacity-100"
                aria-label="Gambar sebelumnya"
              >
                <ChevronLeft className="size-5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  handleImageSelect((activeImageIndex + 1) % galleryImages.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground opacity-0 shadow-md transition-all hover:bg-background group-hover:opacity-100"
                aria-label="Gambar berikutnya"
              >
                <ChevronRight className="size-5" />
              </button>

              {/* Auto-slide indicator badge */}
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-full bg-primary/90 px-3 py-1 text-[0.7rem] font-medium text-primary-foreground shadow-sm backdrop-blur-md hover:bg-primary"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="size-3" /> Auto Slide
                  </>
                ) : (
                  <>
                    <Play className="size-3" /> Slide Manual
                  </>
                )}
              </button>
            </div>

            {/* Thumbnails row */}
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((img, idx) => {
                const isActive = activeImageIndex === idx
                return (
                  <button
                    key={img.src + idx}
                    type="button"
                    onClick={() => handleImageSelect(idx)}
                    className={`group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl border p-1.5 transition-all ${
                      isActive
                        ? 'border-accent bg-accent/10 ring-2 ring-accent'
                        : 'border-border bg-card hover:border-accent/40'
                    }`}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={getAssetPath(img.src)}
                        alt={img.label}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <span className="mt-1 text-[0.65rem] font-semibold text-foreground/80 line-clamp-1">
                      {img.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: product info */}
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {product.category}
            </span>
            <h1 className="mt-2 text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-primary">
                {activeVariant.price}
              </span>
              <span className="text-sm text-muted-foreground">
                / {activeVariant.label.toLowerCase()}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Acuan dosis: {product.dosage}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <span className="text-sm font-medium text-foreground">
                Pilih format Anda
              </span>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {VARIANTS.map((v) => {
                  const selected = v.id === variant
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => handleVariantSelect(v.id)}
                      aria-pressed={selected}
                      className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                        selected
                          ? 'border-accent bg-accent/5 ring-2 ring-accent'
                          : 'border-border bg-card hover:border-accent/50'
                      }`}
                    >
                      <span className="font-display text-sm font-semibold text-foreground">
                        {v.label}
                      </span>
                      <span className="mt-1 font-display text-lg font-bold text-primary">
                        {v.price}
                      </span>
                      <span className="mt-1 text-xs leading-snug text-muted-foreground">
                        {v.note}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <ConsultationButton
              size="lg"
              className="mt-6 w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <MessageCircle className="size-4" />
              Pesan &amp; Konsultasi
            </ConsultationButton>

            {/* USP icons row */}
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-border pt-6 sm:grid-cols-4">
              {usps.map((usp) => (
                <li
                  key={usp.label}
                  className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left"
                >
                  <usp.icon className="size-5 text-accent" aria-hidden="true" />
                  <span className="text-xs leading-snug text-muted-foreground">
                    {usp.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
