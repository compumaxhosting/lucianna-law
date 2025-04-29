import React from "react";

const PoliceMisconduct = () => {
  const incidents = [
    "Excessive force",
    "Police brutality",
    "False arrest",
    "Unjustified police shootings",
    "Unnecessary and excessive restraint tactics leading to serious injury or death",
    "Injuries or fatalities while in police custody",
  ];
  return (
    <>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-mainBrown text-center uppercase">
        Police Misconduct
      </h2>
      <p className="text-white mt-4 text-lg">
        Police officers do an important and challenging job, and most officers
        are dedicated public servants. But when certain police officers abuse
        their power or overreact in situations where force is unwarranted, the
        results can be injurious or deadly. At the Law Offices of Nancy E.
        Lucianna, P.C., we are honored to help victims (and the families of
        victims) who have been seriously injured or killed in incidents
        involving:
      </p>
      {incidents.map((incident, index) => (
        <div
          key={index}
          className="flex items-center text-white text-lg mt-2 w-full"
        >
          <div>🛑&nbsp;{incident}</div>
        </div>
      ))}
      <h3 className="text-xl md:text-2xl lg:text-3xl text-white mt-8 mb-2 font-normal">
        How Our Firm Can Help
      </h3>
      <p className="text-white mt-2 text-lg">
        Our attorneys are ready to thoroughly and independently investigate
        claims of police misconduct leading to serious bodily injury or death.
        Based on the results of our investigation, we can aggressively pursue
        personal injury or wrongful death lawsuits on behalf of victims and
        their families. <br /> <br />
        Over the years, our skilled lawyers have been able to secure sizeable
        settlements for victims of police brutality and misconduct. Notable
        examples include:
      </p>
      <h3 className="text-xl md:text-2xl lg:text-3xl text-white mt-8 mb-2 font-normal">
        A police misconduct settlement for $60,000
      </h3>
      <h3 className="text-xl md:text-2xl lg:text-3xl text-white mb-2 font-normal">
        A police misconduct settlement for $120,000
      </h3>
      <h3 className="text-xl md:text-2xl lg:text-3xl text-white mb-2 font-normal">
        A police misconduct settlement for $300,000
      </h3>
      <h3 className="text-xl md:text-2xl lg:text-3xl text-white mb-2 font-normal">
        A police misconduct settlement for $350,000
      </h3>
      <p className="text-white mt-4 text-lg">
        Call Us Today To Discuss Your Rights And Legal Options <br /> <br />
        Our firm&apos;s founder, Nancy E. Lucianna, has been fearlessly standing
        up to police departments for 38 years.
      </p>
    </>
  );
};

export default PoliceMisconduct;
