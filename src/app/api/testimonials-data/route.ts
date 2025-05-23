// app/api/testimonials-data/route.ts
import { NextResponse } from "next/server";

const testimonialsData = [
  {
    id: 1,
    title: "Great Work!",
    comment:
      "Best attorney in NJ.",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Oscar Herrera",
    personPost: "Client",
  },
  {
    id: 2,
    title: "Best Lawfirm Agency!",
    comment:
      "She is the best ....",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Angela Whitaker",
    personPost: "Client",
  },
  {
    id: 3,
    title: "Best Lawfirm Agency!",
    comment:
      "Best lawyer by far.",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "The Life of a Tamayo",
    personPost: "Client",
  },
  {
    id: 4,
    title: "Great Work!",
    comment:
      "Nancy is a very incredible lawyer extremely capable and thorough I would recommend Her services to anyone that I cared about",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Larry Michelli",
    personPost: "Individual Client",
  },
  {
    id: 5, // Added one more to have at least 4 as requested, can add more
    title: "Great Work!",
    comment:
      "GREAT SERVICE!, Prompt and Reliable- Great staff (Paul was very Responsive and Helpful) Great professionals and trustworthy",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "juan arias",
    personPost: "Client",
  },
  {
    id: 6, // Added one more to have at least 4 as requested, can add more
    title: "Great Work!",
    comment:
      "Wow! Amazing Nancy is by far the smartest Attorney I’ve ever had. She has Amazing credentials and credibility in the Bergen County, and surrounding counties. I was about to cop out to 4 years with a public defender. I heard about Nancy, and I thank God cause she got that 4 years to time served as well as my probation terminated. I walked today a free man. I highly recommend her.",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Robert Rodriguez",
    personPost: "Client",
  },
  {
    id: 7, // Added one more to have at least 4 as requested, can add more
    title: "Great Work!",
    comment:
      "Nancy Lucianna is an attorney of utmost integrity. She is highly knowledgeable in her area of practice and is a most zealous and dedicated advocate of her client's interests. She has provided me with invaluable advice and counsel.",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Peter Lafharis",
    personPost: "Client",
  },
  {
    id: 8, // Added one more to have at least 4 as requested, can add more
    title: "Great Work!",
    comment:
      "Attorney Nancy Lucianna and her firm is excellent. Nancy is very professional, efficient and personable lawyer. When I encountered difficult situations for my own business, Nancy understood each situation and handled it professionally according to the specifics of the case. She was very patient with me, always answered my questions and gave me objective counsel I knew I could trust. I highly recommend her and her team to my colleagues and family.",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Jaclyn Kim",
    personPost: "Client",
  },
  {
    id: 9, // Added one more to have at least 4 as requested, can add more
    title: "Great Work!",
    comment:
      "Best attorney ever 😍",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Tish Laval",
    personPost: "Client",
  }
];

export async function GET() {
  return NextResponse.json(testimonialsData);
}
