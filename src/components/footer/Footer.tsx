import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <footer
      className="relative bg-transparent text-white"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #0A1D35 0%, rgba(10, 29, 53, 0.8) 0.01%, #0A1D35 100%), url('/court-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="flex justify-center text-white text-xl md:3xl lg:text-4xl text-center pt-4 lg:pt-8 border-lightBlue/30 px-2">
        Serving New Jersey, New York, and The United States Virgin Islands
      </h2>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 py-6 lg:py-16">
        {/* Column 1: Description and Social Icons */}
        <div className="w-full lg:w-4/12">
          <Image
            src="/logo.png"
            alt="Nancy E. Lucianna"
            width={224}
            height={64}
            className="mb-4"
          />
          <p className="mb-6 text-lightBlue">
            NANCY E. LUCIANNA is an exceptional lawyer who goes above and beyond
            for her clients. Compassionate and understanding, she works
            tirelessly to resolve issues at hand.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://x.com/i/flow/login?redirect_after_login=%2Fluciannalaw"
              target="_blank"
              className="text-lightBlue hover:text-gray-300 border border-lightBlue p-3"
            >
              <FaXTwitter className="size-6" />
            </Link>
            <Link
              href="https://www.facebook.com/luciannalaw"
              target="_blank"
              className="text-lightBlue hover:text-gray-300 border border-lightBlue p-3"
            >
              <FaFacebookF className="size-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/luciannalaw/"
              target="_blank"
              className="text-lightBlue hover:text-gray-300 border border-lightBlue p-3"
            >
              <FaLinkedinIn className="size-6" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="text-lightBlue hover:text-gray-300 border border-lightBlue p-3"
            >
              <FaInstagram className="size-6" />
            </Link>
          </div>
        </div>

        {/* Column 2: Legal Specialties */}
        <div className="w-full lg:w-3/12">
          <h4 className="text-2xl lg:text-3xl font-semibold mb-4">
            Legal Specialties
          </h4>
          <ul className="space-y-2 text-lightBlue uppercase">
            <li>
              <Link
                href="/legal-specialities/criminal-defense"
                className="hover:text-gray-300"
              >
                Criminal Defense
              </Link>
            </li>
            <li>
              <Link
                href="/legal-specialities/personal-injury"
                className="hover:text-gray-300"
              >
                Personal Injury
              </Link>
            </li>
            <li>
              <Link
                href="/legal-specialities/workplace-discrimination"
                className="hover:text-gray-300"
              >
                Workplace Discrimination
              </Link>
            </li>
            <li>
              <Link
                href="/legal-specialities/workers-compensation"
                className="hover:text-gray-300"
              >
                Worker&apos;s Compensation
              </Link>
            </li>
            <li>
              <Link
                href="/legal-specialities/police-misconduct"
                className="hover:text-gray-300"
              >
                Police Misconduct
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="w-full lg:w-2/12">
          <h4 className="text-2xl lg:text-3xl font-semibold mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-lightBlue">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/areas-of-practice" className="hover:text-gray-300">
                Areas of Practice
              </Link>
            </li>
            <li>
              <Link href="/attorneys" className="hover:text-gray-300">
                Attorneys
              </Link>
            </li>
            <li>
              <Link href="/legal-specialities" className="hover:text-gray-300">
                Legal Specialties
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="w-full lg:w-3/12">
          <h4 className="text-2xl lg:text-3xl font-semibold mb-4">Contact</h4>
          <address className="not-italic space-y-2 text-lightBlue">
            <p>
              Law Offices of
              <br />
              NANCY E. LUCIANNA, P.C.
              <br />
              1638 Center Avenue
              <br />
              Fort Lee, NJ 07024
            </p>
            <p className="text-xl py-2 font-semibold text-white">
              201-947-6484
            </p>
            <p>
              <a
                href="mailto:Nlucianna@msn.com"
                className="hover:text-gray-300"
              >
                Nlucianna@msn.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom Section: Copyright and Links */}
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
