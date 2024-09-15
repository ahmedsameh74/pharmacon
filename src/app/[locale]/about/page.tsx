import { Metadata } from 'next';

import AboutHead from '@/components/custom/about/AboutHead';
import StatsBanner from '@/components/custom/home/StatsBanner';
import OurService from '@/components/custom/about/OurService';
import WhoWeAre from '@/components/custom/about/WhoWeAre';
import ContactSection from '@/components/custom/home/ContactSection';

export const metadata: Metadata = {
  title: 'About | Pharmacon',
  description: 'Because Health Deserves Quality',
  icons: {
    icon: '../assets/logo icon.ico',
    apple: '../assets/logo icon.ico'
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
    'About'
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
    title: 'Pharmacon',
    description: 'Because Health Deserves Quality',
    url: 'https://pharmaconeg-dev.vercel.app/',
    siteName: 'Pharmacon',
    images: [
      {
        url: '../assets/blueLogo.svg',
        width: 400,
        height: 200
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    title: 'Pharmacon',
    description: 'Because Health Deserves Quality',
    card: 'summary_large_image',
    images: ['../assets/blueLogo.svg']
  }
};

export default function About() {
  return (
    <>
      <AboutHead image={'../../assets/aboutUsSection.png'} title={'about'} />
      <StatsBanner />
      <OurService />
      <WhoWeAre />
      <ContactSection />
    </>
  );
}
