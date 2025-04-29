import BackToTop from "@/components/extras/BackToTop";
import SectionHeading from "@/components/extras/SectionHeading";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

const page = () => {
  const crimesWeCover = [
    "Sex Crimes",
    "Drug Crimes",
    "Theft Crimes",
    "White-Collar Crimes",
    "Juvenile Crimes",
  ];
  return (
    <div className="bg-mainBlue">
      <HeaderTop />
      <Header />
      <div className="border-b border-lightBlue/30 pb-6 md:pb-12 px-4">
        <div className="bg-mainBlue py-6">
          <SectionHeading>Criminal Defense</SectionHeading>
        </div>
        <div className="container mx-auto max-w-6xl">
          <p className="text-white mt-4 text-lg bg-mainBlue">
            When charged with a serious crime—whether it&apos;s a sex crime,
            drug crime, theft crime, white-collar crime, or juvenile crime—the
            stakes are incredibly high. At the Law Offices of Nancy E. Lucianna,
            we provide skilled and compassionate legal representation tailored
            to your unique needs. As a trusted criminal defense attorney with
            over 38 years of experience, Nancy E. Lucianna has successfully
            defended clients across New Jersey, tackling serious criminal
            felonies for both adults and juveniles. <br /> <br />
            Reach out today at Nlucianna@msn.com or 201-947-6484 for expert
            legal support. If you&apos;re searching for the best criminal
            defense attorney near me, look no further. We offer personalized
            strategies and swift action to protect your rights, build a strong
            defense, and secure the best possible outcome. As an affordable
            criminal defense attorney, we believe quality representation should
            be accessible to everyone facing these challenges. <br /> <br />
            Whether you need a juvenile criminal defense attorney or a top
            criminal defense attorney, we are here to guide you every step of
            the way. Contact us today for a free consultation, and let us
            safeguard your future.
          </p>
          <h4 className="text-lg md:text-xl font-bold my-4 text-white">
            What all crimes we cover:
          </h4>
          {crimesWeCover.map((crime, index) => (
            <div key={index}>
              <div className="flex items-center text-white text-lg mt-2 w-full">
                <div>🛑&nbsp;{crime}</div>
              </div>
            </div>
          ))}
          <p className="text-white mt-4 text-lg">
            For free (Consultation in office by Appointment only) with one of
            the
            <span className="text-2xl text-mainBrown font-bold">
              &nbsp; Top New Jersey Lawyers
            </span>{" "}
            , call us today at (201)-947-6484. We also serve clients based in
            the United States Virgin Islands.
          </p>
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default page;
