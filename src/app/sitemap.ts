import { MetadataRoute } from 'next';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hmrdiensten.nl';
  const now = new Date();

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/diensten/${service.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    ...serviceUrls,
  ];
}
