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
          <SectionHeading>Work Place Descrimination</SectionHeading>
        </div>
        <div className="container mx-auto max-w-6xl">
          <p className="text-white mt-4 text-lg bg-mainBlue">
            Workplace discrimination refers to unfair treatment of an employee
            or job applicant based on certain characteristics protected by law.
            These characteristics can include race, color, sex, religion,
            national origin, age, disability, genetic information, and sometimes
            sexual orientation or gender identity, depending on the
            jurisdiction. <br /> <br />
            Workplace discrimination is illegal in many countries, and there are
            laws and regulations in place to protect individuals from such
            treatment. These laws vary by country and jurisdiction, but they
            typically include provisions for reporting discrimination,
            investigating complaints, and seeking remedies for victims.
            Additionally, many companies have internal policies and procedures
            to address and prevent discrimination in the workplace.
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
