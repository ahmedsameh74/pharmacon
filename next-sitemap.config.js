/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site-url.com', // Add your site URL
  generateRobotsTxt: true, // Automatically generate robots.txt
  changefreq: 'daily', // Set change frequency for SEO
  priority: 0.7, // Default priority
  exclude: ['/admin/*'], // Exclude private or admin pages
  alternateRefs: [
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL}/en`,
      hreflang: 'en'
    },
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL}/ar`,
      hreflang: 'ar'
    }
  ],
  additionalPaths: async (config) => {
    const locales = ['en', 'ar'];
    const pages = [
      '/products',
      '/about',
      '/contact',
      '/faq',
      '/terms-of-service',
      '/privacy-policy'
    ];

    const ids = ['1', '2', '3']; // Replace with actual IDs from your data
    const localizedPaths = [];

    // Static pages
    for (const locale of locales) {
      pages.forEach((page) => {
        localizedPaths.push({
          loc: `/${locale}${page}`,
          changefreq: config.changefreq,
          priority: config.priority
        });
      });
    }

    // Dynamic pages
    for (const locale of locales) {
      ids.forEach((id) => {
        localizedPaths.push({
          loc: `/${locale}/products/${id}`,
          changefreq: config.changefreq,
          priority: config.priority
        });
      });
    }

    // console.log('Generated localized paths:', localizedPaths); // Debugging line
    return localizedPaths;
  },

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin/' } // Exclude admin pages
    ]
  },
  // Use transform function to add locale-based paths
  transform: async (config, path) => {
    const locales = ['en', 'ar']; // Define your locales
    return locales.map((locale) => ({
      loc: `/${locale}${path}`, // Prefix the locale to the path
      changefreq: config.changefreq,
      priority: config.priority,
      alternateRefs: locales.map((l) => ({
        href: `${process.env.NEXT_PUBLIC_SITE_URL}/${l}${path}`,
        hreflang: l
      }))
    }));
  }
};

module.exports = config;
