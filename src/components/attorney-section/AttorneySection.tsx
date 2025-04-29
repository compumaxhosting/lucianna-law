import React from "react";
import Image from "next/image";
import SectionHeading from "../extras/SectionHeading";
import { attorneyData } from "@/data/attorneyData";
import Link from "next/link";

const AttorneySection = () => {
  return (
    <section className="bg-mainBlue py-12 border-y border-lightBlue/30">
      {/* Heading Section */}
      <SectionHeading>Attorney&apos;s</SectionHeading>

      {/* Attorneys Container */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Attorney 1 */}
        {attorneyData.map((attorney) => (
          <div
            key={attorney.id}
            className="flex flex-col xl:flex-row bg-white text-mainBlue rounded-2xl shadow-lg"
          >
            <div className="aspect-square relative w-full xl:min-w-[240px] h-full rounded-t-2xl xl:rounded-l-2xl xl:rounded-r-none overflow-hidden">
              <Image
                src={attorney.imgPath} // Replace with actual image path
                alt={attorney.name}
                layout="fill"
                priority
                className="object-top object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-500 uppercase mb-2">Attorney</p>
              <h3 className="text-2xl font-semibold text-mainBrown mb-2">
                {attorney.name}
              </h3>
              <p className="text-md text-gray-700 leading-relaxed mb-4 line-clamp-5">
                {attorney.mainContent}
              </p>
              <Link href={`/attorneys/${attorney.slug}`}>
                <button className="cursor-pointer text-sm text-mainBlue border border-mainBlue rounded-full px-4 py-1 hover:bg-mainBlue hover:text-white transition-colors">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AttorneySection;
