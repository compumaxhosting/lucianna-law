import ContactSection from '@/components/contact-section/ContactSection'
import ContactBar from '@/components/ContactBar'
import BackToTop from '@/components/extras/BackToTop'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import HeaderTop from '@/components/header/HeaderTop'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeaderTop />
      <Header />
      <div className="pb-6 lg:pb-12 bg-mainBlue">
        <ContactSection />
      </div>
      <BackToTop />
      <Footer />
      <ContactBar />
    </div>
  );
}

export default page