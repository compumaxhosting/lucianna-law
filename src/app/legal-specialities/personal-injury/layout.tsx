import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "Fort Lee, NJ's Leading Personal Injury Attorneys | Lawyers NYC",
  description:
    "Expert legal counsel for personal injuries in New Jersey at Lucianna Law Firm. Our attorneys in Fort Lee and the US Virgin Islands specialize in cases involving medical malpractice, automobile accidents, nursing home abuse, and slip and falls. We navigate New Jersey's legal complexities, ensuring timely filing and strategic representation. Contact us to negotiate settlements or advocate on your behalf in trial.",
  keywords:
    "personal injury attorney Fort Lee NJ, medical malpractice lawyer Edgewater NJ, automobile accident attorney Cliffside Park NJ, nursing home abuse lawyer Ridgefield NJ, slip and fall attorney Ridgefield Park NJ, New Jersey statutes of limitations, legal consultation Englewood NJ, personal injury lawyer Fairview NJ, legal advice Teaneck NJ, Little Ferry law firm, North Bergen attorney services, Guttenberg NJ lawyer, Hackensack legal counsel, West New York NJ attorney, Tenafly law office, Bergenfield legal representation",
  openGraph: {
    title: "Fort Lee, NJ's Leading Personal Injury Attorneys | Lawyers NYC",
    description:
      "Lucianna Law Firm offers expert legal counsel for personal injury cases including medical malpractice, automobile accidents, nursing home abuse, and slip and falls in New Jersey and the US Virgin Islands.",
    url: "https://www.luciannalaw.com/personal-injury-or-wrongful-death.html",
    images: [
      {
        url: "https://www.luciannalaw.com/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "Personal Injury Lawyers in Fort Lee NJ",
      },
    ],
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Lucianna Law Firm",
  url: "https://www.luciannalaw.com/personal-injury-or-wrongful-death.html",
  logo: "https://www.luciannalaw.com/logo.png",
  image: "https://www.luciannalaw.com/office.jpg",
  description:
    "Expert personal injury attorneys in Fort Lee, NJ specializing in medical malpractice, automobile accidents, nursing home abuse, and slip and fall cases. Legal counsel available across New Jersey and the US Virgin Islands.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Fort Lee",
    addressRegion: "NJ",
    postalCode: "07024",
    addressCountry: "US",
  },
  telephone: "+1-201-555-1234",
  areaServed: [
    "Fort Lee",
    "Edgewater",
    "Cliffside Park",
    "Ridgefield",
    "Ridgefield Park",
    "US Virgin Islands",
  ],
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
      {/* Only the content from the Personal Injury page will be rendered */}
      {children}

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
