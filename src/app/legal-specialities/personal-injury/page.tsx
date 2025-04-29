import BackToTop from "@/components/extras/BackToTop";
import SectionHeading from "@/components/extras/SectionHeading";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

const page = () => {
  return (
    <div className="bg-mainBlue">
      <HeaderTop />
      <Header />
      <div className="border-b border-lightBlue/30 pb-6 md:pb-12 px-4">
        <div className="bg-mainBlue py-6">
          <SectionHeading>Personal Injury</SectionHeading>
        </div>
        <div className="container mx-auto max-w-6xl">
          <p className="text-white mt-4 text-lg bg-mainBlue">
            In New Jersey, personal injuries are very common and these cases
            cover a wide range of accidents like medical malpractice, automobile
            accidents, nursing home abuse and slip and falls. All of these cases
            have size statutes of limitations, so it&apos;s really important to
            discuss your case with a lawyer to determine how long you have to
            file a lawsuit. <br /> <br />
            Our personal injury attorneys in Fort Lee and the United States
            Virgin Islands have extensive experience with clients. We take time
            to listen to your case, we inform you the way of the applicable
            legal New Jersey rules and statutes. We&apos;ll determine the
            statute of limitations that concern to your injuries and file the
            documents with the court within the timelines. We work with a team
            of experts to examine the violation of duty, monetize financial and
            physical damages incurred and prove your claim. Law Offices of Nancy
            E. Lucianna will work with you to either settle with the accused out
            of court or constitute you in the trial.
          </p>
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default page;
