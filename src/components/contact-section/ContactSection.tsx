import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      className="flex flex-col lg:flex-row"
      aria-labelledby="contact-us-section"
    >
      <div className="w-full lg:w-5/12">
        <Image
          src="/contact-us-img.jpg"
          alt="Contact Us - Reach out for legal consultation" // More descriptive alt text. Be specific!
          width={1920}
          height={1080}
          priority // Consider adding if this is "above the fold".
          className="h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-7/12">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
