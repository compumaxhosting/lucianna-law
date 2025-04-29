"use client";

import BackToTop from "@/components/extras/BackToTop";
import SectionHeading from "@/components/extras/SectionHeading";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import { blogData } from "@/data/blogData";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();

  const data = blogData.find((item) => item.slug === slug);

  if (!data) {
    return null;
  }

  return (
    <div className="bg-mainBlue">
      <HeaderTop />
      <Header />
      <div className="max-w-6xl py-6 pb-8 flex flex-col gap-2 items-center mx-auto px-4 border-b border-lightBlue/40">
        <div className="flex flex-col gap-6 items-center w-full">
          <SectionHeading>{data.title}</SectionHeading>
          <span className="text-white text-lg">{data.content}</span>
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
}
