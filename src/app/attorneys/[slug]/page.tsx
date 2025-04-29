"use client";

import BackToTop from "@/components/extras/BackToTop";
import BreadcrumbSection from "@/components/extras/BreadcrumbSection";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import { attorneyData } from "@/data/attorneyData";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();

  const data = attorneyData.find((item) => item.slug === slug);

  if (!data) {
    return null;
  }

  return (
    <div className="bg-mainBlue">
      <HeaderTop />
      <Header />
      <BreadcrumbSection
        title="Attorney Details"
        path={`Home / Attorney-${data.id}`}
      />
      <div className="bg-white py-4 md:py-12">
        <div className="bg-lightBlue/15 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 p-6 pb-0">
            {/* Image Section */}
            <div className="w-full lg:w-4/12">
              <Image
                src={data.imgPath}
                alt="Attorney"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-8/12 flex flex-col justify-center">
              <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-semibold text-gray-900">
                    {data.name}
                  </h2>
                  <p className="text-lg text-gray-600">EXPERT LAWYER</p>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href="https://x.com/i/flow/login?redirect_after_login=%2Fluciannalaw"
                    target="_blank"
                    className="text-mainBlue hover:bg-mainBlue hover:text-white border border-mainBlue p-3 h-fit"
                  >
                    <FaXTwitter className="size-6" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/luciannalaw"
                    target="_blank"
                    className="text-mainBlue hover:bg-mainBlue hover:text-white border border-mainBlue p-3 h-fit"
                  >
                    <FaFacebookF className="size-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/luciannalaw/"
                    target="_blank"
                    className="text-mainBlue hover:bg-mainBlue hover:text-white border border-mainBlue p-3 h-fit"
                  >
                    <FaLinkedinIn className="size-6" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="text-mainBlue hover:bg-mainBlue hover:text-white border border-mainBlue p-3 h-fit"
                  >
                    <FaInstagram className="size-6" />
                  </Link>
                </div>
              </div>

              <hr className="my-4 border-t border-mainBrown/60" />

              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <p className="flex items-center gap-2 text-gray-700">
                  <IoCall className="text-mainBrown" />{" "}
                  <span className="font-medium">{data.number}</span>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-mainBrown" />{" "}
                  <span className="font-medium">{data.email}</span>
                </p>
              </div>

              <hr className="my-4 border-t border-mainBrown/60" />

              <h3 className="text-2xl font-semibold text-gray-800">
                Biography
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {data.mainContent}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 p-6 pb-0 ">
            {data.remainingContent}
          </div>
        </div>
      </div>
      <div className="w-full h-10 bg-mainBlue"></div>
      <BackToTop />
      <Footer />
    </div>
  );
}
