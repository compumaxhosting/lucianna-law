import React from "react";
import { specialityCardsData } from "@/data/specialityCardsData";
import SpecialityCard from "./SpecialityCard"; // Adjust the path if needed
import SectionHeading from "../extras/SectionHeading";

const LegalSpecialities: React.FC = () => {
  return (
    <section
      className="bg-mainBlue text-white py-12"
      aria-label="Legal Specialities" // General and can be set as static variable as the category itself has the purpose so aria may just directly name variable
    >
      <SectionHeading>Legal Specialities</SectionHeading>
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-4 pt-6">
          {specialityCardsData.map((card, index) => (
            <SpecialityCard
              key={index}
              title={card.title}
              description={card.description}
              slug={card.slug}
              className={
                index === specialityCardsData.length - 1 &&
                specialityCardsData.length % 2 !== 0
                  ? "lg:col-span-2 lg:justify-self-center"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalSpecialities;