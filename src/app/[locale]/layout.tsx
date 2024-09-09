import type { Metadata } from "next";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';


export const metadata: Metadata = {
  title: "Pharmacon",
  description: "Because Health Deserves Quality",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  console.log('first')
  return (
    <html lang={locale}>
      <body
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
        className={`bg-background text-foreground font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

