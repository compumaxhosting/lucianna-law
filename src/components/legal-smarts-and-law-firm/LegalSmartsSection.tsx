import LegalSmarts from "./LegalSmarts";
import { legalSmartsData } from "@/data/legalSmartsData";

const LegalSmartsSection = () => {
  return (
    <section aria-label="Legal Smarts Articles" className="py-8 bg-mainBlue">
      {legalSmartsData.map((item, index) => (
        <LegalSmarts
          key={index}
          heading={item.heading}
          paragraph={item.paragraph}
        />
      ))}
    </section>
  );
};

export default LegalSmartsSection;