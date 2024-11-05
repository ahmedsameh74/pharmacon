import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Home | Pharmacon Egypt',
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
    title: 'Pharmacon Egypt',
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
    title: 'Pharmacon Egypt',
    description: 'Because Health Deserves Quality',
    card: 'summary_large_image',
    images: ['/assets/logo_1200_630.png']
  }
};

export default function RootPage() {
  redirect('/en');
}
