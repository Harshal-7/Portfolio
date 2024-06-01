"use client";

import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Yeseva_One } from "next/font/google";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./ui/card";
import { FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
const YesevaOne = Yeseva_One({ subsets: ["latin"], weight: ["400"] });
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiVercel,
} from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFramer } from "react-icons/si";

const TechStack = () => {
  gsap.registerPlugin(ScrollTrigger);
  const title = useRef(null);
  const frontend = useRef(null);
  const backend = useRef(null);

  useGSAP(() => {
    gsap.from(title.current, {
      scrollTrigger: {
        trigger: title.current,
      },
      y: 100,
      opacity: 0,
      ease: "power1.out",
      duration: 1,
    });
    gsap.from(frontend.current, {
      scrollTrigger: {
        trigger: frontend.current,
      },
      y: 100,
      opacity: 0,
      ease: "power1.out",
      duration: 1.5,
    });
    gsap.from(backend.current, {
      scrollTrigger: {
        trigger: backend.current,
      },
      y: 100,
      opacity: 0,
      ease: "power1.out",
      duration: 1.5,
    });
  }, {});
  return (
    <MaxWidthWrapper className="mb-20">
      <div className="flex flex-col self-center">
        <div
          ref={title}
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl self-center mb-5 mt-5 font-extrabold lg:mb-8 text-[#5148fc]",
            YesevaOne.className
          )}
        >
          Tech Stack
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:gap-10 justify-center items-center ">
          {/* Frontend Development */}
          {/* <div
            ref={frontend}
            className="w-72 lg:w-full p-4 md:p-6 border rounded-2xl hover:border-[#3730ca]"
          >
            <h3 className="text-base sm:text-2xl text-center mb-10 font-bold text-[#6C63FF]">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 gap-12 sm:gap-x-52 text-sm sm:text-xl">
              <Link
                href="https://react.dev/"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                ReactJs
                <img src="/react.svg" className="h-5 md:h-9 " alt="react" />
              </Link>
              <Link
                href="https://nextjs.org/"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                Next.js
                <Image
                  className="hidden dark:inline-block h-5 "
                  src="/nextjs.svg"
                  alt="dark-mode-image"
                  width={36}
                  height={36}
                />
                <Image
                  className="inline-block dark:hidden h-5 "
                  src="/nextjs-dark.svg"
                  alt="light-mode-image"
                  width={36}
                  height={36}
                />
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                Javascript
                <img src="/js.png" className="h-5 md:h-9 " alt="js" />
              </Link>
              <Link
                href="https://www.typescriptlang.org/"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                Typescript
                <img src="/ts.svg" className="h-5 md:h-9 " alt="react" />
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                HTML5
                <img src="/html5.png" className="h-5 md:h-9 " alt="html5" />
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                CSS3
                <img src="/css3.png" className="h-5 md:h-9 " alt="css3" />
              </Link>
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                Tailwind
                <img src="/tailwind.svg" className="h-4 " alt="react" />
              </Link>
            </div>
          </div> */}

          <Card className="w-[350px] md:w-[500px] flex flex-col items-center justify-center hover:scale-105 transition-all duration-500">
            <CardHeader className="text-2xl font-bold text-[#6C63FF]">
              Frontend Development
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-10 md:gap-x-20 md:gap-y-12">
                <Link
                  href="https://react.dev/"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  ReactJs
                  <FaReact className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                <Link
                  href="https://nextjs.org/"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  Next.js
                  <RiNextjsFill className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  Javascript
                  <SiJavascript className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                <Link
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  Typescript
                  <SiTypescript className="w-5 h-5 md:w-6 md:h-6" />
                </Link>

                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  Tailwind
                  <SiTailwindcss className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  Framer <SiFramer className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  className="flex gap-3 flex-grow  items-center hover:text-[#6C63FF]"
                >
                  HTML5
                  <FaHtml5 className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  className="flex gap-3 flex-grow  items-center hover:text-[#6C63FF]"
                >
                  CSS3
                  <FaCss3 className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Backend Development */}
          <Card className="w-[350px] md:w-[500px] md:min-h-[346px] flex flex-col items-center hover:scale-105 transition-all duration-500">
            <CardHeader className="text-2xl font-bold text-[#6C63FF]">
              Backend Development
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-10 md:gap-x-20 md:gap-y-12">
                <Link
                  href="https://react.dev/"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  Node.js
                  <SiNodedotjs className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                <Link
                  href="https://nextjs.org/"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  Express.js
                  <SiExpress className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  MongoDB
                  <SiMongodb className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                <Link
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  MySQL
                  <SiMysql className="w-5 h-5 md:w-6 md:h-6" />
                </Link>

                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  Vercel
                  <SiVercel className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                <Link
                  href="https://tailwindcss.com/"
                  target="_blank"
                  className="flex gap-3 flex-grow items-center hover:text-[#6C63FF]"
                >
                  GitHub <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default TechStack;
