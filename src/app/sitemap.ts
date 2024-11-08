import { promises as fs } from 'fs';
import path from 'path';

import type { MetadataRoute } from 'next';

import { Product } from './types/product';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const filePath = path.join(process.cwd(), 'public', 'products.json'); // Adjust the path based on the location of your file
  const fileContents = await fs.readFile(filePath, 'utf-8');

  const products: Product[] = JSON.parse(fileContents);

  const productUrls: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/products/${product.title}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7
  }));
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
          ar: `${process.env.NEXT_PUBLIC_SITE_URL}/ar`
        }
      }
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/assets/favicon.ico`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/about-us`,
          ar: `${process.env.NEXT_PUBLIC_SITE_URL}/ar/about-us`
        }
      }
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/products`,
          ar: `${process.env.NEXT_PUBLIC_SITE_URL}/ar/products`
        }
      }
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/contact`,
          ar: `${process.env.NEXT_PUBLIC_SITE_URL}/ar/contact`
        }
      }
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/faq`,
          ar: `${process.env.NEXT_PUBLIC_SITE_URL}/ar/faq`
        }
      }
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/privacy-policy`,
          ar: `${process.env.NEXT_PUBLIC_SITE_URL}/ar/privacy-policy`
        }
      }
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/terms-and-conditions`,
          ar: `${process.env.NEXT_PUBLIC_SITE_URL}/ar/terms-and-conditions`
        }
      }
    },
    ...productUrls
  ];
}
