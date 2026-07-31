// Shared product catalog data used by the homepage catalog, product cards,
// and the dedicated product pages.

import { getAssetPath } from '@/lib/utils'

export type VariantId = 'cartridge' | 'pen'

export interface ProductVariant {
  id: VariantId
  label: string
  note: string
}

export const VARIANTS: ProductVariant[] = [
  {
    id: 'cartridge',
    label: 'Cartridge',
    note: 'Cartridge isi ulang untuk perangkat Lorenic Pen.',
  },
  {
    id: 'pen',
    label: 'Paket Pen',
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
  cartridgePrice: string
  cartridgeOriginalPrice?: string
  penPrice: string
  penOriginalPrice?: string
}

export const products: Product[] = [
  {
    slug: 'retatrutide',
    name: 'Retatrutide 10mg',
    category: 'PENURUNAN LEMAK & PEMBENTUKAN OTOT',
    image: getAssetPath('/products/tirzepatide.jpeg'),
    tagline: 'Agonis tiga reseptor (GLP-1/GIP/Glukagon) untuk komposisi tubuh.',
    description:
      'Retatrutide adalah agonis tiga reseptor (GLP-1 / GIP / glukagon) yang dipelajari dalam konteks riset untuk efeknya terhadap keseimbangan energi, sinyal nafsu makan, dan komposisi tubuh. Disediakan dalam cartridge riset 10mg.',
    dosage: '200 klik · 20 klik = 1mg',
    cartridgePrice: 'Rp3.200.000',
    cartridgeOriginalPrice: 'Rp4.000.000',
    penPrice: 'Rp4.200.000',
    penOriginalPrice: 'Rp5.200.000',
  },
  {
    slug: 'tirzepatide',
    name: 'Tirzepatide 10mg',
    category: 'PENURUNAN LEMAK & METABOLISME',
    image: getAssetPath('/products/tirzepatide.jpeg'),
    tagline: 'Agonis ganda reseptor GLP-1 & GIP untuk regulasi gula darah & metabolik.',
    description:
      'Tirzepatide menggabungkan stimulasi reseptor GIP dan GLP-1 yang dipelajari secara luas untuk penurunan berat badan, sensitivitas insulin, dan manajemen metabolik.',
    dosage: '200 klik · 20 klik = 1mg',
    cartridgePrice: 'Rp3.000.000',
    cartridgeOriginalPrice: 'Rp4.000.000',
    penPrice: 'Rp4.000.000',
    penOriginalPrice: 'Rp5.000.000',
  },
  {
    slug: 'semaglutide',
    name: 'Semaglutide 5mg',
    category: 'METABOLISME & KONTROL NAFSU MAKAN',
    image: getAssetPath('/products/semaglutide.jpeg'),
    tagline: 'Agonis reseptor GLP-1 yang dipelajari untuk manajemen berat badan.',
    description:
      'Semaglutide adalah peptida agonis GLP-1 yang diriset untuk manajemen berat badan, regulasi glukosa darah, dan penekanan sinyal lapar.',
    dosage: '200 klik · 20 klik = 0.5mg',
    cartridgePrice: 'Rp1.800.000',
    cartridgeOriginalPrice: 'Rp2.350.000',
    penPrice: 'Rp2.800.000',
    penOriginalPrice: 'Rp3.350.000',
  },
  {
    slug: 'cjc-1295-ipamorelin',
    name: 'CJC-1295 (No DAC) 5mg + Ipamorelin 5mg',
    category: 'PERTUMBUHAN & PEMBENTUKAN OTOT',
    image: getAssetPath('/products/cjc1295-ipamorelin.jpeg'),
    tagline: 'Formulasi analog GHRH + ghrelin untuk riset hormon pertumbuhan.',
    description:
      'Kombinasi sinergis dari CJC-1295 (No DAC), analog GHRH, dan Ipamorelin, sekretagog hormon pertumbuhan selektif. Dipelajari bersama untuk pelepasan hormon pertumbuhan impulsif, pemulihan, dan penunjang jaringan otot.',
    dosage: '200 klik · 20 klik = 1mg',
    cartridgePrice: 'Rp1.300.000',
    cartridgeOriginalPrice: 'Rp1.750.000',
    penPrice: 'Rp2.300.000',
    penOriginalPrice: 'Rp2.750.000',
  },
  {
    slug: 'hgh',
    name: 'HGH (Somatropin) 10IU',
    category: 'REGENERASI & ANABOLISME',
    image: getAssetPath('/products/hgh.jpeg'),
    tagline: 'Hormon rekombinan Somatropin untuk regenerasi sel dan anabolisme.',
    description:
      'HGH (Human Growth Hormone / Somatropin) dipelajari untuk stimulasi pertambahan massa otot, pemulihan jaringan ikat, peningkatan kepadatan tulang, dan anti-penuaan.',
    dosage: '200 klik · 20 klik = 1IU',
    cartridgePrice: 'Rp3.000.000',
    cartridgeOriginalPrice: 'Rp3.575.000',
    penPrice: 'Rp4.000.000',
    penOriginalPrice: 'Rp4.575.000',
  },
  {
    slug: 'kpv',
    name: 'KPV 10mg',
    category: 'ANTI-INFLAMASI & IMUNITAS',
    image: getAssetPath('/products/kpv.jpeg'),
    tagline: 'Tripeptida turunan alpha-MSH untuk efek anti-inflamasi kuat.',
    description:
      'KPV (Lys-Pro-Val) adalah tripeptida yang diteliti untuk kemampuannya meredakan peradangan usus, mempercepat penyembuhan luka, serta meredakan respon imun berlebih.',
    dosage: '200 klik · 20 klik = 1mg',
    cartridgePrice: 'Rp1.300.000',
    cartridgeOriginalPrice: 'Rp1.680.000',
    penPrice: 'Rp2.300.000',
    penOriginalPrice: 'Rp2.680.000',
  },
  {
    slug: 'semax',
    name: 'Semax 10mg',
    category: 'NOOTROPIK & FOKUS KOGNITIF',
    image: getAssetPath('/products/semax.jpeg'),
    tagline: 'Peptida nootropik untuk BDNF, fokus mental, dan neuroproteksi.',
    description:
      'Semax adalah peptida sintetis turunan ACTH yang dipelajari untuk peningkatan fungsi kognitif, kejelasan mental, memori, serta perlindungan sel saraf dari stres oksidatif.',
    dosage: '200 klik · 20 klik = 1mg',
    cartridgePrice: 'Rp1.200.000',
    cartridgeOriginalPrice: 'Rp1.850.000',
    penPrice: 'Rp2.200.000',
    penOriginalPrice: 'Rp2.850.000',
  },
  {
    slug: 'selank',
    name: 'Selank 10mg',
    category: 'ANSIOLITIK & KESEHATAN MENTAL',
    image: getAssetPath('/products/selank.jpeg'),
    tagline: 'Peptida imunomodulator & ansiolitik untuk relaksasi tanpa kantuk.',
    description:
      'Selank adalah peptida turunan Tuftsin yang diriset untuk modulasi kecemasan, stabilisasi mood, serta dukungan kesehatan mental tanpa efek sedatif.',
    dosage: '200 klik · 20 klik = 1mg',
    cartridgePrice: 'Rp1.200.000',
    cartridgeOriginalPrice: 'Rp1.850.000',
    penPrice: 'Rp2.200.000',
    penOriginalPrice: 'Rp2.850.000',
  },
  {
    slug: 'glutathione',
    name: 'Glutathione 1500mg',
    category: 'ANTIOKSIDAN & DETOKSIFIKASI',
    image: getAssetPath('/products/glutathione.jpeg'),
    tagline: 'Antioksidan master seluler untuk detoksifikasi dan kesehatan sel.',
    description:
      'Glutathione adalah antioksidan paling utama dalam tubuh seluler yang diriset untuk netralisasi radikal bebas, kesehatan hati, serta pencerahan & regenerasi jaringan.',
    dosage: '200 klik · 20 klik = 150mg',
    cartridgePrice: 'Rp800.000',
    cartridgeOriginalPrice: 'Rp1.050.000',
    penPrice: 'Rp1.300.000',
    penOriginalPrice: 'Rp2.050.000',
  },
  {
    slug: 'klow80',
    name: 'KLOW80',
    category: 'FORMULASI PEMULIHAN & PENYEMBUHAN',
    image: getAssetPath('/products/klow80.jpeg'),
    tagline: 'Formulasi multi-peptida yang dipelajari untuk perbaikan dan pemulihan.',
    description:
      'KLOW80 adalah formulasi pemulihan multi-peptida yang menggabungkan senyawa regeneratif dan reparatif. Diriset untuk perbaikan jaringan, kualitas kulit, dan penunjang pemulihan menyeluruh dalam satu format praktis.',
    dosage: '200 klik',
    cartridgePrice: 'Rp3.900.000',
    cartridgeOriginalPrice: 'Rp5.000.000',
    penPrice: 'Rp4.900.000',
    penOriginalPrice: 'Rp6.000.000',
  },
  {
    slug: 'mots-c',
    name: 'MOTS-C 10mg',
    category: 'METABOLISME & KESEHATAN SEL',
    image: getAssetPath('/products/mots-c.jpeg'),
    tagline: 'Peptida turunan mitokondria untuk riset metabolik.',
    description:
      'MOTS-C adalah peptida turunan mitokondria yang dipelajari untuk perannya dalam regulasi metabolik, sensitivitas insulin, dan energi seluler. Senyawa yang semakin diminati dalam riset metabolik dan umur panjang.',
    dosage: '200 klik · 100 klik = 5mg',
    cartridgePrice: 'Rp1.250.000',
    cartridgeOriginalPrice: 'Rp1.475.000',
    penPrice: 'Rp3.250.000',
    penOriginalPrice: 'Rp4.250.000',
  },
  {
    slug: 'nad-plus',
    name: 'NAD+ 500mg',
    category: 'REGENERASI & KESEHATAN SEL',
    image: getAssetPath('/products/nad-plus.jpeg'),
    tagline: 'Koenzim utama untuk energi dan perbaikan seluler.',
    description:
      'NAD+ (nicotinamide adenine dinucleotide) adalah koenzim utama untuk produksi energi seluler dan perbaikan DNA. Dipelajari secara luas dalam riset regenerasi dan ketahanan hidup sel pada konsentrasi tinggi 500mg.',
    dosage: '200 klik · 20 klik = 50mg',
    cartridgePrice: 'Rp2.800.000',
    cartridgeOriginalPrice: 'Rp3.200.000',
    penPrice: 'Rp3.800.000',
    penOriginalPrice: 'Rp4.200.000',
  },
  {
    slug: 'tesamorelin',
    name: 'Tesamorelin 10mg',
    category: 'PENURUNAN LEMAK & PERTUMBUHAN',
    image: getAssetPath('/products/tesamorelin.jpeg'),
    tagline: 'Analog GHRH yang dipelajari untuk lemak viseral dan dukungan GH.',
    description:
      'Tesamorelin adalah analog GHRH terstabilkan yang dipelajari untuk efeknya terhadap pengurangan lemak viseral dan stimulasi hormon pertumbuhan. Disediakan dalam cartridge riset 10mg.',
    dosage: '200 klik · 40 klik = 2mg',
    cartridgePrice: 'Rp2.200.000',
    cartridgeOriginalPrice: 'Rp3.000.000',
    penPrice: 'Rp3.200.000',
    penOriginalPrice: 'Rp4.000.000',
  },
  {
    slug: 'bpc-157',
    name: 'BPC-157 10mg',
    category: 'PEMULIHAN & PERBAIKAN',
    image: getAssetPath('/products/bpc-157.jpg'),
    tagline: 'Senyawa pelindung tubuh yang dipelajari untuk perbaikan jaringan.',
    description:
      'BPC-157 adalah pentadrapeptida lambung stabil yang dipelajari secara ekstensif untuk perbaikan jaringan, pemulihan tendon dan ligamen, serta kesehatan pencernaan dalam riset preklinis.',
    dosage: '200 klik · 10 klik = 0.5mg',
    cartridgePrice: 'Rp1.500.000',
    cartridgeOriginalPrice: 'Rp1.855.000',
    penPrice: 'Rp2.500.000',
    penOriginalPrice: 'Rp2.855.000',
  },
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu 100mg',
    category: 'KULIT & REGENERASI',
    image: getAssetPath('/products/ghk-cu.jpeg'),
    tagline: 'Peptida tembaga yang dipelajari untuk regenerasi kulit.',
    description:
      'GHK-Cu adalah tripeptida tembaga alami yang dipelajari untuk regenerasi kulit, sintesis kolagen, dan penyembuhan luka. Disediakan dalam konsentrasi tinggi 100mg untuk penggunaan riset.',
    dosage: '200 klik · 40 klik = 2mg',
    cartridgePrice: 'Rp2.000.000',
    cartridgeOriginalPrice: 'Rp2.400.000',
    penPrice: 'Rp3.000.000',
    penOriginalPrice: 'Rp3.400.000',
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, limit)
}
