'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ShieldCheck, ShieldAlert, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Official Lorenic consultation contact.
const WHATSAPP_DISPLAY = '087769004800'
const WHATSAPP_NUMBER = '6287769004800'

type ConsultationContextValue = {
  open: () => void
  close: () => void
}

const ConsultationContext = createContext<ConsultationContextValue | null>(null)

export function useConsultation() {
  const ctx = useContext(ConsultationContext)
  if (!ctx) {
    throw new Error('useConsultation must be used within a ConsultationProvider')
  }
  return ctx
}

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({ open, close }), [open, close])

  return (
    <ConsultationContext.Provider value={value}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={close} />
    </ConsultationContext.Provider>
  )
}

function ConsultationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [phone, setPhone] = useState('')
  const [agreed, setAgreed] = useState(false)

  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, onClose])

  const digits = phone.replace(/\D/g, '')
  const canContinue = digits.length >= 6 && agreed

  function handleContinue() {
    if (!canContinue) return
    const message = encodeURIComponent(
      `Hallo Kak, saya mau tanya tentang produk Lorenic. Nomor kontak saya adalah ${phone}.`,
    )
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(url, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-title"
        >
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label="Tutup konsultasi"
            onClick={onClose}
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.div
            className="relative flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full text-primary-foreground/80 transition-colors hover:bg-primary-foreground/15 hover:text-primary-foreground"
              aria-label="Tutup"
            >
              <X className="size-5" />
            </button>

            {/* Header */}
            <div className="bg-primary px-6 py-6 text-primary-foreground sm:px-8">
              <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <ShieldCheck className="size-6" />
              </span>
              <h2
                id="consultation-title"
                className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl"
              >
                Verifikasi Konsultasi
              </h2>
              <p className="mt-1 text-sm text-primary-foreground/80">
                Harap baca sebelum memulai konsultasi Anda.
              </p>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              <div className="flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4">
                <ShieldAlert className="mt-0.5 size-5 shrink-0 text-accent" />
                <div className="text-sm leading-relaxed text-foreground">
                  <p className="font-semibold">Harap waspada terhadap penipuan.</p>
                  <p className="mt-1 text-muted-foreground">
                    Setelah memasukkan nomor telepon Anda di bawah ini, nomor WhatsApp
                    resmi kami akan ditampilkan dan Anda akan diarahkan langsung
                    untuk memulai konsultasi. Hanya nomor WhatsApp yang ditampilkan
                    setelah pengiriman yang merupakan kontak resmi kami.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Lorenic memprioritaskan kualitas, dukungan ilmiah, dan layanan
                pelanggan daripada bersaing harga. Setiap konsultasi mencakup
                panduan sebelum membeli dan dukungan purna jual berkelanjutan.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleContinue()
                }}
                className="mt-6 flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="consultation-phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Silakan masukkan nomor telepon yang akan Anda gunakan untuk
                    konsultasi.
                  </label>
                  <input
                    id="consultation-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 rounded-xl border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    placeholder="contoh: 0812 3456 7890"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 size-5 shrink-0 rounded border-input text-accent accent-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                  <span>
                    Saya mengonfirmasi bahwa saya berusia setidaknya 18 tahun dan menyetujui{' '}
                    <span className="font-medium text-foreground">
                      Syarat &amp; Ketentuan
                    </span>{' '}
                    dan{' '}
                    <span className="font-medium text-foreground">
                      Kebijakan Privasi
                    </span>
                    .
                  </span>
                </label>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!canContinue}
                  className="mt-1 w-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Lanjutkan
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Kontak resmi:{' '}
                  <span className="font-semibold text-foreground">
                    {WHATSAPP_DISPLAY}
                  </span>
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
