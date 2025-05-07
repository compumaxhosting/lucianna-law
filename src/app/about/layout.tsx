import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Experienced Criminal Defense & Personal Injury Attorney in Fort Lee, NJ",
  description:
    "Looking for a reliable criminal defense or personal injury attorney in Fort Lee, NJ? Our firm specializes in workplace injury, workers’ compensation, and police misconduct cases in Edgewater, Palisades Park, and beyond. Contact us today!",
  keywords:
    "Criminal defense attorney Fort Lee NJ, personal injury attorney Fort Lee NJ, workplace injury attorney Edgewater NJ, workers’ compensation lawyer Palisades Park NJ, police misconduct attorney Cliffside Park NJ, legal services Ridgefield NJ, attorneys Englewood NJ, accident lawyer Fairview NJ, law firm Teaneck NJ, defense attorney Little Ferry NJ, injury attorney North Bergen NJ, litigation Guttenberg NJ, legal advice Hackensack NJ, trial lawyer West New York NJ, court representation Tenafly NJ, Bergenfield NJ attorney",
  openGraph: {
    title:
      "Experienced Criminal Defense & Personal Injury Attorney in Fort Lee, NJ",
    description:
      "Reliable legal representation in Fort Lee and nearby areas. Specializing in injury, compensation, and criminal defense.",
    url: "https://www.yourlawfirmdomain.com/",
    images: [
      {
        url: "https://www.yourlawfirmdomain.com/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "Law Firm in Fort Lee NJ",
      },
    ],
    type: "website",
  },
};

// Schema Markup
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Your Law Firm Name",
  url: "https://www.luciannalaw.com/",
  logo: "https://www.luciannalaw.com//logo.png",
  image: "https://www.luciannalaw.com//office.jpg",
  description:
    "Criminal defense and personal injury attorneys serving Fort Lee, NJ and surrounding towns.",
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
