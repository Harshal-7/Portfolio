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
const YesevaOne = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

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
            "text-2xl md:text-4xl lg:text-5xl self-center mb-5 mt-10 font-extrabold lg:mb-8 text-[#5148fc]",
            YesevaOne.className
          )}
        >
          Tech Stack
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-20 ">
          {/* Frontend Development */}
          <div
            ref={frontend}
            className="p-8 px-4 sm:px-24 border rounded-2xl hover:border-[#3730ca]"
          >
            <h3 className="text-base sm:text-2xl text-center mb-10 font-bold text-[#6C63FF]">
              Frontend Development
            </h3>
            <div className="grid grid-cols-2 gap-12 gap-x-5 sm:gap-x-52 text-sm sm:text-xl">
              <Link
                href="https://react.dev/"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                ReactJs
                <img src="/react.svg" className="h-5 md:h-9 ml-3" alt="react" />
              </Link>
              <Link
                href="https://nextjs.org/"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                Next.js
                <Image
                  className="hidden dark:inline-block h-5 lg:ml-3"
                  src="/nextjs.svg"
                  alt="dark-mode-image"
                  width={36}
                  height={36}
                />
                <Image
                  className="inline-block dark:hidden h-5 lg:ml-3"
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
                <img src="/js.png" className="h-5 md:h-9 ml-3" alt="js" />
              </Link>
              <Link
                href="https://www.typescriptlang.org/"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                Typescript
                <img src="/ts.svg" className="h-5 md:h-9 ml-3" alt="react" />
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                HTML5
                <img src="/html5.png" className="h-5 md:h-9 ml-3" alt="html5" />
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                CSS3
                <img src="/css3.png" className="h-5 md:h-9 ml-3" alt="css3" />
              </Link>
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                Tailwind
                <img src="/tailwind.svg" className="h-4 ml-3" alt="react" />
              </Link>
            </div>
          </div>

          {/* Backend Development */}
          <div
            ref={backend}
            className="p-8 px-4 sm:px-24 border rounded-2xl hover:border-[#3730ca]"
          >
            <h3 className="text-base sm:text-2xl text-center mb-10 font-bold text-[#6C63FF]">
              Backend Development
            </h3>
            <div className="grid grid-cols-2 gap-12 gap-x-5 sm:gap-x-52 text-sm sm:text-xl">
              <Link
                href="https://nodejs.org/en"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                Node.js
                <img
                  src="/nodejs.png"
                  className="h-5 md:h-9 ml-3"
                  alt="react"
                />
              </Link>
              <Link
                href="https://www.mongodb.com/"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                MongoDB
                <img
                  src="/mongodb.svg"
                  className="h-5 md:h-9 ml-3"
                  alt="react"
                />
              </Link>
              <Link
                href="https://www.mysql.com/"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                MySQL
                <img src="/mysql.svg" className="h-5 md:h-9 ml-3" alt="react" />
              </Link>
              <Link
                href="https://vercel.com"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                Vercel
                <img
                  src="/vercel.svg"
                  className="h-4 md:h-5 ml-3"
                  alt="react"
                />
              </Link>
              <Link
                href="https://www.prisma.io"
                target="_blank"
                className="flex items-center hover:text-[#6C63FF]"
              >
                Prisma
                <img
                  src="/prisma.svg"
                  className="h-5 md:h-9 ml-3"
                  alt="react"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default TechStack;
