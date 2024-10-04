// import About from '@/components/custom/home/About';
// import ContactSection from '@/components/custom/home/ContactSection';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

import Hero from '@/components/custom/home/Hero';
import Products from '@/components/custom/home/Products';
import StatsBanner from '@/components/custom/home/StatsBanner';
import Partners from '@/components/custom/home/Partners';

const ContactDynamic = dynamic(
  () => import('@/components/custom/home/ContactSection'),
  { ssr: false }
);
const AboutDynamic = dynamic(() => import('@/components/custom/home/About'), {
  ssr: false
});
// const StatsDynamic = dynamic(
//   () => import('@/components/custom/home/StatsBanner'),
//   {
//     ssr: false
//   }
// );

export const metadata: Metadata = {
  // title: 'PharmaconEG',
  // description: 'Because Health Deserves Quality',
  // icons: {
  //   icon: '/assets/favicon.ico',
  //   apple: '/assets/blueLogo.png'
  // },
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
  ],
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

export default function Home() {
  return (
    <>
      <Hero image={'../assets/dr2.jpg'} />
      <StatsBanner />
      <AboutDynamic />
      <Partners />
      <Products />
      <ContactDynamic />
    </>
  );
}
