"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Roboto } from "next/font/google";
import Footer from "./Footer";

const roboto = Roboto({
  weight: ["700"],
  subsets: ["latin"],
});

const reviews = [
  {
    name: "Shubh Sharma",
    username: "@Shubh02",
    body: "Very nice website. I like it. Very animating website. Looking like a wow",
    img: "shubhpic.jpg",
    alt: "Shubh",
  },
  {
    name: "Aman Verma",
    username: "@Aman_13",
    body: "Nice Website, Really Amazing.",
    img: "amanp.pdf",
    alt: "Aman verma",
  },
  {
    name: "Ankit",
    username: "@Ankit_17",
    body: "Its Simple, Elegant and Classic. Just Outstanding.",
    img: "ankitp.jpg",
    alt: "Ankit",
  },
  {
    name: "Supriya",
    username: "@Supriya_2",
    body: "This is seriously impressive.",
    img: "supriyap.jpg",
    alt: "supriya",
  },
  {
    name: "Ishita",
    username: "@Ishita_23",
    body: "Could be better, but still good.",
    img: "ishita.jpg",
    alt: "Ishita",
  },
  {
    name: "Shrijita",
    username: "@Shrijita_12",
    body: " I can’t even describe how I feel.",
    img: "srijita.jpg",
    alt: "Srijita",
  },
  {
    name: "Pallavi Thakur",
    username: "@Pollobi.pb",
    body: "I like this website,  well done. Keep it up  dude .",
    img: "/pallavi.jpg",
    alt: "Pallavi Thakur",
  },
  {
    name: "Abhipsa",
    username: "@.abhipsaghosh.",
    body: "I love this website. It's so beautiful and I'm so happy to see it.",
    img: "/abhipsa.jpg",
    alt: "Abhipsa",
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, alt }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-64 justify-center items-center cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-100/[.1] bg-gray-100/[.07] hover:bg-gray-100/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="50" height="50" alt={alt} src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white">{name}</figcaption>
            <p className="text-xs font-medium text-white/60">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
      </figure>
    );
  };
  
  

export function Comments() {
  return (
    <>
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  pb-12" id="testimonials">
        <h5 className={`${roboto.className} text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center mb-12`}>WHAT PEOPLE SAY</h5>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 "></div>
    </div>
    <Footer />
    </>
  );
}

export default Comments;
