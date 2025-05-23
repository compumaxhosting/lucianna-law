import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import SectionHeading from "../extras/SectionHeading";

const TestimonialsSection: React.FC = () => {
  const backgroundImage = "/bg-video-image.jpg";

  return (
    <section className="relative overflow-hidden py-10 lg:py-16 lg:px-32 flex flex-col items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Blurred overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-xs bg-mainBlue/10" />

      {/* Foreground content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center">
        <SectionHeading>Client&apos;s Testimonials</SectionHeading>
        <p className="text-white py-6 px-4 lg:px-60 text-center">
          We strive to be approachable and reachable and maintain communication
          with our clients. We value clients and work relentlessly to achieve
          excellent results.
        </p>
        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default TestimonialsSection;
