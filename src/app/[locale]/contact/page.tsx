import { Metadata } from 'next';

import ContactSection from '@/components/custom/contact/Contact';
// import Breadcrumb from '@/components/ui/Breadcrumb';
import ContactHeader from '@/components/custom/contact/ContactHeader';

export const metadata: Metadata = {
  title: 'Contact Us | Pharmacon',
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
    'Contact',
    'Contact Us',
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

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactSection />
    </>
  );
}
