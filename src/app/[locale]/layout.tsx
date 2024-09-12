import type { Metadata } from 'next';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import Navbar from '@/components/custom/home/Navbar';
import Footer from '@/components/custom/home/Footer';

export const metadata: Metadata = {
  title: 'Pharmacon',
  description: 'Because Health Deserves Quality',
  icons: {
    icon: 'assets/logo icon.ico',
    apple: 'assets/logo icon.ico'
  },
  manifest: '/manifest.webmanifest',
  keywords: ['Pharmacon', 'Health', 'Quality', 'Products', 'Pharmacy'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    title: 'Pharmacon',
    description: 'Because Health Deserves Quality',
    url: 'https://pharmaconeg-dev.vercel.app/',
    siteName: 'Pharmacon',
    images: [
      {
        url: 'assets/blueLogo.svg',
        width: 800,
        height: 600
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    title: 'Pharmacon',
    description: 'Because Health Deserves Quality',
    card: 'summary_large_image',
    images: ['assets/blueLogo.svg']
  }
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
      <body
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        className={`bg-background text-foreground font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
