import Image from "next/image";
import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode; // Change title to children, type React.ReactNode
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-2 md:gap-4 px-4 md:px-10 lg:px-24 text-center">
      <h2 className="text-white text-3xl md:4xl lg:text-5xl section-heading">
        {children}
      </h2>{" "}
      {/*  Render the children inside the <h2> */}
      <Image
        src="/underline-img.png"
        alt="Decorative Underline" // More descriptive alt text
        width={300}
        height={10}
        className="object-cover"
        aria-hidden="true" // Hide the underline image from screen readers as its decorative
      />
    </div>
  );
};

export default SectionHeading;
