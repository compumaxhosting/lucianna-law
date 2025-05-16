import { ReactNode } from "react";
import { attorneyData } from "@/data/attorneyData";
import { Metadata } from "next";

type LayoutProps = {
  children: ReactNode;
  params: {
    slug: string;
  };
};

// Dynamically generate metadata for SEO
export function generateMetadata({ params }: LayoutProps): Metadata {
  const attorney = attorneyData.find((item) => item.slug === params.slug);

  if (!attorney) {
    return {
      title: "Attorney Not Found",
      description: "No attorney details available for this profile.",
    };
  }

  return {
    title: attorney.title,
    description: attorney.description,
    keywords: attorney.keywords,
    openGraph: {
      title: attorney.title,
      description: attorney.description,
      type: "profile",
    },
  };
}

export default function AttorneyLayout({ children, params }: LayoutProps) {
  const attorney = attorneyData.find((item) => item.slug === params.slug);

  if (!attorney) return <div>Attorney not found.</div>;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: attorney.name,
    jobTitle: "Attorney at Law",
    telephone: attorney.number,
    email: attorney.email,
    image: `https://your-domain.com${attorney.imgPath}`, // replace with actual domain
    url: `https://your-domain.com/attorney/${attorney.slug}`,
    sameAs: [
      "https://x.com/luciannalaw",
      "https://www.facebook.com/luciannalaw",
      "https://www.linkedin.com/in/luciannalaw/",
      "https://www.instagram.com/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {children}
    </>
  );
}
