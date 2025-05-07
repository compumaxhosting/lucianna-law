import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "Top-Rated Criminal Defense Lawyer in Fort Lee, NJ | New York",
  description:
    "Facing criminal charges in Fort Lee? With 38 years of experience in New Jersey, the Law Offices of Nancy E. Lucianna is here to protect your rights. Our dedicated team handles a range of crimes including sex crimes, drug offenses, theft, white-collar crimes, and juvenile offenses. Contact us today for a free consultation by appointment only.",
  keywords:
    "criminal defense Fort Lee NJ, top New Jersey lawyers, sex crimes attorney, drug crime defense, theft crime lawyer, white-collar crime attorney, juvenile crime defense, criminal defense consultation, United States Virgin Islands legal services",
  openGraph: {
    title: "Top-Rated Criminal Defense Lawyer in Fort Lee, NJ | New York",
    description:
      "Nancy E. Lucianna Law Firm offers expert criminal defense for various charges, including sex crimes, drug offenses, theft, white-collar crimes, and juvenile offenses in New Jersey and New York.",
    url: "https://www.luciannalaw.com/criminal-defense-attorneys-NJ-NY.html",
    images: [
      {
        url: "https://www.luciannalaw.com/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "Criminal Defense Lawyer Fort Lee NJ",
      },
    ],
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nancy E. Lucianna Law Firm",
  url: "https://www.luciannalaw.com/criminal-defense-attorneys-NJ-NY.html",
  logo: "https://www.luciannalaw.com/logo.png",
  image: "https://www.luciannalaw.com/office.jpg",
  description:
    "Expert criminal defense lawyer in Fort Lee, NJ, with 38 years of experience protecting clients' rights in sex crimes, drug offenses, theft, white-collar crimes, and juvenile offenses.",
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
      {/* Only the content from the Criminal Defense page will be rendered */}
      {children}

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
