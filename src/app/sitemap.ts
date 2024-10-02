import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
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
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/assets/logo-icon.ico`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/about`,
          ar: `${process.env.NEXT_PUBLIC_SITE_URL}/ar/about`
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
    }
  ];
}
