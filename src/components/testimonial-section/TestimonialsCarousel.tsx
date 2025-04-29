"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialIconSVG from "./TestimonialIconSVG";
import Image from "next/image";

type Testimonial = {
  id: number;
  title: string;
  comment: string;
  imgPath: string;
  personName: string;
  personPost: string;
};

const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    loop: true,
  });

  // Fetch testimonials data
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonials-data");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Navigation handlers
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative container mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex px-2 min-w-[100%] sm:min-w-[33.33333%]"
            >
              <div className="bg-[#122542] shadow-md rounded-2xl p-6 text-white flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <TestimonialIconSVG />
                  <h3 className="text-lg font-semibold text-mainBrown">
                    {testimonial.title}
                  </h3>
                </div>
                <p className="text-sm italic text-gray-300 flex-1">
                  {testimonial.comment}
                </p>
                <div className="border-b border-gray-600 my-2"></div>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.imgPath}
                    width={200}
                    height={200}
                    alt={testimonial.personName}
                    className="w-12 h-12 rounded-full border-4 border-mainBrown"
                  />
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.personName}
                    </p>
                    <span className="text-xs text-gray-400">
                      {testimonial.personPost}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={scrollPrev}
          className="lg:absolute cursor-pointer border-2 border-lightBlue -left-16 lg:top-1/2 transform lg:-translate-y-1/2 p-2 rounded-full flex items-center justify-center h-10 w-10 lg:h-14 lg:w-14 lg:hover:scale-110 transition-transform duration-200"
          style={{
            backgroundImage: "url('/prev-img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Empty span to maintain button size if needed */}
          <span className="sr-only">Previous</span>
        </button>

        <button
          onClick={scrollNext}
          className="lg:absolute cursor-pointer border-2 border-lightBlue -right-16 lg:top-1/2 transform lg:-translate-y-1/2 p-2 rounded-full flex items-center justify-center h-10 w-10 lg:h-14 lg:w-14 lg:hover:scale-110 transition-transform duration-200"
          style={{
            backgroundImage: "url('/next-img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
