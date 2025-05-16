"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-15 md:bottom-4 right-4 lg:bottom-6 lg:right-6 z-20 p-3 rounded-full bg-mainBlue border-4 border-mainBrown text-white transition-opacity duration-700 cursor-pointer ${
        isVisible
          ? "opacity-100 animate-float"
          : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <FaArrowUp size={25} />
    </button>
  );
};

export default BackToTop;
