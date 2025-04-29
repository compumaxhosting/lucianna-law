// ServiceCards.tsx
"use client";

import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className="px-2 p-8 md:px-10 flex flex-col justify-center border border-gray-600">
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <Image
          src={iconSrc}
          alt={`${title} - Service Description`} // Added detailed Alt! This clarifies.
          width={60}
          height={60}
          className="mb-4"
        />
        <h3 className="text-3xl font-medium mb-2 text-white">{title}</h3>
      </div>
      <p className="text-lg text-center md:text-start text-lightBlue leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ServiceCards = () => {
  return (
    <section
      className="bg-mainBlue border border-gray-600"
      aria-label="Our Key Service Differentiators"
    >
      {" "}
      {/* Description */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <ServiceCard
          iconSrc="/top-experienced.png" // Replace with your actual icon path
          title="Top Experienced"
          description="She is incredibly professional and kind from the start. Her entire staff was always responsive and willing to collaborate with us."
        />
        <ServiceCard
          iconSrc="/most-reliable.png" // Replace with your actual icon path
          title="Most Reliable"
          description="Most Reliable NANCY E. LUCIANNA : The epitome of reliability in legal representation, ensuring your peace of mind and justice served."
        />
        <ServiceCard
          iconSrc="/most-successive.png" // Replace with your actual icon path
          title="Most Successive"
          description="Most Successive NANCY E. LUCIANNA : Setting the standard for successive legal outcomes, your trusted partner in achieving legal victories."
        />
      </div>
    </section>
  );
};

export default ServiceCards;
