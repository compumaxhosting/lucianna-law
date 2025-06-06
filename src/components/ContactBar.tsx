"use client";

import { Phone, MapPin, Mail } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    href: "tel:+1-201-555-1234",
    label: "Call LUCIANNA Law Attorny",
    icon: Phone,
    text: "Phone",
  },
  {
    href: "https://www.google.com/maps/place/1638+Center+Ave,+Fort+Lee,+NJ+07024/@40.851478,-73.972636,12z/data=!4m6!3m5!1s0x89c2f6e7ec96b7eb:0xe034fc37c4b8168e!8m2!3d40.8514781!4d-73.9726357!16s%2Fg%2F11bw3yh_jl?hl=en&entry=ttu",
    label: "View LUCIANNA Law Attorny location on Google Maps",
    icon: MapPin,
    text: "Location",
    external: true,
  },
  {
    href: "mailto:Nlucianna@msn.com?subject=Inquiry&body=Hi%20LUCIANNA%20Team%2C%0A%0AI%20would%20like%20to%20know%20more%20about...",
    label: "Email LUCIANNA Law Attorny",
    icon: Mail,
    text: "Email",
  },
];

const ContactBar: React.FC = () => (
  <nav
    role="navigation"
    aria-label="Contact bar"
    className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-3 divide-x divide-white bg-[#ca9a67] text-white text-center shadow-[0_-2px_10px_rgba(0,0,0,0.2)]"
  >
    {contactItems.map(({ href, label, icon: Icon, text, external }, index) => (
      <Link
        key={index}
        href={href}
        aria-label={label}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="flex flex-col items-center justify-center py-2 hover:bg-[#ca9a67] transition-colors font-inter"
      >
        <Icon size={18} />
        <span className="text-xs font-semibold mt-1">{text}</span>
      </Link>
    ))}
  </nav>
);

export default ContactBar;
