// AboutSection.tsx (Updated to use RevealAnimation)
"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import RevealAnimation from "./ReavealAnimation";

const ServiceOverviewSection = () => {
  return (
    <section
      className="bg-mainBlue text-white py-4 py-6"
      aria-label="About the Law Firm and its Specializations"
    >
      <SectionHeading>
        Providing legal services across{" "}
        <span className="text-mainBrown">New Jersey, New York,</span> and the{" "}
        <span className="text-mainBrown">United States Virgin Islands</span>
      </SectionHeading>
      <div className="relative flex flex-col lg:flex-row lg:items-center py-6 px-4 lg:px-16 container mx-auto gap-4 max-w-7xl">
        {/* Left Image */}
        <div className="flex justify-center w-full lg:w-5/12 mb-4 lg:mb-0">
          <RevealAnimation
            src="/service-overview.jpg"
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
        <div className="w-full lg:w-7/12 px-2">
          <h2 className="text-2xl md:text-4xl py-6">
            Law Offices of Nancy E. Luciana
          </h2>
          <p className="text-lg leading-8 tracking-wide md:tracking-wider text-lightBlue">
            NANCY E. LUCIANNA is a skilled criminal defense attorney with 38
            years of practice. Her track record of representing hundreds of
            criminal defendants reflects her wealth of experience, knowledge,
            and expertise. She apprenticed under her father, Frank P. Lucianna,
            the &quot;Dean of the Criminal Bar in Bergen County, New
            Jersey.&quot;
          </p>
          <h3 className="text-lg md:text-3xl py-4">Our Areas of Practice:</h3>
          <p className="text-xl leading-8 tracking-wide md:tracking-wider text-lightBlue">
            Criminal Defense: If you&apos;re facing criminal charges, our
            experienced attorneys will work tirelessly to protect your rights
            and build a robust defense strategy. Personal Injury: We advocate
            for those who have been injured due to negligence or wrongdoing,
            striving to secure the compensation you deserve. Workplace
            Discrimination: We handle cases of unfair treatment in the
            workplace, championing the rights of employees who have faced
            discrimination. Police Misconduct: We hold law enforcement
            accountable for any abuse of power, ensuring that justice is served.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
