import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "Top-Rated Attorneys Serving Fort Lee, New Jersey & New York",
  description:
    "Top-rated attorneys serving Fort Lee, New Jersey, and surrounding areas at Lucianna Law Firm. Our experienced legal team provides expert counsel in various practice areas, including criminal defense, personal injury, Police Misconduct Attorney, and more. Contact us today for reliable legal representation tailored to your needs.",
  keywords:
    "New Jersey, New York legal services, Lucianna Law Firm, criminal defense attorney, personal injury lawyer, family law firm, immigration attorney, business litigation, estate planning, real estate law, civil litigation, employment law, contract disputes, intellectual property, trial lawyers, legal advice",
  openGraph: {
    title: "Top-Rated Attorneys Serving Fort Lee, New Jersey & New York",
    description:
      "Reliable legal representation in Fort Lee, NJ, and New York with top-rated attorneys in criminal defense, personal injury, police misconduct, and more.",
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
    "Top-rated attorneys in Fort Lee, NJ, specializing in criminal defense, personal injury, police misconduct, family law, and more.",
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
    "Englewood",
    "Teaneck",
    "New York",
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
      {/* No extra content like Header or Footer here */}
      {children}

      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://www.facebook.com/luciannalaw"
          target="_blank"
          aria-label="Visit our Facebook page"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://x.com/i/flow/login?redirect_after_login=%2Fluciannalaw"
          target="_blank"
          aria-label="Follow us on X"
          rel="noopener noreferrer"
        >
          <i className="fab fa-x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/luciannalaw/"
          target="_blank"
          aria-label="Connect with us on LinkedIn"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          aria-label="Follow us on Instagram"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
