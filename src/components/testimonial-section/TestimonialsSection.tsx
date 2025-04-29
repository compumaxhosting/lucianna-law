import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import SectionHeading from "../extras/SectionHeading";

const TestimonialsSection: React.FC = () => {
  const backgroundImage = "/contact-form-bg.png";
  return (
    <section
      className="bg-mainBlue py-10 lg:py-16 lg:px-32 relative overflow-hidden flex flex-col items-center justify-center"
      aria-labelledby="contact-form-heading"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionHeading>Client&apos;s Testimonials</SectionHeading>
      <p className="text-lightBlue py-6 px-4 lg:px-60 text-center">
        We strive to be approachable and reachable and maintain communication
        with our clients. We value clients and work relentlessly to achieve
        excellent results.
      </p>
      <TestimonialsCarousel />
    </section>
  );
};

export default TestimonialsSection;
