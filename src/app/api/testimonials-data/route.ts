// app/api/testimonials-data/route.ts
import { NextResponse } from "next/server";

const testimonialsData = [
  {
    id: 1,
    title: "Great Work!",
    comment:
      "Great service! Prompt, reliable, and efficient — the staff was fantastic (Paul was incredibly responsive and helpful). Truly great professionals and highly trustworthy.",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Juan Arias",
    personPost: "Client",
  },
  {
    id: 2,
    title: "Best Lawfirm Agency!",
    comment:
      "Wow! Amazing Nancy is by far the smartest Attorney I’ve ever had. She has Amazing credentials and credibility in the Bergen County, and surrounding counties. ",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Robert Rodriguez",
    personPost: "Client",
  },
  {
    id: 3,
    title: "Best Lawfirm Agency!",
    comment:
      "Nancy Lucianna is an attorney of utmost integrity. She is highly knowledgeable in her area of practice and is a most zealous and dedicated advocate of her client's interests.",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Peter Lafharis",
    personPost: "Business Owner",
  },
  {
    id: 4,
    title: "Great Work!",
    comment:
      "Attorney Nancy Lucianna and her firm is excellent. Nancy is very professional, efficient and personable lawyer. I highly recommend her and her team to my colleagues and family.",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Jaclyn Kim",
    personPost: "Individual Client",
  },
  {
    id: 5, // Added one more to have at least 4 as requested, can add more
    title: "Great Work!",
    comment:
      "Nancy is a very incredible lawyer extremely capable and thorough I would recommend Her services to anyone that I cared about",
    imgPath: "/user-1.jpg", // Corrected imgPath to be a valid URL string
    personName: "Larry Michelli",
    personPost: "Client",
  },
];

export async function GET() {
  return NextResponse.json(testimonialsData);
}
