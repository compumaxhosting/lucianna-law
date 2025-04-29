const areas = [
  "Palisades Park, NJ",
  "Edgewater, NJ",
  "Cliffside Park, NJ",
  "Ridgefield, NJ",
  "Ridgefield Park, NJ",
  "Englewood, NJ",
  "Fairview, NJ",
  "Teaneck, NJ",
  "Little Ferry, NJ",
  "North Bergen, NJ",
  "Guttenberg, NJ",
  "Hackensack, NJ",
  "West New York, NJ",
  "Tenafly, NJ",
  "Bergenfield, NJ",
];

export default function WeServeIn() {
  return (
    <div className="bg-mainBlue text-white py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
          We Serve Clients in the Following Areas:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
          {areas.map((area, index) => (
            <p key={index} className="text-lightBlue">
              {area}
            </p>
          ))}
        </div>
        <p className="mt-8 text-lightBlue text-lg">
          Whether you’re in New Jersey, New York, or the United States Virgin
          Islands, our dedicated team is here to guide you through the legal
          process with compassion and expertise. Contact us today to discuss
          your case and see how we can help.
        </p>
      </div>
    </div>
  );
}
