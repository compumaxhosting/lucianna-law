import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      className="bg-mainBlue text-white"
      aria-label="Legal Services and Contact Information"
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center py-10 xl:py-0">
        {/* Left Side: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center w-full lg:w-1/2 px-4 xl:pl-24">
          <p className="text-center lg:text-left text-lg lg:text-2xl mb-4 lg:mb-10 uppercase tracking-widest">
            <span className="text-lg lg:text-2xl uppercase">
              LAW OFFICES OF NANCY E. LUCIANNA
            </span>
            <br />
            <span className="text-mainBrown">Call us at</span> (201)-947-6484
          </p>
          <h1
            className="text-center lg:text-start text-4xl lg:text-6xl font-bold mb-4 lg:mb-10 leading-[2.3]"
            style={{ lineHeight: "1.2" }}
          >
            A Law Firm With <span className="text-mainBrown">Experience </span>
            And A <span className="text-mainBrown">Winning Attitude</span>
          </h1>
          <ul className="mb-4 text-center lg:text-start">
            <li>Consultation in office by Appointment only.</li>
            <li className=" text-white">
              <span className="text-mainBrown">Handicapped Accessible</span>
              (call before arrival)
            </li>
            <li>Home visits to clients upon request.</li>
          </ul>
          <Link
            href="/contact-us"
            className="bg-mainBrown text-white px-8 py-3 rounded hover:bg-tan flex justify-center items-center w-fit"
            aria-label="Contact our offices to learn more and schedule a consultation" /*Descriptive text, for SEO. "Schedule a consultation: is helpful"*/
          >
            Know More <FaArrowRight className="ml-2" aria-hidden="true" />
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center w-full lg:w-1/2 px-4 mt-4 lg:mt-0">
          <Image
            src="/hero-image.png" // Replace with your image path
            alt="Portrait of Attorney Nancy Lucianna" // ALT IS important
            width={600} // Adjust as needed
            height={600} // Adjust as needed
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
