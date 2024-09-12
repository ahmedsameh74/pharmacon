import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";


export const metadata: Metadata = {
  title: "Pharmacon",
  description: "Because Health Deserves Quality",
  icons: {
    icon: "assets/logo icon.ico",
    apple: "assets/logo icon.ico",
  },
  manifest: "/manifest.webmanifest",
  keywords: ["Pharmacon", "Health", "Quality", "Products", "Pharmacy"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

