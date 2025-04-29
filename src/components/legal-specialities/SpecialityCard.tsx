import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SpecialityCardProps {
  title: string;
  description: string;
  slug: string;
  className?: string; // Make className optional
}

const SpecialityCard: React.FC<SpecialityCardProps> = ({
  title,
  description,
  slug,
  className = "", // Provide a default value
}) => {
  return (
    <div className={`p-4 md:p-6 border border-mainBrown/50 ${className}`}>
      <div className="flex items-center gap-2">
        <ArrowRight className="text-mainBrown" aria-hidden="true" />
        {/* Hides this element - Its part of title presentation*/}
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm">{description}</p>
      <Link
        href={`legal-specialities/${slug}`}
        className="text-blue-500 text-sm hover:underline block mt-2"
        aria-label={`Read more about ${title}`} /* Provides context/purpose  when tab lands*/
      >
        Read More
      </Link>
    </div>
  );
};

export default SpecialityCard;
