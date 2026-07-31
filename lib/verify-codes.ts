export interface ProductRecord {
  /** The unique verification code printed on the authenticity & COA card. */
  code: string
  product: string
  strength: string
  batch: string
  manufactured: string
  expiry: string
  /** Path to the batch Certificate of Analysis (PDF or image in /public). */
  coaHref?: string
}

/**
 * Valid authenticity codes.
 *
 * Each physical product ships with an authenticity & COA card containing a QR
 * code that links to `/verify/<code>`. Only codes listed here resolve to a
 * "verified authentic" result — any other code shows a "not verified" warning.
 *
 * NOTE: This is an in-code registry so the feature works with zero setup. For a
 * production launch with per-unit, one-time-scan tracking, this should be moved
 * to a database (e.g. Neon) — the lookup API below can stay the same.
 */
const RECORDS: ProductRecord[] = [
  {
    code: 'LRN-RETA-0001',
    product: 'Retatrutide',
    strength: '10 mg',
    batch: 'RT0626',
    manufactured: '06 / 2026',
    expiry: '06 / 2028',
    coaHref: '/coa.png',
  },
  {
    code: 'LRN-SEMA-0002',
    product: 'Semaglutide',
    strength: '5 mg',
    batch: 'SG0526',
    manufactured: '05 / 2026',
    expiry: '05 / 2028',
    coaHref: '/coa.png',
  },
  {
    code: 'LRN-BPC-0003',
    product: 'BPC-157',
    strength: '5 mg',
    batch: 'BP0426',
    manufactured: '04 / 2026',
    expiry: '04 / 2028',
    coaHref: '/coa.png',
  },
  {
    code: 'LRN-TB-0004',
    product: 'TB-500',
    strength: '10 mg',
    batch: 'TB0326',
    manufactured: '03 / 2026',
    expiry: '03 / 2028',
    coaHref: '/coa.png',
  },
  {
    code: 'VF0601RT',
    product: 'Retatrutide',
    strength: '10 mg',
    batch: 'RT0626',
    manufactured: '06 / 2026',
    expiry: '06 / 2028',
    coaHref: '/coa.png',
  },
  // Demo code so the QR flow can be tested end-to-end.
  {
    code: 'DEMO',
    product: 'Retatrutide',
    strength: '10 mg',
    batch: 'RT0626',
    manufactured: '06 / 2026',
    expiry: '06 / 2028',
    coaHref: '/coa.png',
  },
]

/** Normalize user/QR input so casing and stray spaces never cause false negatives. */
export function normalizeCode(raw: string): string {
  return decodeURIComponent(raw).trim().toUpperCase()
}

/** Returns the matching product record, or null if the code is not recognized. */
export function verifyCode(raw: string): ProductRecord | null {
  const code = normalizeCode(raw)
  return RECORDS.find((r) => r.code.toUpperCase() === code) ?? null
}
