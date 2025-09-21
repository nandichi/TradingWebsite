import { Metadata } from 'next'

export function generatePageMetadata({
  title,
  description,
  path = '',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const baseUrl = 'https://aaronreugebrink.example'
  const fullUrl = `${baseUrl}${path}`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Aaron Reugebrink — Crypto Mentorship',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}
