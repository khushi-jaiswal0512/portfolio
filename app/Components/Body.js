"use client";

import React from "react";
import Link from "next/link";
import { Roboto, Playfair_Display } from "next/font/google";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { ReactTyped } from "react-typed";
import TiltedCard from "@/components/TiltedCard/TiltedCard";

const robotoMin = Roboto({
  weight: ["300"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const robotoMedium = Roboto({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const robotoMax = Roboto({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const UnderlineLink = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative font-normal"
  >
    {children}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

export default function Page() {
  return (
    <>
      <div className="flex justify-between items-center bg-white min-h-[95vh]  lg:flex-row flex-col">
        <main className="flex flex-col p-10 justify-center md:justify-center xl:justify-start lg:justify-start min-h-[75vh]  max-w-[100%] md:max-w-[100%] lg:max-w-[70%] xl:max-w-[75%] ">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl xl:text-5xl ${robotoMedium.className}`}>Hello</h1>
          <p className={`text-3xl sm:text-5xl md:text-6xl xl:text-7xl mt-2 mb-3 ${playfair.className} `}>
            I'm{" "}
            <ReactTyped
              strings={["a Web Developer", "Khushi Jaiswal", "a Software Dev"]}
              typeSpeed={80}
              backSpeed={90}
              loop
            />
          </p>

          <p className={`text-lg sm:text-lg md:text-xl xl:text-2xl mt-1 ${robotoMin.className}`}>
            I build dynamic web apps with{" "}
            <UnderlineLink href="https://react.dev/">React</UnderlineLink> and{" "}
            <UnderlineLink href="https://nextjs.org/">Next.js</UnderlineLink>{" "}
            while exploring cloud computing and data analysis. My projects span full-stack platforms to cloud-based solutions, aiming for efficiency and impact.
          </p>

          <p className={`text-lg sm:text-lg md:text-xl xl:text-2xl mt-14 ${robotoMin.className}`}>
            Many know me from{" "}
            <UnderlineLink href="https://www.linkedin.com/in/khushijaiswal-/">
              LinkedIn
            </UnderlineLink>{" "}
            and{" "}
            <UnderlineLink href="https://github.com/khushi-jaiswal0512">
              GitHub
            </UnderlineLink>
            , where I share projects and learnings.
          </p>

          <p
            className={`text-lg sm:text-lg md:text-xl xl:text-2xl mt-1 flex items-center ${robotoMax.className}`}
          >
            Let’s build something amazing together!
            <span className="ml-6">
              <Link href="Khushi cv 1.pdf" target="_blank">
                <ShinyButton className="bg-[rgba(255,255,255,.55)] ">
                  Resume
                </ShinyButton>
              </Link>
            </span>
          </p>
        </main>
        <div className="max-w-[25%] xl:max-w-[20%] relative justify-center lg:bottom-16  xl:bottom-10  right-20 lg:flex hidden">
          <TiltedCard
            imageSrc="pro pic.jpg"
            altText="Khushi Jaiswal - Wiz"
            captionText="Khushi Jaiswal"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text ">Khushi Jaiswal - Wiz</p>
            }
          />
        </div>
      </div>
    </>
  );
}
