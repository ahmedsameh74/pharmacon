// import type { Metadata } from 'next';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Cairo } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import Navbar from '@/components/custom/home/Navbar';
import Footer from '@/components/custom/home/Footer';

const cairo = Cairo({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

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
      <body
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        className={`${cairo.className} bg-background text-foreground antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
