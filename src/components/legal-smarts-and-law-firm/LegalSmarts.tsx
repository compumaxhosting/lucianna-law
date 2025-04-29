import React from "react";
import SectionHeading from "../extras/SectionHeading";

interface LegalSmartsSectionProps {
  heading: string;
  paragraph: string;
}

const LegalSmarts: React.FC<LegalSmartsSectionProps> = ({
  heading,
  paragraph,
}) => {
  return (
    <div
      className="bg-mainBlue text-white"
      aria-label="Legal Smarts Section"
    >
      <SectionHeading>{heading}</SectionHeading>
      <div className="container mx-auto px-4 py-4 lg:px-40 lg:py-12">
        <p className="text-xl leading-8 tracking-wide text-lightBlue">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default LegalSmarts;
