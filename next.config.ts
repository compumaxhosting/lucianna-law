import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/service-overview.html",
        destination: "/service-overview",
        permanent: true,
      },
      {
        source: "/areas-of-practice.html",
        destination: "/areas-of-practice",
        permanent: true,
      },
      {
        source: "/attorneys.html",
        destination: "/attorneys",
        permanent: true,
      },
      {
        source: "/legal-specialities.html",
        destination: "/legal-specialities",
        permanent: true,
      },
      {
        source: "/blog.html",
        destination: "blog",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/criminal-defense-attorneys-NJ-NY.html",
        destination: "legal-specialities/criminal-defense",
        permanent: true,
      },
      {
        source: "/personal-injury-or-wrongful-death.html",
        destination: "/legal-specialities/personal-injury",
        permanent: true,
      },
      {
        source: "/work-place-discrimination.html",
        destination: "/legal-specialities/workplace-discrimination",
        permanent: true,
      },
      {
        source: "/workers-compensation.html",
        destination: "/legal-specialities/workers-compensation",
        permanent: true,
      },
      {
        source: "/police-misconduct-attorneys.html",
        destination: "/legal-specialities/police-misconduct",
        permanent: true,
      },
      {
        source: "/legal-smarts-pointer-3-suing-the-police.html",
        destination: "/blog/suing-the-police",
        permanent: true,
      },
      {
        source: "/legal-smarts-pointer-4-keep-your-trap-shut.html",
        destination: "/blog/keep-your-trap-shut",
        permanent: true,
      },
      {
        source:
          "/legal-smarts-pointer-5-avoid-the-bogus-default-complaint-trick.html",
        destination: "/blog/bogus-default-complaint-trick",
        permanent: true,
      },
      {
        source:
          "/legal-smarts-pointer-6-dont-get-caught-in-an-immigration-trap.html",
        destination: "/blog/immigration-trap",
        permanent: true,
      },
      {
        source:
          "/nancy-e-lucianna.html",
        destination: "/attorneys/attorney-1",
        permanent: true,
      },
      {
        source:
          "/paul-darakjian.html",
        destination: "/attorneys/attorney-2",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
