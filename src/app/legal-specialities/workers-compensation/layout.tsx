import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Experienced Workers' Compensation Attorney in Fort Lee, NJ & New York",
  description:
    "Workers' compensation legal services at the Law Offices of Nancy E. Lucianna. Serving New Jersey, New York, and the US Virgin Islands, our attorneys specialize in protecting employees' rights to compensation for work-related injuries. Contact us for skilled legal representation.",
  keywords:
    "workers' compensation attorney, workplace injury lawyer, New Jersey workers' comp attorney, New York compensation claims, US Virgin Islands legal services, Nancy E. Lucianna law firm, Palisades Park NJ, Edgewater NJ, Cliffside Park NJ, Ridgefield NJ, Ridgefield Park NJ, Englewood NJ, Fairview NJ, Teaneck NJ, Little Ferry NJ, North Bergen NJ, Guttenberg NJ, Hackensack NJ, West New York NJ, Tenafly NJ, Bergenfield NJ",
  openGraph: {
    title:
      "Experienced Workers' Compensation Attorney in Fort Lee, NJ & New York",
    description:
      "Protecting employees' rights to compensation for workplace injuries in New Jersey, New York, and the US Virgin Islands.",
    url: "https://www.luciannalaw.com/workers-compensation.html",
    images: [
      {
        url: "https://www.luciannalaw.com/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "Workers' Compensation Lawyer Fort Lee NJ",
      },
    ],
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nancy E. Lucianna Law Firm",
  url: "https://www.luciannalaw.com/workers-compensation.html",
  logo: "https://www.luciannalaw.com/logo.png",
  image: "https://www.luciannalaw.com/office.jpg",
  description:
    "Specializing in workers' compensation claims and protecting employees' rights in New Jersey, New York, and the US Virgin Islands.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Fort Lee",
    addressRegion: "NJ",
    postalCode: "07024",
    addressCountry: "US",
  },
  telephone: "+1-201-555-1234",
  areaServed: ["Fort Lee", "New Jersey", "New York", "US Virgin Islands"],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.8509",
    longitude: "-73.9701",
  },
  sameAs: [
    "https://www.facebook.com/luciannalaw",
    "https://x.com/luciannalaw",
    "https://www.linkedin.com/in/luciannalaw/",
    "https://instagram.com",
  ],
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Only the content from the Workers' Compensation page will be rendered */}
      {children}

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
