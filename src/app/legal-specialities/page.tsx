import ContactBar from "@/components/ContactBar";
import BackToTop from "@/components/extras/BackToTop";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import LegalSpecialities from "@/components/legal-specialities/LegalSpecialities";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderTop />
      <Header />
      <LegalSpecialities />
      <BackToTop />
      <Footer />
      <ContactBar />
    </div>
  );
};

export default page;
