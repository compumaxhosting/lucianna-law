import ContactBar from "@/components/ContactBar";
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
          <SectionHeading>Worker&apos;s Compensation</SectionHeading>
        </div>
        <div className="container mx-auto max-w-6xl">
          <p className="text-white mt-4 text-lg bg-mainBlue">
            There is the number of workplace deaths recorded in 2019 has
            increased by about 3% from the previous year to more than 3,200
            deaths in the US, the largest tally of the past six years, the
            agency said. In NYC state, where the Law Offices of Nancy E.
            Lucianna is based, there were 200+ workplace deaths in 2018, which
            ranked third nationally behind Texas and California. Not all workers
            are related injury results in fatalities, but ignorance by an
            employer to his injured or ill employee should immediately consult a
            lawyer to consider his or her legal extensive options. We are the
            best NJ injury lawyer as a US citizen recognized personal injury law
            firm, Lucianna law is dedicated to helping people who are injured
            and in a need of an attorney and assisting family members whose
            loved ones were killed during a job. Let our skilled lawyer’s help
            you get the compensation that you deserve.
          </p>
        </div>
      </div>
      <BackToTop />
      <Footer />
      <ContactBar />
    </div>
  );
};

export default page;
