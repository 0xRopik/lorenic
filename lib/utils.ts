import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string): string {
  if (!path) return path
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  if (cleanPath.startsWith('/lorenic/')) return cleanPath

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/lorenic'
  return `${basePath}${cleanPath}`
}

