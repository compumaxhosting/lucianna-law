import CriminalDefense from "./CriminalDefense";
import PersonalInjury from "./PersonalInjury";
import PoliceMisconduct from "./PoliceMisconduct";
import WorkersCompensation from "./WorkersCompensation";

const AreasOfPractice = () => {
  // Create an array of components
  const practices = [
    <CriminalDefense key="criminal-defense" />,
    <WorkersCompensation key="workers-compensation" />,
    <PersonalInjury key="personal-injury" />,
    <PoliceMisconduct key="police-misconduct" />,
  ];

  return (
    <div className="bg-mainBlue">
      <div className="container mx-auto py-6">
        <div className="custom-grid">
          {practices.map((Practice, index) => (
            <div
              key={index}
              className="grid-item border border-lightBlue/40 p-6 rounded-lg"
            >
              {Practice}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreasOfPractice;
