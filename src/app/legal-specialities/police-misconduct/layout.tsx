import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Police Misconduct Attorney in Fort Lee, NJ & New York | Lucianna Law Firm",
  description:
    "Lucianna Law Firm offers experienced representation for police misconduct cases in Fort Lee, NJ, and New York. Our attorneys specialize in defending civil rights and holding law enforcement accountable. Contact us for skilled legal advocacy.",
  keywords:
    "police misconduct attorney Fort Lee NJ, New York police brutality lawyer, civil rights attorney, Lucianna Law Firm, law enforcement accountability, New Jersey legal representation, US Virgin Islands lawyer, police brutality case Fort Lee, civil rights violations New York",
  openGraph: {
    title:
      "Police Misconduct Attorney in Fort Lee, NJ & New York | Lucianna Law Firm",
    description:
      "Lucianna Law Firm specializes in defending civil rights and holding law enforcement accountable for police misconduct and brutality in Fort Lee, NJ, New York, and the US Virgin Islands.",
    url: "https://www.luciannalaw.com/police-misconduct-attorneys.html",
    images: [
      {
        url: "https://www.luciannalaw.com/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "Police Misconduct Attorney Fort Lee NJ",
      },
    ],
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Lucianna Law Firm",
  url: "https://www.luciannalaw.com/police-misconduct-attorney-fort-lee-nj-ny.html",
  logo: "https://www.luciannalaw.com/logo.png",
  image: "https://www.luciannalaw.com/office.jpg",
  description:
    "Lucianna Law Firm offers expert legal representation for police misconduct cases in Fort Lee, NJ, and New York, defending civil rights and holding law enforcement accountable.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Fort Lee",
    addressRegion: "NJ",
    postalCode: "07024",
    addressCountry: "US",
  },
  telephone: "+1-201-555-1234",
  areaServed: ["Fort Lee", "New York", "US Virgin Islands"],
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
      {/* Only the content from the Police Misconduct page will be rendered */}
      {children}

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
