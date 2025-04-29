const CriminalDefense = () => {
    const services = [
      "Drug Possession",
      "Drug Trafficking",
      "Drunk Driving (DUI AND DWI)",
      "Theft And Burglary",
      "Robery And Armed Robbery",
      "Homicide",
      "Rape, sexual assault and other sex offenses",
      "Domestic violence",
      "Kidnapping and child endangerment",
      "Auto theft and carjacking",
      "Juvenile offenses",
      "Fraud, counterfeiting and other white collar crimes",
      "Offenses tried in municipal court",
    ];
    return (
      <>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-mainBrown text-center uppercase">
          Criminal Defense
        </h2>
        <p className="text-white mt-4 text-lg">
          In today’s criminal justice system, it often seems as though the odds
          are stacked against criminal defendants. Prosecutors have a lot of
          power, and the threat of an especially harsh sentence compels many
          defendants to choose a plea deal rather than going to trial. <br />{" "}
          <br />
          To be sure, a plea deal isn’t always bad. But you should only choose a
          given strategy after consulting with an experienced criminal defense
          attorney. That way, you truly know all of your legal rights and
          options, and you have a better idea of the strengths and weaknesses of
          your case. <br /> <br />
          At the Law Offices of Nancy E. Lucianna, P.C., we are here for you and
          will be with you every step of the way. As a results-oriented firm, we
          offer shrewd representation focused on producing the best possible
          outcome for our clients.
        </p>
        <h3 className="text-xl md:text-2xl lg:text-3xl text-white mt-8 mb-2 font-normal">
          Getting Results Through Collaboration And Thorough Investigation
        </h3>
        <p className="text-white text-lg">
          Our lawyers believe that client collaboration is crucial. You have the
          biggest stake in the outcome of your case, so you should be involved
          in the decision-making process. We want to hear what you have to say,
          and we will seek your input from the beginning. <br /> <br />
          We also know that success depends on thorough preparation. The sooner
          you hire us, the sooner we can get to work conducting our own
          investigation into the allegations. This often includes speaking to
          witnesses and ensuring that evidence is preserved. <br /> <br />
          Our Criminal Defense Services <br /> <br />
          As a full-service firm, these are just some of the criminal charges we
          are prepared to defend against:
        </p>
        <div className="mt-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center text-white text-lg mt-2 w-full"
            >
              <div>🛑&nbsp;{service}</div>
            </div>
            /* <div
            key={index}
            className="flex justify-center items-center bg-mainBrown text-white text-lg mt-4 py-5 w-full"
          >
            <div>{service}</div>
          </div> */
          ))}
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl text-white mt-8 font-normal">
          Arrested Or Facing Criminal Charges? Don’t Wait – Call Us Right Away.
        </h3>
      </>
    );
}

export default CriminalDefense;