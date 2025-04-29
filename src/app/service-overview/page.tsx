import BackToTop from "@/components/extras/BackToTop";
import ServiceOverviewSection from "@/components/extras/ServiceOverviewSection";
import WeServeIn from "@/components/extras/WeServeIn";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderTop />
      <Header />
      <ServiceOverviewSection />
      <div className="pb-6 lg:pb-12 bg-mainBlue">
        <WeServeIn />
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default page;
