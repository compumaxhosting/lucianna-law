import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Marcellus } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  weight: '400', //  '400' is the only supported weight
  subsets: ['latin'], //  You may need to adjust subsets based on your needs
  display: 'swap', // Recommended for performance
});

export const metadata: Metadata = {
  title: "Fort Lee Criminal Defense & Personal Injury Attorneys | luciannalaw.com",
  description: "Explore expert legal services in Criminal Defense Attorneys , Personal Injury, Workplace Discrimination, and Workers' Compensation at The Law Offices of Nancy E. Lucianna. Serving clients across New Jersey, New York, and the United States Virgin Islands.",
  keywords:
    "Brownstone restoration NYC, Masonry services Brooklyn, Brownstone construction Manhattan, Masonry contractors Bronx, Renovation services Queens, Brownstone repair NYC, Infinity Construction NYC, Quality masonry Brooklyn, Brownstone renovation NYC, NYC masonry experts",
  openGraph: {
    title: "Fort Lee Criminal Defense & Personal Injury Attorneys | luciannalaw.com",
    description:
      "Explore expert legal services in Criminal Defense Attorneys , Personal Injury, Workplace Discrimination, and Workers' Compensation at The Law Offices of Nancy E. Lucianna. Serving clients across New Jersey, New York, and the United States Virgin Islands.",
    url: "https://www.luciannalaw.com/",
    images: [
      {
        url: "https://www.luciannalaw.com/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Law Offices of NANCY E. LUCIANNA",
      },
    ],
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Law Offices of NANCY E. LUCIANNA",
  "url": "https://www.luciannalaw.com/",
  "logo": "https://www.luciannalaw.com/logo.png",
  "image": "https://www.luciannalaw.com/hero-image.png",
  "description": "Infinity Construction NYC specializes in home improvements and remodeling in New York.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": " 1809 Albany Ave ",
    "addressLocality": " Brooklyn ",
    "addressRegion": "NY",
    "postalCode": " 11210 ",
    "addressCountry": "US",
  },
  "telephone": "+1- 347 939 5779",
  "openingHoursWeekdays": "Monday to friday 07:00- 22:00",
  "openingHoursWeekends": "saturday-sunday 07:00- 12=7:00",

  "sameAs": [
    "https://www.facebook.com/infinityconstructionnyc",
    "https://www.instagram.com/infinityconstructionnyc",
    "https://www.linkedin.com/company/infinityconstructionnyc",
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128", // replace with actual latitude
    "longitude": "-74.0060", // replace with actual longitude
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-mainBlue">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${marcellus.className} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  );
}
