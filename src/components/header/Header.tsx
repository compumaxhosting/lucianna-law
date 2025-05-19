"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaArrowRight, FaBars } from "react-icons/fa"; // Import FaBars for the mobile menu icon
import MobileMenuSidebar from "./MobileMenuSidebar"; // Import the sidebar component
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  // Function to check if link is active
  const isActive = (href: string) => pathName === href;
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-mainBlue py-2 border-y border-white/30 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center">
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/logo.png"
                alt="Law Offices of Nancy E. Lucianna"
                width={270}
                height={40}
                priority
                style={{ objectFit: "contain" }} // ✅ Correct modern usage
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white xl:hidden pr-4 cursor-pointer" // Show only on small screens
            onClick={() => setIsOpen(true)} // Toggle sidebar visibility
            aria-label="Open menu"
          >
            <FaBars className="text-2xl" />
          </button>

          {/* Navigation Links (Hidden on Mobile) */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex gap-10 text-mainBrown text-xl"
          >
            <Link
              href="/"
              className={`hover:text-white nav-link ${
                isActive("/") ? "nav-link_active" : "pt-1"
              }`}
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-white nav-link ${
                isActive("/about") ? "nav-link_active" : "pt-1"
              }`}
            >
              About
            </Link>
            <Link
              href="/areas-of-practice"
              className={`hover:text-white nav-link ${
                isActive("/areas-of-practice") ? "nav-link_active" : "pt-1"
              }`}
            >
              Areas Of Practice
            </Link>
            <Link
              href="/attorneys"
              className={`hover:text-white nav-link ${
                isActive("/attorneys") ? "nav-link_active" : "pt-1"
              }`}
            >
              Attorneys
            </Link>
            <div className="relative group">
              <Link
                href="/legal-specialities"
                className={`hover:text-white nav-link ${
                  isActive("/legal-specialities") ? "nav-link_active" : "pt-1"
                }`}
              >
                <span className="flex items-center gap-2 pt-1">
                  Legal Specialities <FaChevronDown className="ml-1" />
                </span>
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute left-0 hidden group-hover:block bg-[#0A1D35] z-50 w-[270px] text-lg">
                <ul className="text-white">
                  <li className="invisible">
                    <Link
                      href="#"
                      className="block px-4 py-2 border transition"
                    ></Link>
                  </li>
                  <li>
                    <Link
                      href="/legal-specialities/criminal-defense"
                      className="block px-4 py-2 border border-mainBrown hover:bg-mainBrown transition"
                    >
                      Criminal Defense
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal-specialities/personal-injury"
                      className="block px-4 py-2 border border-mainBrown hover:bg-mainBrown transition"
                    >
                      Personal Injury
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal-specialities/workplace-discrimination"
                      className="block px-4 py-2 border border-mainBrown hover:bg-mainBrown transition"
                    >
                      Work Place Discrimination
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal-specialities/workers-compensation"
                      className="block px-4 py-2 border border-mainBrown hover:bg-mainBrown transition"
                    >
                      Worker&apos;s Compensation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal-specialities/police-misconduct"
                      className="block px-4 py-2 border border-mainBrown hover:bg-mainBrown transition"
                    >
                      Police Misconduct
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/blog"
              className={`hover:text-white nav-link ${
                isActive("/blog") ? "nav-link_active" : "pt-1"
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Contact Us Button (Hidden on Mobile) */}
          <Link
            href="/contact-us"
            className="hidden xl:flex bg-mainBrown text-white px-8 py-4 items-center"
          >
            Contact Us <FaArrowRight className="ml-2" aria-hidden="true" />
          </Link>

          {/* Mobile Menu Sidebar */}
          <MobileMenuSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
