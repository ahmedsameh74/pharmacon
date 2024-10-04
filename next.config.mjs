import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // {
          //   key: 'Cache-Control',
          //   value: 'no-store, must-revalidate'
          // },
          {
            key: 'Last-Modified',
            value: new Date().toUTCString() // Dynamically set last modified time
          }
        ]
      }
    ];
  }
};

export default withNextIntl(nextConfig);
