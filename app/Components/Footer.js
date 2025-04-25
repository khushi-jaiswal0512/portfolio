import React from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { RiCopyrightLine } from "react-icons/ri";
import { Roboto } from "next/font/google";
import { SpinningText } from "@/components/magicui/spinning-text";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const robotoMin = Roboto({
  weight: "300",
  subsets: ["latin"],
}); 

const Footer = () => {
  return (
    <>
      <div className="text-white flex justify-evenly min-h-[400px] pt-32">
        <div className="flex flex-col gap-3  md:block hidden">
          <span className="text-white/70 text-base mb-3">VER A.S.W</span>
          <div className="pt-2">
            <Link
              href="#home"
              className="relative inline-block after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full text-lg font-semibold"
            >
              Home
            </Link>
          </div>
        </div>

        <nav className="flex flex-col gap-3 md:block hidden">
          <span className={`${roboto.className} pb-3 text-white/70 text-base font-medium`}>SOCIALS</span>
          <div className="pt-2">
            <Link
              href="https://www.linkedin.com/in/khushijaiswal-/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg"
            >
              <FaLinkedin className="text-xl my-1 group-hover:text-blue-600 transition-colors" />
              <span className={`${robotoMin.className} hidden md:inline-block relative inline-block after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full`}>
                LinkedIn
              </span>
            </Link>
          </div>
          <div className="pt-0.5">
            <Link
              href="https://github.com/khushi-jaiswal0512"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg"
            >
              <FaGithub className="text-xl my-1 group-hover:text-gray-600 transition-colors" />
              <span className={`${robotoMin.className} hidden md:inline-block relative inline-block after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full`}>
                GitHub
              </span>
            </Link>
          </div>
          <div className="pt-0.5">
            <Link
              href="https://www.instagram.com/khushi_jaiiswal?igsh=MXZzODBwdnljaXEybg=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg"
            >
              <FaInstagram className="text-xl my-1 group-hover:text-pink-600 transition-colors" />
              <span className={`${robotoMin.className} hidden md:inline-block relative inline-block after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full`}>
                Instagram
              </span>
            </Link>
          </div>
          <div className="pt-0.5">
            <Link
              href="https://www.facebook.com/khushjaiswal.904"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg"
            >
              <FaFacebook className="text-xl my-1 group-hover:text-blue-600 transition-colors" />
              <span className={`${robotoMin.className} hidden md:inline-block relative inline-block after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full`}>
                Facebook
              </span>
            </Link>
          </div>
          <div className="pt-0.5">
            <Link
              href="https://x.com/khushijais53740?t=LTp5DXJ5W2qBl45YI_BOIA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg"
            >
              <FaTwitter className="text-xl my-1 group-hover:text-blue-400 transition-colors" />
              <span className={`${robotoMin.className} hidden md:inline-block relative inline-block after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full`}>
                Twitter
              </span>
            </Link>
          </div>
        </nav>

        <nav className="flex flex-col gap-3 md:block hidden">
          <span className={`${roboto.className} pb-3 text-white/70 text-base font-medium`}>CODING PROFILES</span>
          <div className="pt-2">
            <Link
              href="https://leetcode.com/u/khushi-jaiswal/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg"
            >
              <span className={`${robotoMin.className} after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full`}>
                Leetcode
              </span>
              <span className="text-white/60 mb-0.5">- 200+ Problems solved</span>
            </Link>
          </div>
          <div className="pt-0.5">
            <Link
              href="https://www.geeksforgeeks.org/user/khushijaik8ut/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg"
            >
              <span className={`${robotoMin.className} after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full`}>
                Geeksforgeeks
              </span>
              <span className="text-white/60 mb-0.5">- 50+ Problems Solved</span>
            </Link>
          </div>
          <div className="pt-0.5">
            <Link
              href="https://www.hackerrank.com/profile/khushijaiswal343"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-lg"
            >
              <span className={`${robotoMin.className} after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full`}>
                HackerRank
              </span>
              <span className="text-white/60 mb-0.5">- 5 stars on C++, SQL</span>
            </Link>
          </div>
        </nav>

        <div className={`flex flex-col gap-2 ${roboto.className}`}>
          <span className="text-white/70 text-base text-center md:text-left font-medium">CONTACT</span>
          <div>
            <Link
              href="mailto:aniketsahaworkspace@gmail.com"
              className={`${robotoMin.className} relative inline-block after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full text-lg`}
            >
              @WizardDesigns
            </Link>
          </div>
        </div>
      </div>
      
      <div className="text-white flex md:justify-between justify-center items-center pb-20 pt-20 text-base ">
        <span className={`flex relative items-center left-0 md:left-10 gap-2 top-6 ${roboto.className}`}> <RiCopyrightLine className="text-xl" /> 2025 Khushi Jaiswal. All rights reserved.</span>
        <div className="relative right-28 md:flex hidden">
            <SpinningText>adapt • innovate • change •</SpinningText>
          </div>
      </div>
    </>
  );
};

export default Footer;
