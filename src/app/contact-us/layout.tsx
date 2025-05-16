import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title: "Contact Lucianna Law | Top Criminal Defense Attorney Near Me",
  description:
    "Get in touch with the Law Offices of Nancy E. Lucianna, a trusted criminal defense attorney with 38+ years of experience. Whether you need assistance with juvenile cases, white-collar crimes, or personal matters, we offer skilled and affordable legal representation. Contact us today to protect your rights and future.",
  keywords:
    "criminal defense attorney, best criminal defense attorney near me, affordable criminal defense attorney, top criminal defense attorney, juvenile criminal defense attorney, criminal defense attorney near me",
  openGraph: {
    title: "Contact Lucianna Law | Top Criminal Defense Attorney Near Me",
    description:
      "Get in touch with the Law Offices of Nancy E. Lucianna, a trusted criminal defense attorney with 38+ years of experience. Whether you need assistance with juvenile cases, white-collar crimes, or personal matters, we offer skilled and affordable legal representation. Contact us today to protect your rights and future.",
    url: "https://www.luciannalaw.com/contact.html",
    images: [
      {
        url: "https://www.luciannalaw.com/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Lucianna Law - Criminal Defense Attorneys",
      },
    ],
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Nancy E. Lucianna Law Firm",
  url: "https://www.luciannalaw.com/contact.html",
  logo: "https://www.luciannalaw.com/logo.png",
  image: "https://www.luciannalaw.com/office.jpg",
  description:
    "Contact Lucianna Law for top criminal defense representation with over 38 years of experience. Serving criminal defense cases including juvenile, white-collar, and personal matters.",
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
      {/* Only the content from the Contact page will be rendered */}
      {children}

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
