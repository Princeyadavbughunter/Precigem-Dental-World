import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Precigem Dental World | Best Dentist in Andheri West, Mumbai | Advanced Dental Implants",
  description: "Dr. Mayur Khairnar - Certified Periodontist & Implantologist with 17+ years experience. Full Mouth Rehabilitation, Immediate Loading Implants in Andheri West, Mumbai. Book appointment: +91 8308411139",
  keywords: "dentist Andheri West, dental clinic Mumbai, Dr. Mayur Khairnar, Dr. Darshana Khairnar, dental implants, Full Mouth Rehabilitation, Immediate Loading Implants, Precigem Dental World",
  authors: [{ name: "Dr. Mayur Khairnar" }],
  creator: "Precigem Dental World",
  publisher: "Precigem Dental World",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://precigemdentalworld.com/'), // Hypothetical URL, better than old one
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Precigem Dental World | Best Dentist in Andheri West, Mumbai",
    description: "Dr. Mayur Khairnar - Certified Periodontist & Implantologist with 17+ years experience. Advanced dental care in Andheri West, Mumbai.",
    url: 'https://precigemdentalworld.com/',
    siteName: "Precigem Dental World",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Precigem Dental World",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Precigem Dental World",
    description: "Advanced dental care with 17+ years experience in Andheri West, Mumbai",
    images: ['/og-image.jpg'],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
