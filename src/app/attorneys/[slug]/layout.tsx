import { attorneyData } from "@/data/attorneyData";
import { Metadata } from "next";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params; // <-- await here
  const attorney = attorneyData.find(
    (item) => item.slug === resolvedParams.slug
  );

  if (!attorney) {
    return {
      title: "Attorney Not Found",
      description: "No attorney details available for this profile.",
    };
  }

  return {
    title: attorney.metaTitle,
    description: attorney.metaDescription,
    keywords: attorney.metaKeywords,
    openGraph: {
      title: attorney.metaTitle,
      description: attorney.metaDescription,
      type: "profile",
    },
  };
}

export default async function Layout({ children, params }: LayoutProps) {
  const resolvedParams = await params; // <-- await here

  const attorney = attorneyData.find(
    (item) => item.slug === resolvedParams.slug
  );

  if (!attorney) {
    return <div>Attorney not found.</div>;
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: attorney.name,
    jobTitle: "Attorney at Law",
    image: `https://luciannalaw.com/${attorney.imgPath}`, // Replace with your actual domain
    url: `https://luciannalaw.com/attorneys/${attorney.slug}`,
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
