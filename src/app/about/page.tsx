import AboutSection from "@/components/AboutSection";
import ContactBar from "@/components/ContactBar";
import BackToTop from "@/components/extras/BackToTop";
import ServiceCards from "@/components/extras/ServiceCards";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderTop />
      <Header />
      <AboutSection />
      <div className="pb-6 lg:pb-12 bg-mainBlue">
        <ServiceCards />
      </div>
      <BackToTop />
      <Footer />
      <ContactBar />
    </div>
  );
};

export default page;
