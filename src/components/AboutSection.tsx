// AboutSection.tsx (Updated to use RevealAnimation)
"use client";

import React from "react";
import SectionHeading from "./extras/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import RevealAnimation from "./extras/ReavealAnimation";

const AboutSection = () => {
  return (
    <section
      className="bg-mainBlue text-white py-4 lg:py-24"
      aria-label="About the Law Firm and its Specializations"
    >
      <SectionHeading>
        Providing legal services across{" "}
        <span className="text-mainBrown">New Jersey, New York,</span> and the{" "}
        <span className="text-mainBrown">United States Virgin Islands</span>
      </SectionHeading>
      <div className="relative flex flex-col lg:flex-row py-6 px-4 lg:px-16 container mx-auto gap-4 max-w-7xl">
        {/* Left Image */}
        <div className="flex justify-center lg:w-5/12 mb-4 lg:mb-0">
          <RevealAnimation
            src="/about-img-1.jpg"
            alt="Lawyers Discussing Legal Strategies and Client Matters" // SPECIFIC. Key context of the image contents
            width={600}
            height={400}
            duration={1.5} // Optional: Customize duration
            delay={0.5} // Optional: Customize delay
            ease={[0.5, 0.5, 0, 1]} //optional: Customize bezier curve array
            className="object-cover" // optional
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-5/12 px-2">
          <p className="text-xl leading-8 tracking-wide md:leading-10 md:tracking-widest text-lightBlue">
            NANCY E. LUCIANNA is a skilled criminal defense attorney with 38
            years of practice. Her track record of representing hundreds of
            criminal defendants reflects her wealth of experience, knowledge,
            and expertise. She apprenticed under her father, Frank P. Lucianna,
            the &quot;Dean of the Criminal Bar in Bergen County, New
            Jersey.&quot;
          </p>
        </div>

        {/* Right Small Image */}
        <div className="mt-4 lg:mt-0 w-full lg:w-2/12 flex flex-col items-center">
          <RevealAnimation
            src="/about-img-2.jpg" // Replace with your actual path
            alt="Portrait of Nancy Lucianna - Criminal Defense Attorney" // MORE information is helpful
            width={200} // Adjust as needed
            height={250} // Adjust as needed
            duration={1.5} // Optional: Customize duration
            delay={0.5} // Optional: Customize delay
            ease={[0.5, 0.5, 0, 1]} //optional: Customize bezier curve array
            className="mb-2 w-full"
          />
          <Link
            href="/service-overview"
            className="underline text-2xl"
            aria-label="Service Overview"
          >
            Service Overview
          </Link>
        </div>
        <div className="absolute hidden xl:flex right-24 bottom-0">
          <Image
            src="/hammer-img.png"
            alt="Decorative Image of a Gavel" // Decorative (Image is pure Aesthetics with hammer or under
            width={380}
            height={10}
            className="object-cover"
            aria-hidden="true" /* SKIP or SET hidden TAG If caused flags*/
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
