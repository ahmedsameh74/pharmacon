import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Cairo } from 'next/font/google';
// import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

import Navbar from '@/components/custom/home/Navbar';

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then((mod) => mod.Analytics),
  {
    ssr: false
  }
);
const Footer = dynamic(() => import('@/components/custom/home/Footer'));

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const cairo = Cairo({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Pharmacon Egypt',
  description:
    'Pharmacon is Germany - Egyptian promising pharmaceutical company dedicated to promote under license high quality products in the Egyptian market. Pharmacon founded in the Egyptian pharmaceutical market since 2004.',
  viewport: 'width=device-width, initial-scale=1',
  category: 'Pharmacy',
  authors: [{ name: 'Pharmacon Egypt', url: 'https://www.pharmaconeg.com' }],
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
  icons: {
    icon: [
      '/assets/favicon.ico',
      '/assets/icon32_32.png',
      '/assets/icon16_16.png'
    ],
    apple: '/assets/blueLogo.png',
    shortcut: [
      '/assets/favicon.ico',
      '/assets/icon32_32.png',
      '/assets/icon32_32.ico',
      '/assets/icon16_16.png',
      '/assets/icon16_16.ico'
    ]
  },
  manifest: '/manifest.webmanifest',
  keywords: [
    'Pharmacon Egypt',
    'Pharmacon Eg',
    'PharmaconEg',
    'Pharmacon Egy',
    'PharmaconEgy',
    'Pharmacon',
    'Pharmacon Pharmaceuticals',
    'Because Health Deserves Quality',
    'Pharmacon health products',
    'Pharmacon quality healthcare',
    'healthcare products',
    'pharmaceutical products',
    'pharmacy services',
    'pharmacy supplies',
    'online pharmacy Egypt',
    'buy health products online',
    'medical supplies',
    'health and wellness',
    'quality pharmacy products',
    'healthcare solutions',
    'Pharmacon pharmacy',
    'فارماكون',
    'فارماكون مصر',
    'منتجات الرعاية الصحية',
    'منتجات طبية',
    'خدمات الصيدلية',
    'منتجات طبية عالية الجودة',
    'pharmacy health products',
    'pharmaceutical healthcare solutions',
    'Egyptian pharmaceutical company',
    'licensed pharmaceutical products',
    'healthcare innovations',
    'buy pharmacy products online',
    'pharmaceutical distribution in Egypt',
    'pharmaceutical company Egypt',
    'online health services Egypt',
    'pharmacy products for health',
    'medical equipment supplies',
    'health and pharmaceutical excellence',
    'Pharmacon pharmacy online',
    'pharmacy solutions Egypt',
    'trusted pharmacy services',
    'pharmaceutical expertise',
    'Pharmacon Egypt online pharmacy',
    'الصيدلية اونلاين',
    'أدوية فارماكون',
    'مستحضرات صيدلانية مصر',
    'Acetylcysteine',
    'Advanced advice',
    'Agency',
    'Antibiotic',
    'Area assistance',
    'Bendalis',
    'Biofactor',
    'Biological',
    'Biomedical',
    'Care clients',
    'Collaborations',
    'Companies',
    'Connect',
    'Contact',
    'Copyright',
    'Cutting-edge',
    'Dedicated',
    'Deserves',
    'Device',
    'Diversified',
    'Egyptian healthcare',
    'Enable',
    'European excellence',
    'Experience',
    'Feedback',
    'Founded',
    'Free healthcare',
    'Germany',
    'Global healthcare',
    'Health innovation',
    'Help',
    'Hidona',
    'High quality',
    'Home healthcare',
    'Improve innovation',
    'Innovative technologies',
    'Italy',
    'Leaders in healthcare',
    'Learn',
    'Licenses',
    'Locally',
    'Main market',
    'Medical devices',
    'Medication',
    'Menu',
    'Monuril',
    'Need',
    'Network',
    'Offer',
    'Open network',
    'Patients',
    'Pharmaceutical companies',
    'Pharmacon',
    'Policy',
    'Portfolio',
    'Privacy',
    'Products',
    'Promising healthcare',
    'Promote',
    'Provide quality',
    'Providing solutions',
    'Quality care',
    'Reach patients',
    'Regions',
    'Regular reviews',
    'Rights',
    'Romania',
    'Rompharm',
    'Serve clients',
    'Services',
    'Solutions',
    'Source',
    'Standards',
    'Success',
    'Switzerland',
    'Technologies',
    'Terms',
    'Therapeutic',
    'Trusted healthcare',
    'Unique solutions',
    'Worldwide network',
    'Years of experience',
    'Zambon'
  ],
  openGraph: {
    title: 'PharmaconEG',
    description: 'Because Health Deserves Quality',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    siteName: 'PharmaconEG',
    images: [
      {
        url: '/assets/logo_1200_630.png',
        width: 1200,
        height: 600
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    title: 'PharmaconEG',
    description: 'Because Health Deserves Quality',
    card: 'summary_large_image',
    images: ['/assets/logo_1200_630.png']
  }
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  const structeredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PharmaconEG',
    url: 'https://www.pharmaconeg.com',
    logo: 'https://www.pharmaconeg.com/assets/logo_1200_630.png',
    description: 'Because Health Deserves Quality',
    sameAs: [
      'https://www.facebook.com/pharmaconEgypt',
      'https://www.instagram.com/pharmaconeg',
      'https://www.linkedin.com/company/pharmacon-pharmaceuticals/',
      'https://www.youtube.com/@pharmaconpharmaceuticals6630'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '30.065472, 31.3367497',
      addressLocality: 'Cairo',
      addressRegion: 'Cairo Governorate',
      postalCode: '11865',
      addressCountry: {
        '@type': 'Country',
        name: 'EG'
      }
    },
    location: {
      '@type': 'Place',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.065472,
        longitude: 31.3367497
      }
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+201005883192',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Arabic']
    }
  };

  return (
    <html lang={locale}>
      <Head>
        <meta
          name="google-site-verification"
          content="ZGdt9gveuJPMGerJgwkQskPy1WdFlR-l5jW_tzvIlj4"
        />
        <meta name="msvalidate.01" content="78226DAED18F7A9A397A8E25B1B861C5" />
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
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
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structeredData)
          }}
        />
      </Head>
      <body
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        className={`${cairo.className} bg-background text-foreground antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="top-12 relative m-0 p-0">
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
        {/* <SpeedInsights /> */}
        <Analytics />
      </body>
    </html>
  );
}
