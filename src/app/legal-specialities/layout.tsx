import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "Trusted Discrimination Lawyers Serving New Jersey & New York",
  description:
    "Explore workplace discrimination laws with Lucianna Law Firm. Our experienced attorneys in Fort Lee, New Jersey, New York, and the US Virgin Islands specialize in protecting employees' rights against discrimination based on race, color, sex, religion, and more. Contact us for legal advice and representation.",
  keywords:
    "workplace discrimination lawyer, employment discrimination attorney, discrimination law firm, New Jersey discrimination lawyer, New York employment law attorney, US Virgin Islands legal counsel, Palisades Park NJ, Edgewater NJ, Cliffside Park NJ, Ridgefield NJ, Ridgefield Park NJ, Englewood NJ, Fairview NJ, Teaneck NJ, Little Ferry NJ, North Bergen NJ, Guttenberg NJ, Hackensack NJ, West New York NJ, Tenafly NJ, Bergenfield NJ",
  openGraph: {
    title: "Trusted Discrimination Lawyers Serving New Jersey & New York",
    description:
      "Nancy E. Lucianna Law Firm offers expert legal services in criminal defense, personal injury, workplace discrimination, workers’ compensation, and police misconduct cases in New Jersey and New York.",
    url: "https://www.luciannalaw.com/work-place-discrimination.html",
    images: [
      {
        url: "https://www.luciannalaw.com/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nancy E. Lucianna Law Firm",
      },
    ],
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nancy E. Lucianna Law Firm",
  url: "https://www.luciannalaw.com/",
  logo: "https://www.luciannalaw.com/logo.png",
  image: "https://www.luciannalaw.com/office.jpg",
  description:
    "Expert legal services in criminal defense, personal injury, workplace discrimination, workers’ compensation, and police misconduct in New Jersey and New York.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Fort Lee",
    addressRegion: "NJ",
    postalCode: "07024",
    addressCountry: "US",
  },
  telephone: "+1-201-555-1234",
  areaServed: ["New Jersey", "New York", "United States Virgin Islands"],
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
