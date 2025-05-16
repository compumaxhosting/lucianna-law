import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Best Criminal Defense Attorney Near Me | Serving New Jersey & New York",
  description:
    "Discover the expert legal services offered by the Law Offices of Nancy E. Lucianna. From criminal defense and juvenile law to personal injury and white-collar crimes, our 38+ years of experience ensure skilled and compassionate representation. Learn more about our practice areas today.",
  keywords:
    "criminal defense attorney, best criminal defense attorney near me, affordable criminal defense attorney, top criminal defense attorney, juvenile criminal defense attorney, criminal defense attorney near me, legal services, white-collar crimes attorney, personal injury attorney",
  openGraph: {
    title:
      "Best Criminal Defense Attorney Near Me | Serving New Jersey & New York",
    description:
      "Discover the expert legal services offered by the Law Offices of Nancy E. Lucianna. From criminal defense and juvenile law to personal injury and white-collar crimes, our 38+ years of experience ensure skilled and compassionate representation. Learn more about our practice areas today.",
    url: "https://www.luciannalaw.com/",
    images: [
      {
        url: "https://www.luciannalaw.com/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Criminal Defense Attorney Near Me",
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
    "Discover expert legal services including criminal defense, juvenile law, personal injury, and white-collar crimes. Serving New Jersey & New York with 38+ years of experience.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Fort Lee",
    addressRegion: "NJ",
    postalCode: "07024",
    addressCountry: "US",
  },
  telephone: "+1-201-555-1234",
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
      {/* Only the content from this page will be rendered */}
      {children}

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
