"use client";

import BackToTop from "@/components/extras/BackToTop";
import SectionHeading from "@/components/extras/SectionHeading";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import { data } from "@/data/personalInjuryData";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();

  const caseData = data.find((item) => item.slug === slug);

  if (!caseData) {
    return (
      <p className="text-center text-red-500 text-xl mt-10">Case not found!</p>
    );
  }

  return (
    <div className="bg-mainBlue">
      <HeaderTop />
      <Header />
      <div className="max-w-6xl py-6 pb-8 flex flex-col gap-2 items-center mx-auto px-4 border-b border-lightBlue/40">
        <div className="flex flex-col gap-6 items-center w-full">
          <SectionHeading>{caseData.title}</SectionHeading>
          <span className="text-white text-lg">{caseData.content}</span>
        </div>
        {caseData.vehicleAccidents &&
          caseData.vehicleAccidents.map((accident) => (
            <div
              key={accident.id}
              className="flex items-center text-white text-lg w-full"
            >
              <div>🛑&nbsp;{accident.title}</div>
            </div>
          ))}
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
}
