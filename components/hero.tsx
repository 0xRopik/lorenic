"use client"

import { FlaskConical, Headset, Truck } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ConsultationButton } from "@/components/consultation-button"
import { getAssetPath } from "@/lib/utils"

const trust = [
  { icon: FlaskConical, label: "Diuji laboratorium sebelum setiap pengiriman." },
  { icon: Headset, label: "Dukungan pelanggan 24/7." },
  { icon: Truck, label: "Pengiriman aman dengan suhu terkontrol." },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-primary text-primary-foreground">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src={getAssetPath('/hero-lorenic.mp4')} type="video/mp4" />
      </video>
      {/* Navy brand tint + legibility overlay (lightened so the video shows through) */}
      <div
        className="absolute inset-0 bg-primary/32 mix-blend-multiply"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/22 via-primary/12 to-primary/85"
        aria-hidden="true"
      />

      <motion.div
        className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="max-w-xl text-sm font-medium text-primary-foreground/80">
          Dipercaya dan digunakan oleh influencer, dokter, dan praktisi kesehatan.
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-5 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Peptida riset standar Eropa, <span className="text-accent">dikirim dengan presisi.</span>
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg"
        >
          Peptida riset untuk penurunan lemak, pembentukan otot, regenerasi &amp; kesehatan sel, pemulihan, dan fokus kognitif —
          semuanya dalam satu platform.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            render={<a href="#katalog" />}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Lihat Katalog
          </Button>
          <ConsultationButton
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Konsultasi Gratis
          </ConsultationButton>
        </motion.div>

        <motion.ul variants={item} className="mt-12 grid gap-4 sm:grid-cols-3">
          {trust.map((t) => (
            <li
              key={t.label}
              className="flex items-center gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 backdrop-blur-sm"
            >
              <t.icon className="size-5 shrink-0 text-accent" />
              <span className="text-sm text-primary-foreground/90">{t.label}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="relative border-t border-primary-foreground/10 bg-primary/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-4 text-center text-xs font-medium text-primary-foreground/70 sm:px-6">
          <span>Pengujian laboratorium Eropa yang komprehensif.</span>
          <span>
            Suhu tetap terjaga selama transit dengan pengiriman dingin khusus.
          </span>
          <span>Pengiriman ke seluruh dunia.</span>
        </div>
      </div>
    </section>
  )
}
