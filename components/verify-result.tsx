import Image from 'next/image'
import { BadgeCheck, FileText, FlaskConical, ShieldAlert } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import type { ProductRecord } from '@/lib/verify-codes'

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-primary px-4 py-10">
      <div className="w-full max-w-md">{children}</div>
      <footer className="mt-8 flex flex-col items-center gap-1 text-center">
        <Logo variant="light" />
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/60">
          Regenerative Peptide Labs &amp; Research
        </p>
      </footer>
    </main>
  )
}

export function VerifiedResult({ record }: { record: ProductRecord }) {
  const details: Array<{ label: string; value: string }> = [
    { label: 'Produk', value: record.product },
    { label: 'Kekuatan', value: record.strength },
    { label: 'Nomor Batch', value: record.batch },
    { label: 'Diproduksi', value: record.manufactured },
    { label: 'Kedaluwarsa', value: record.expiry },
    { label: 'Kode Verifikasi', value: record.code },
  ]

  return (
    <Shell>
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
        {/* Success banner */}
        <div className="flex flex-col items-center gap-3 bg-accent px-6 py-8 text-center text-accent-foreground">
          <span className="flex size-16 items-center justify-center rounded-full bg-accent-foreground/15">
            <BadgeCheck className="size-9" aria-hidden="true" />
          </span>
          <h1 className="text-balance font-display text-2xl font-bold">
            Selamat, produk Lorenic Anda terverifikasi asli.
          </h1>
          <p className="text-pretty text-sm leading-relaxed text-accent-foreground/90">
            Produk Lorenic Anda berhasil diverifikasi dan terbukti keasliannya.
          </p>
        </div>

        {/* Product details */}
        <div className="px-6 py-6">
          <dl className="divide-y divide-border">
            {details.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 py-2.5"
              >
                <dt className="text-sm text-muted-foreground">{row.label}</dt>
                <dd className="text-right text-sm font-semibold text-foreground">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Instruction note */}
          <div className="mt-5 flex gap-3 rounded-2xl bg-secondary p-4">
            <FlaskConical
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-secondary-foreground">
              Silakan lihat kartu instruksi yang disertakan dalam kemasan untuk
              panduan melakukan riset dengan produk Lorenic.
            </p>
          </div>

          {record.coaHref && (
            <Button
              render={<a href={record.coaHref} target="_blank" rel="noreferrer" />}
              className="mt-4 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <FileText className="size-4" aria-hidden="true" />
              Lihat Certificate of Analysis
            </Button>
          )}
        </div>
      </div>
    </Shell>
  )
}

export function NotVerifiedResult({ code }: { code?: string }) {
  return (
    <Shell>
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
        <div className="flex flex-col items-center gap-3 bg-destructive px-6 py-8 text-center text-white">
          <span className="flex size-16 items-center justify-center rounded-full bg-white/15">
            <ShieldAlert className="size-9" aria-hidden="true" />
          </span>
          <h1 className="text-balance font-display text-2xl font-bold">
            Kode tidak dapat diverifikasi.
          </h1>
          <p className="text-pretty text-sm leading-relaxed text-white/90">
            Kami tidak dapat memverifikasi kode ini sebagai produk Lorenic yang asli.
          </p>
        </div>
        <div className="px-6 py-6">
          {code && (
            <p className="mb-4 rounded-xl bg-secondary px-4 py-3 text-center text-sm text-secondary-foreground">
              Kode yang dipindai:{' '}
              <span className="font-semibold text-foreground">{code}</span>
            </p>
          )}
          <p className="text-sm leading-relaxed text-muted-foreground">
            Kode ini tidak ditemukan dalam catatan kami. Produk Anda mungkin
            palsu atau kartu telah rusak. Jangan gunakan produk untuk riset dan
            segera hubungi tim kami untuk bantuan.
          </p>
          <Button
            render={<a href="https://wa.me/6280000000000" target="_blank" rel="noreferrer" />}
            className="mt-5 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Hubungi Tim Lorenic
          </Button>
        </div>
      </div>
    </Shell>
  )
}
