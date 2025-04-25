import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Marquee from "@/components/ui/Marquee";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
const projects = [
  {
    id: 1,
    title: "Elevator System (Low-Level Design - LLD)",
    repoLink: "https://github.com/khushi-jaiswal0512/Elevator-System",
    image: "elevator.png",
    languages: ["Java"],
    description: "A Java based Embedded Systems and Real-Time Systems",
    stars: 0,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    repoLink: "https://github.com/khushi-jaiswal0512",
    image: "KEC.jpeg",
    languages: ["React", "Node.js", "MongoDB"],
    description: "A fully functional E-Commerce Platform.",
    stars: 0,
  },
  {
    id: 3,
    title: "GYM-Page",
    repoLink: "https://github.com/khushi-jaiswal0512/JAISWAL-Gym",
    image: "gym2.jpg",
    languages: ["HTML"],
    description: "A HTML based GYM login page",
    stars: 0,
  },
  {
    id: 4,
    title: "Url-Shortener",
    repoLink: "https://github.com/khushi-jaiswal0512",
    image: "/url.jpg",
    languages: ["React", "Node.js", "MongoDB"],
    description: "A React-based URL shortening service.",
    stars: 0,
  },
  {
    id: 5,
    title: "Butterfly",
    repoLink: "https://github.com/khushi-jaiswal0512",
    image: "/butterfly.png",
    languages: ["JavaScript", "CSS", "HTML"],
    description: "A JavaScript-based butterfly animation.",
    stars: 1,
  },
  {
    id: 6,
    title: "Univeristy Management System",
    repoLink: "https://github.com/khushi-jaiswal0512",
    image: "/ums.jpg",
    languages: ["C++", "MySQL"],
    description: "A Management System for a University.",
    stars: 0,
  },
];

const ProjectCard = ({ project }) => (
  <div className="transition-all duration-300 ease-in-out w-[350px]  h-full  text-left flex flex-col items-center border border-white/25 rounded-2xl bg-white/0 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] backdrop-blur-[18px] hover:translate-y-[-10px] hover:translate-x-[2px] hover:shadow-[0_16px_64px_0_rgba(255,255,255,0.15)] group-hover:blur-[3px] hover:!blur-none p-4">
    <Image
      height={300}
      width={1000}
      src={project.image}
      alt={project.title}
      className="w-[300px] h-[300px] object-cover rounded-lg"
    />
    <div className="repo-content w-full">
      <h6 className="flex items-center justify-between mt-5">
        <Link
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold hover:underline hover:underline-offset-2 ml-2"
        >
          {project.title}
        </Link>
        <span className="flex items-center text-yellow-500 mr-5">
          <FaStar />
          <span className="ml-1">{project.stars}</span>
        </span>
      </h6>
      <div className="repo-stats text-sm text-gray-300 mt-2 ml-2">
        {project.languages.map((lang, index) => (
          <span key={index} className="language-item">
            {lang}
            {index < project.languages.length - 1 && ", "}
          </span>
        ))}
      </div>
      <p className="mt-2 text-gray-400 ml-2 mb-5">{project.description}</p>
    </div>
  </div>
);

const Project = () => {
  return (
    <div className="container text-white mt-0 mx-auto" id="projects">
      <h4 className={`text-2xl sm:text-3xl md:text-4xl xl:text-5xl flex relative justify-center items-center pb-2 font-bold ${roboto.className}`}>
      <Marquee texts={["RECENT", "WORKS"]} speed={40} />
      </h4>
      <div className="flex flex-wrap max-w-[1200px] justify-center gap-10 pt-6 pb-56  mx-auto group">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
