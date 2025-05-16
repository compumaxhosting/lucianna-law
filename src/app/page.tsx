"use client";

import AboutSection from "@/components/AboutSection";
import Header from "@/components/header/Header";
import HeaderTop from "@/components/header/HeaderTop";
import HeroSection from "@/components/HeroSection";
import LegalSpecialities from "@/components/legal-specialities/LegalSpecialities";
import ServiceCards from "@/components/extras/ServiceCards";
import VideoSection from "@/components/video-section/VideoSection";
import LegalSmartsSection from "@/components/legal-smarts-and-law-firm/LegalSmartsSection";
import ContactSection from "@/components/contact-section/ContactSection";
import TestimonialsSection from "@/components/testimonial-section/TestimonialsSection";
import AttorneySection from "@/components/attorney-section/AttorneySection";
import MapComponent from "@/components/MapComponent";
import FooterMain from "@/components/footer/Footer";
import BackToTop from "@/components/extras/BackToTop";
import ContactBar from "@/components/ContactBar";

export default function Home() {
  return (
    <>
      <HeaderTop />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceCards />
      <LegalSmartsSection />
      <VideoSection />
      <LegalSpecialities />
      <ContactSection />
      <TestimonialsSection />
      <AttorneySection />
      <MapComponent />
      <BackToTop />
      <FooterMain />
      <ContactBar />
    </>
  );
}
