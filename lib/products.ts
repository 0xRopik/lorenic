// Shared product catalog data used by the homepage catalog, product cards,
// and the dedicated product pages.

// Variant pricing is uniform across the catalog.
// Converted from IDR at a reference rate of 1 EUR = 17,500 IDR.
//   Cartridge: IDR 2,500,000  ->  EUR 143
//   Pen Package: IDR 3,500,000 -> EUR 200
export const CARTRIDGE_PRICE = '€143'
export const PEN_PRICE = '€200'

export type VariantId = 'cartridge' | 'pen'

export interface ProductVariant {
  id: VariantId
  label: string
  price: string
  note: string
}

export const VARIANTS: ProductVariant[] = [
  {
    id: 'cartridge',
    label: 'Cartridge',
    price: CARTRIDGE_PRICE,
    note: 'Cartridge isi ulang untuk perangkat Lorenic Pen.',
  },
  {
    id: 'pen',
    label: 'Paket Pen',
    price: PEN_PRICE,
    note: 'Pen lengkap pra-terisi, siap digunakan langsung.',
  },
]

export interface Product {
  slug: string
  name: string
  category: string
  image: string
  /** Short supporting line shown on cards. */
  tagline: string
  /** Fuller description shown on the product page. */
  description: string
  /** Dosing reference printed on the vial label. */
  dosage: string
}

export const products: Product[] = [
  {
    slug: 'retatrutide',
    name: 'Retatrutide 10mg',
    category: 'PENURUNAN LEMAK & PEMBENTUKAN OTOT',
    image: '/products/retatrutide.jpeg',
    tagline: 'Agonis tiga reseptor yang dipelajari untuk komposisi tubuh.',
    description:
      'Retatrutide adalah agonis tiga reseptor (GLP-1 / GIP / glukagon) yang dipelajari dalam konteks riset untuk efeknya terhadap keseimbangan energi, sinyal nafsu makan, dan komposisi tubuh. Disediakan dalam cartridge riset 10mg.',
    dosage: '200 klik · 20 klik = 1mg',
  },
  {
    slug: 'cjc-1295-ipamorelin',
    name: 'CJC-1295 (No DAC) 5mg + Ipamorelin 5mg',
    category: 'PERTUMBUHAN & PEMBENTUKAN OTOT',
    image: '/products/cjc1295-ipamorelin.jpeg',
    tagline: 'Formulasi analog GHRH + ghrelin untuk riset hormon pertumbuhan.',
    description:
      'Kombinasi sinergis dari CJC-1295 (No DAC), analog GHRH, dan Ipamorelin, sekretagog hormon pertumbuhan selektif. Dipelajari bersama untuk pelepasan hormon pertumbuhan impulsif, pemulihan, dan penunjang jaringan otot.',
    dosage: '200 klik · 20 klik = 1mg',
  },
  {
    slug: 'klow80',
    name: 'KLOW80',
    category: 'FORMULASI PEMULIHAN & PENYEMBUHAN',
    image: '/products/klow80.jpeg',
    tagline: 'Formulasi multi-peptida yang dipelajari untuk perbaikan dan pemulihan.',
    description:
      'KLOW80 adalah formulasi pemulihan multi-peptida yang menggabungkan senyawa regeneratif dan reparatif. Diriset untuk perbaikan jaringan, kualitas kulit, dan penunjang pemulihan menyeluruh dalam satu format praktis.',
    dosage: '200 klik',
  },
  {
    slug: 'mots-c',
    name: 'MOTS-C 10mg',
    category: 'METABOLISME & KESEHATAN SEL',
    image: '/products/mots-c.jpeg',
    tagline: 'Peptida turunan mitokondria untuk riset metabolik.',
    description:
      'MOTS-C adalah peptida turunan mitokondria yang dipelajari untuk perannya dalam regulasi metabolik, sensitivitas insulin, dan energi seluler. Senyawa yang semakin diminati dalam riset metabolik dan umur panjang.',
    dosage: '200 klik · 100 klik = 5mg',
  },
  {
    slug: 'nad-plus',
    name: 'NAD+ 500mg',
    category: 'REGENERASI & KESEHATAN SEL',
    image: '/products/nad-plus.jpeg',
    tagline: 'Koenzim utama untuk energi dan perbaikan seluler.',
    description:
      'NAD+ (nicotinamide adenine dinucleotide) adalah koenzim utama untuk produksi energi seluler dan perbaikan DNA. Dipelajari secara luas dalam riset regenerasi dan ketahanan hidup sel pada konsentrasi tinggi 500mg.',
    dosage: '200 klik · 20 klik = 50mg',
  },
  {
    slug: 'tesamorelin',
    name: 'Tesamorelin 10mg',
    category: 'PENURUNAN LEMAK & PERTUMBUHAN',
    image: '/products/tesamorelin.jpeg',
    tagline: 'Analog GHRH yang dipelajari untuk lemak viseral dan dukungan GH.',
    description:
      'Tesamorelin adalah analog GHRH terstabilkan yang dipelajari untuk efeknya terhadap pengurangan lemak viseral dan stimulasi hormon pertumbuhan. Disediakan dalam cartridge riset 10mg.',
    dosage: '200 klik · 40 klik = 2mg',
  },
  {
    slug: 'bpc-157',
    name: 'BPC-157 10mg',
    category: 'PEMULIHAN & PERBAIKAN',
    image: '/products/bpc-157.jpeg',
    tagline: 'Senyawa pelindung tubuh yang dipelajari untuk perbaikan jaringan.',
    description:
      'BPC-157 adalah pentadrapeptida lambung stabil yang dipelajari secara ekstensif untuk perbaikan jaringan, pemulihan tendon dan ligamen, serta kesehatan pencernaan dalam riset preklinis.',
    dosage: '200 klik · 10 klik = 0.5mg',
  },
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu 100mg',
    category: 'KULIT & REGENERASI',
    image: '/products/ghk-cu.jpeg',
    tagline: 'Peptida tembaga yang dipelajari untuk regenerasi kulit.',
    description:
      'GHK-Cu adalah tripeptida tembaga alami yang dipelajari untuk regenerasi kulit, sintesis kolagen, dan penyembuhan luka. Disediakan dalam konsentrasi tinggi 100mg untuk penggunaan riset.',
    dosage: '200 klik · 40 klik = 2mg',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, limit)
}
