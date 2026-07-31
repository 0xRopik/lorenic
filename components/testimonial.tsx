'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { MoveHorizontal } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { getAssetPath } from '@/lib/utils'

export function Testimonial() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    let percentage = (x / rect.width) * 100
    if (percentage < 0) percentage = 0
    if (percentage > 100) percentage = 100
    setSliderPosition(percentage)
  }, [])

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX)
      }
    }
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        handleMove(e.touches[0].clientX)
      }
    }

    window.addEventListener('mouseup', handleGlobalMouseUp)
    window.addEventListener('mousemove', handleGlobalMouseMove)
    window.addEventListener('touchend', handleGlobalMouseUp)
    window.addEventListener('touchmove', handleGlobalTouchMove)

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp)
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('touchend', handleGlobalMouseUp)
      window.removeEventListener('touchmove', handleGlobalTouchMove)
    }
  }, [isDragging, handleMove])

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading-gradient text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Dipercaya oleh atlet dan praktisi kesehatan.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Praktisi kebugaran dan regenerasi &amp; kesehatan sel menjadikan peptida
            premium Lorenic bagian dari rutinitas harian mereka.
          </p>
          <p className="mt-2 text-xs font-semibold text-accent">
            *Geser garis pembatas di tengah foto untuk melihat perbandingan Before &amp; After.
          </p>
        </Reveal>

        <Reveal>
          <article className="mt-12 grid gap-8 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
            {/* Interactive Before/After Image Comparison Slider */}
            <div
              ref={containerRef}
              onMouseDown={(e) => {
                setIsDragging(true)
                handleMove(e.clientX)
              }}
              onTouchStart={(e) => {
                setIsDragging(true)
                if (e.touches.length > 0) handleMove(e.touches[0].clientX)
              }}
              className="relative aspect-[4/5] w-full max-w-md mx-auto select-none overflow-hidden rounded-2xl cursor-ew-resize border border-border bg-black shadow-md"
            >
              {/* After Image (Background layer) */}
              <div className="absolute inset-0">
                <Image
                  src={getAssetPath('/products/AFTER3.jpg')}
                  alt="Transformasi Setelah (AFTER)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <span className="absolute top-3 right-3 z-10 rounded-md bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground shadow-sm backdrop-blur-sm">
                  AFTER
                </span>
              </div>

              {/* Before Image (Top clipped layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div
                  className="relative h-full"
                  style={{
                    width: containerRef.current
                      ? `${containerRef.current.clientWidth}px`
                      : '100%',
                  }}
                >
                  <Image
                    src={getAssetPath('/products/BEFORE3.jpg')}
                    alt="Transformasi Sebelum (BEFORE)"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <span className="absolute top-3 left-3 z-10 rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground shadow-sm backdrop-blur-sm">
                    BEFORE
                  </span>
                </div>
              </div>

              {/* Vertical Divider Handle Line */}
              <div
                className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-accent text-accent-foreground shadow-lg backdrop-blur-md transition-transform hover:scale-110">
                  <MoveHorizontal className="size-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-balance font-display text-2xl font-bold text-foreground">
                &ldquo;Stuck bgt di BB &amp; beban segini, akhirnya dapet progress lagi pas nyobain Lorenic!&rdquo;
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Jujur udah workout lumayan lama tp kok kyk gitu-gitu aja.. Baru pas rutin beberapa minggu pake ini beneran kerasa bedanya bgt! Fisik makin kebentuk, otot keliatan lebih padat, n energi pas ngegym tuh gak ada habisnya. Squat yg tadinya mentok 110kg skrg tembus 140kg dongg 🔥 Recovery abis leg day jg jauhh lebih cepet. Fix bakal repeat order sih ini!
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                  K
                </span>
                <div>
                  <p className="font-semibold text-foreground">Ken</p>
                  <p className="text-sm text-muted-foreground">
                    Fitness Enthusiast
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
