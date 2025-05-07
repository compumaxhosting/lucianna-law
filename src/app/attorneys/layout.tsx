import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "Meet Our Experienced Attorneys in New Jersey & New York",
  description:
    "Get to know the dedicated attorneys at Lucianna Law Firm. Our team of experienced lawyers in New York, New Jersey specializes in criminal defense, personal injury, family law, and more. Learn about our legal expertise and how we can assist you.",
  keywords:
    "attorneys Lucianna Law Firm, experienced lawyers New York, legal counsel criminal defense, personal injury attorney, family law firm, immigration lawyer, litigation services, estate planning, real estate law, civil litigation, employment law, contract disputes, intellectual property, trial attorneys, legal advice",
  openGraph: {
    title: "Meet Our Experienced Attorneys in New Jersey & New York",
    description:
      "Dedicated attorneys serving New Jersey and New York, specializing in criminal defense, personal injury, family law, and more.",
    url: "https://www.luciannalaw.com/",
    images: [
      {
        url: "https://www.luciannalaw.com/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucianna Law Firm",
      },
    ],
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Lucianna Law Firm",
  url: "https://www.luciannalaw.com/",
  logo: "https://www.luciannalaw.com/logo.png",
  image: "https://www.luciannalaw.com/office.jpg",
  description:
    "Experienced attorneys in New York and New Jersey, specializing in criminal defense, personal injury, family law, and more.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Fort Lee",
    addressRegion: "NJ",
    postalCode: "07024",
    addressCountry: "US",
  },
  telephone: "+1-201-555-1234",
  areaServed: ["New York", "New Jersey"],
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
      {/* Only the content from the About page will be rendered */}
      {children}

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
