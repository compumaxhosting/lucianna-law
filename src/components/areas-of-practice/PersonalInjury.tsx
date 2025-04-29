import Link from "next/link";
import {data} from "@/data/personalInjuryData";

const PersonalInjury = () => {
  const generalGuidelines = [
    "At the accident site, avoid phrases like, “I’m fine” or, “No one was hurt.” You may not know that until you receive medical attention.",
    "Go to the hospital to receive a medical assessment to determine and document the extent of your injuries. Remember that some injuries may not be seen or felt right away.",
    "Seek help from an attorney sooner rather than later.",
    "Avoid saying any more than necessary to insurance companies until you’ve spoken to a lawyer.",
    "Don’t accept any settlement offers or sign any settlement documents until you have reviewed them with your attorney.",
  ];
  return (
    <>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-mainBrown text-center uppercase">
        Personal Injury
      </h2>
      <p className="text-white mt-4 text-lg">
        Accidents happen, and not all misfortunes can be foreseen or prevented.
        That being said, when severe injury or death results from an act of
        negligence, victims and their families have a right to hold the at-fault
        party liable in court.
        <br />
        <br />
        At the Law Offices of Nancy E. Lucianna, P.C., we have decades of
        experience seeking compensation for those who have been seriously
        injured or killed in accidents caused by someone else’s negligence.
        Common cases include:
      </p>
      {data.map((commonCase) => (
        <Link href={`/personal-injury/${commonCase.slug}`} key={commonCase.id}>
          <div className="flex justify-center items-center bg-mainBrown text-white text-lg mt-4 py-5 w-full px-4 text-center">
            <div>{commonCase.title}</div>
          </div>
        </Link>
      ))}
      <h3 className="text-xl md:text-2xl lg:text-3xl text-white mt-8 mb-2 font-normal">
        {" "}
        What Should I Do After An Accident?{" "}
      </h3>
      <p className="text-white text-lg">
        What you do or say in the aftermath of an accident could impact your
        ability to seek compensation later on. Here are some general guidelines:
      </p>
      {generalGuidelines.map((guideline, index) => (
        <div
          key={index}
          className="flex items-center text-white text-lg mt-4 w-full"
        >
          <div>🛑&nbsp;{guideline}</div>
        </div>
      ))}

      <p className="text-white mt-4 text-lg">
        Once you have a medical assessment and have discussed your case with one
        of our attorneys, you will have a much better understanding of all your
        rights and legal options.
      </p>
      <h3 className="text-xl md:text-2xl lg:text-3xl text-white mt-8 mb-2 font-normal">
        Should I Settle Or Go To Trial?
      </h3>
      <p className="text-white text-lg">
        Many personal injuries and wrongful death cases are settled out of court
        before trial. Settling has its advantages, but it may not be worth it if
        the settlement offer is unfair. <br /> <br />
        Our policy is simple: We are always willing to negotiate and consider a
        settlement. But if that settlement is not in your best interests, we are
        fully prepared to take your case to trial in order to fight for the
        compensation you deserve.
      </p>
      <h3 className="text-xl md:text-2xl lg:text-3xl text-white mt-8 mb-2 font-normal">
        Cases Taken On Contingency: We Only Get Paid If You Do
      </h3>
      <p className="text-white text-lg">
        At the Law Offices of Nancy E. Lucianna, P.C., all of our personal
        injury cases are taken on a contingency basis. We only collect attorney
        fees if we help you win your case or obtain compensation through a
        settlement.
      </p>
    </>
  );
};

export default PersonalInjury;
