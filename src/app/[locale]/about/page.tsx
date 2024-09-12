import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pharmacon",
  description: "Because Health Deserves Quality",
  icons: {
    icon: "../assets/logo icon.ico",
    apple: "../assets/logo icon.ico",
  },
  manifest: "/manifest.webmanifest",
  keywords: ["Pharmacon", "Health", "Quality", "Products", "Pharmacy", "About"],
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
  },
	openGraph: {
		title: "Pharmacon",
		description: "Because Health Deserves Quality",
		url: "https://pharmaconeg-dev.vercel.app/",
		siteName: "Pharmacon",
		images: [
			{
				url: "../assets/blueLogo.svg",
				width: 800,
				height: 600,
			},
		],
		locale: "en-US",
		type: "website",
	},
  twitter: {
    title: "Pharmacon",
    description: "Because Health Deserves Quality",
    card: "summary_large_image",
    images: [
      "../assets/blueLogo.svg",
    ],
  },
};

export default function About() {
	return (
		<div>
			<h1>About</h1>
		</div>
	);
}