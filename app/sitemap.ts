import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const routes = [
    '',
    '/over',
    '/mentorship',
    '/groep',
    '/streams',
    '/faq',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
