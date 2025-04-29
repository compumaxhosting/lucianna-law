import BackToTop from "@/components/extras/BackToTop";
import SectionHeading from "@/components/extras/SectionHeading";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

const page = () => {
  const crimesWeCover = [
    "Abuse of prison guards",
    "Improper seizure",
    "Excessive force or violence",
    "Bites or mauling from police dogs",
    "False arrest",
    "Other injuries and injustices",
  ];
  return (
    <div className="bg-mainBlue">
      <HeaderTop />
      <Header />
      <div className="border-b border-lightBlue/30 pb-6 md:pb-12 px-4">
        <div className="bg-mainBlue py-6">
          <SectionHeading>Police Misconduct</SectionHeading>
        </div>
        <div className="container mx-auto max-w-6xl">
          <p className="text-white mt-4 text-lg bg-mainBlue">
            Most police officers are heroes who risk their lives to serve and
            protect. However, sometimes police officers overstep their bounds .
            She or he may violate an individual&apos;s constitutional rights or
            they may even cause serious injury or death. If you are a victim of
            such an incident or if you lost someone due to the excessive use of
            lethal force. You can trust the Law Offices of Nancy E. Lucianna in
            Fort Lee, New Jersey and New York. Our Lawyers have years of
            experience defending such legal rights.
          </p>
          <h4 className="text-lg md:text-xl font-bold my-4 text-white">
            Our Lawyers handles violations and police brutality cases involving:
          </h4>
          {crimesWeCover.map((crime, index) => (
            <div key={index}>
              <div className="flex items-center text-white text-lg mt-2 w-full">
                <div>🛑&nbsp;{crime}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default page;
