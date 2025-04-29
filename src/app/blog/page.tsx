import BackToTop from "@/components/extras/BackToTop";
import SectionHeading from "@/components/extras/SectionHeading";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import Link from "next/link";
import React from "react";
import { blogData } from "@/data/blogData";

const page = () => {
  return (
    <div className="bg-mainBlue">
      <HeaderTop />
      <Header />
      <div className="border-b border-lightBlue/30 pb-6 md:pb-12 px-4">
        <div className="bg-mainBlue py-6">
          <SectionHeading>Blog</SectionHeading>
        </div>
        <div className="container mx-auto max-w-6xl">
          {blogData.map((data) => (
            <Link href={`/blog/${data.slug}`} key={data.id}>
              <div className="flex justify-center items-center bg-mainBrown text-white text-lg mt-4 py-5 w-full px-4 text-center">
                <div>{data.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default page;
