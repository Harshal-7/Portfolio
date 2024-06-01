"use client";

import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Yeseva_One } from "next/font/google";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./ui/card";
import { FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
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
import { motion } from "framer-motion";

const YesevaOne = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

const TechStack = () => {
  return (
    <MaxWidthWrapper className="mb-20">
      <div className="flex flex-col self-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl self-center mb-5 mt-5 font-extrabold lg:mb-8 text-[#5148fc]",
            YesevaOne.className
          )}
        >
          Tech Stack
        </motion.div>
        <div className="flex flex-col gap-10 md:flex-row md:gap-10 justify-center items-center ">
          {/* Frontend Development */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
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
          </motion.div>

          {/* Backend Development */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
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
          </motion.div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default TechStack;
