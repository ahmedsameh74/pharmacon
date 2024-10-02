// import type { Metadata } from 'next';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Cairo } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import Head from 'next/head';

import Navbar from '@/components/custom/home/Navbar';
import Footer from '@/components/custom/home/Footer';

const cairo = Cairo({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  icons: {
    icon: [
      '/assets/logo-icon.ico',
      '/assets/icon32_32.png',
      '/assets/icon16_16.png'
    ],
    apple: '/assets/blueLogo.png',
    shortcut: [
      '/assets/logo-icon.ico',
      '/assets/icon32_32.png',
      '/assets/icon16_16.png'
    ]
  },
  manifest: '/manifest.webmanifest',
  keywords: [
    'Pharmacon',
    'PharmaconEG',
    'EG',
    'eg',
    'Health',
    'Quality',
    'Products',
    'Pharmacy',
    'فارماكون'
  ]
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <meta
        name="google-site-verification"
        content="ZGdt9gveuJPMGerJgwkQskPy1WdFlR-l5jW_tzvIlj4"
      />
      <Head>
        <link rel="icon" href="/assets/logo-icon.ico" sizes="any" />
        <link
          rel="icon"
          href="/assets/icon32_32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/assets/icon16_16.png"
          sizes="16x16"
          type="image/png"
        />
      </Head>
      <body
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        className={`${cairo.className} bg-background text-foreground antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="top-12 relative">
            {children}
            <SpeedInsights />
            <Analytics />
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
