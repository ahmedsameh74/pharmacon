import { Metadata } from 'next';

import AboutHead from '@/components/custom/about/AboutHead';
import Form from '@/components/ui/Form';

export const metadata: Metadata = {
  title: 'About | PharmaconEG',
  description: 'Because Health Deserves Quality',
  icons: {
    icon: '../assets/favicon.ico',
    apple: '../assets/favicon.ico'
  },
  manifest: '/manifest.webmanifest',
  keywords: ['About', 'Pharmacon About', 'About Us', 'About Pharmacon Egypt'],
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
    url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
    siteName: 'PharmaconEG',
    images: [
      {
        url: '../assets/blueLogo.svg',
        width: 400,
        height: 200
      }
    ],
    locale: 'en-US',
    type: 'website'
  }
  // twitter: {
  //   title: 'PharmaconEG',
  //   description: 'Because Health Deserves Quality',
  //   card: 'summary_large_image',
  //   images: ['../assets/blueLogo.svg']
  // }
};

export default function Careers() {
  return (
    <>
      <AboutHead image={'../../assets/aboutUsSection.webp'} title={'careers'} />
      {/* <StatsBanner />
      <OurService />
      <WhoWeAreDynamic />
      <ContactSectionDynamic /> */}
      <Form />
    </>
  );
}
