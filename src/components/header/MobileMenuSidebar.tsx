import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaArrowRight, FaTimes } from "react-icons/fa";
import Image from "next/image";

interface MobileMenuSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenuSidebar = ({ isOpen, setIsOpen }: MobileMenuSidebarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/70 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)} // Close sidebar on overlay click
        aria-hidden="true" // Hide from screen readers
        aria-label="Close Menu"
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-mainBlue text-white p-4 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-modal="true" // Indicate this is a modal dialog
        role="dialog" // Define semantic role
        aria-label="Mobile Menu" // Provide a general label
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl cursor-pointer"
          aria-label="Close menu" // Specific label for the close button
        >
          <FaTimes aria-hidden="true" /> {/* Hide the icon itself */}
        </button>

        {/* Menu Content */}
        <nav
          className="flex flex-col space-y-4 mt-12"
          aria-label="Main Navigation"
        >
          <Image
            src="/logo.png"
            alt="Law Offices of Nancy E. Lucianna"
            width={270}
            height={40}
            objectFit="contain"
            priority
            className="pb-6"
          />
          <Link
            href="/"
            className="hover:text-tan"
            onClick={() => setIsOpen(false)}
            aria-label="Go to Home page"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-tan"
            onClick={() => setIsOpen(false)}
            aria-label="Learn more about us"
          >
            About
          </Link>
          <Link
            href="/areas-of-practice"
            className="hover:text-tan"
            onClick={() => setIsOpen(false)}
            aria-label="View our areas of practice"
          >
            Areas Of Practice
          </Link>
          <Link
            href="/attorneys"
            className="hover:text-tan"
            onClick={() => setIsOpen(false)}
            aria-label="Meet our attorneys"
          >
            Attorneys
          </Link>

          {/* Dropdown for Legal Specialities */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-tan flex items-center w-full"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Legal Specialities{" "}
              <FaChevronDown
                className={`ml-1 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {isDropdownOpen && (
              <ul className="mt-2 ml-4 space-y-2 border-l border-tan pl-2">
                <li>
                  <Link
                    href="/legal-specialities/criminal-defense"
                    className="hover:text-tan"
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Criminal Defense
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal-specialities/personal-injury"
                    className="hover:text-tan"
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Personal Injury
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal-specialities/workplace-discrimination"
                    className="hover:text-tan"
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Workplace Discrimination
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal-specialities/workers-compensation"
                    className="hover:text-tan"
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Worker&apos;s Compensation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal-specialities/police-misconduct"
                    className="hover:text-tan"
                    onClick={() => {
                      setIsOpen(false);
                      setIsDropdownOpen(false);
                    }}
                  >
                    Police Misconduct
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            href="/blog"
            className="hover:text-tan"
            onClick={() => setIsOpen(false)}
            aria-label="Read our blog"
          >
            Blog
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-tan flex items-center"
            onClick={() => setIsOpen(false)}
            aria-label="Contact us for legal assistance"
          >
            Contact Us <FaArrowRight className="ml-2" aria-hidden="true" />
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default MobileMenuSidebar;
