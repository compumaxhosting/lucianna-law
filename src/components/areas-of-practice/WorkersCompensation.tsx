import React from "react";

const WorkersCompensation = () => {
  const commonInjuries = [
    "Neck and back injuries leading to chronic pain",
    "Knee injuries",
    "Shoulder injuries",
    "Repetitive strain injuries such as carpal tunnel",
    "Overexertion injuries",
    "Slips, trips and falls",
    "Construction accidents",
    "Falling from scaffolding and other elevated surfaces",
    "Vehicle accidents, including specialized equipment such as forklifts",
    "Machine entanglement",
    "Scalding and burns",
  ];
  return (
    <>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-mainBrown text-center uppercase">
        Worker&apos;s Compensation
      </h2>
      <p className="text-white mt-4 text-lg">
        In recent years, workers&apos; compensation laws and policies have
        changed in ways that benefit employers and insurers while leaving
        injured workers at a disadvantage. What should be a straightforward
        application process can end up taking months or years, and benefits are
        too often denied for bureaucratic reasons. <br /> <br />
        At the Law Offices of Nancy E. Lucianna, P.C., our attorneys are
        well-versed in New Jersey workers&apos; compensation laws and
        procedures. If you have been injured in a workplace accident, our
        recommendation is simple: Report the injury to your employer right away,
        and then give us a call.
      </p>
      <h3 className="text-xl md:text-2xl lg:text-3xl text-white mt-8 mb-2 font-normal">
        Why Hire A Workers&apos; Compensation Attorney?
      </h3>
      <p className="text-white text-lg mb-2">
        Technically, the workers&apos; compensation system can be navigated
        without the help of a lawyer. But working with an attorney - from the
        very beginning - can make the process smoother, faster and far less
        frustrating. <br /> <br />
        Too many workers come to us only after their claim has been denied. At
        that point, legal options are limited. But if you seek our help soon
        after the injury has occurred, we may be able to prevent the mistakes
        and missteps that lead to claim denial. We will also work to ensure that
        your employer does not engage in any actions meant to weaken your case.{" "}
        <br /> <br />
        We have helped countless New Jersey residents seek the compensation that
        they should be entitled to. Common accidents and injuries include:
      </p>
      {commonInjuries.map((commonCase, index) => (
        <div
          key={index}
          className="flex items-center text-white text-lg mt-2 w-full"
        >
          <div>🛑&nbsp;{commonCase}</div>
        </div>
      ))}
      <h3 className="text-xl md:text-2xl lg:text-3xl text-white mt-8 mb-2 font-normal">
        Was Someone Else At Fault For Your Injuries?
      </h3>
      <p className="text-white text-lg">
        Although worker&apos;s compensation generally prohibits you from suing
        your employer after most work injuries, you may be able to hold a third
        party liable if that party contributed to your injuries. Examples would
        include the manufacturer of unsafe machinery or malfunctioning safety
        equipment. <br /> <br />
        In addition to helping you through all stages of the worker&apos;s
        compensation process, our firm can also bring a third-party liability
        claim if it is warranted in your case.
      </p>
    </>
  );
};

export default WorkersCompensation;
