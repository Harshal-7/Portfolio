"use client";

import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Exo_2, Yeseva_One } from "next/font/google";
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
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiPrisma,
} from "react-icons/si";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import Autoscroll from "embla-carousel-auto-scroll";

const YesevaOne = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

const frontendTech = [
  {
    logo: <img src="/nextjs.svg" alt="" className="h-16 w-16" />,
    name: "Next.js",
  },
  {
    logo: <img src="/reactjs.svg" alt="" className="h-16 w-16" />,
    name: "React.js",
  },
  {
    logo: <img src="/typescript.svg" alt="" className="h-16 w-16" />,
    name: "TypeScript",
  },
  {
    logo: <img src="/javascript.svg" alt="" className="h-16 w-16" />,
    name: "JavaScript",
  },
  {
    logo: <img src="/tailwindcss.svg" alt="" className="h-16 w-16" />,
    name: "Tailwind",
  },
  {
    logo: <img src="/html5.svg" alt="" className="h-16 w-16" />,
    name: "HTML5",
  },
  {
    logo: <img src="/css3.svg" alt="" className="h-16 w-16" />,
    name: "CSS3",
  },
];

const backendTech = [
  {
    logo: <img src="/expressjs.svg" alt="" className="h-16 w-16" />,
    name: "Express.js",
  },
  {
    logo: <img src="/nodejs.svg" alt="" className="h-16 w-16" />,
    name: "node.js",
  },
  {
    logo: <img src="/mongodb.svg" alt="" className="h-16 w-16" />,
    name: "MongoDB",
  },

  {
    logo: <img src="/vercel.svg" alt="" className="h-16 w-16" />,
    name: "Vercel",
  },
  {
    logo: <img src="/github.svg" alt="" className="h-16 w-16" />,
    name: "Github",
  },
  {
    logo: <img src="/prisma.svg" alt="" className="h-16 w-16" />,
    name: "Prisma",
  },
];

const TechStack = () => {
  const plugin1 = React.useRef(
    // Autoplay({ delay: 2000, stopOnInteraction: false })
    Autoscroll({ speed: 2 })
  );
  const plugin2 = React.useRef(
    // Autoplay({ delay: 2000, stopOnInteraction: false })
    Autoscroll({ speed: 2 })
  );

  return (
    <MaxWidthWrapper className="mb-20">
      <div className="flex flex-col self-center gap-5">
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
        <div className="flex flex-col gap-5 justify-center items-center">
          <Carousel
            plugins={[plugin1.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            // onMouseEnter={plugin1.current.stop}
            // onMouseLeave={plugin1.current.reset}
            className="w-full max-w-2xl mx-auto"
          >
            <CarouselContent>
              {frontendTech.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 sm:basis-1/4 md:basis-1/4  "
                >
                  <div className="p-1">
                    <Card className="border-none shadow-none">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="flex flex-col justify-center items-center gap-2 font-semibold">
                          <span>{logo.logo}</span>
                          <span>{logo.name}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <Carousel
            plugins={[plugin2.current]}
            opts={{
              align: "center",
              loop: true,
            }}
            // onMouseEnter={plugin2.current.stop}
            // onMouseLeave={plugin2.current.reset}
            className="w-full max-w-2xl mx-auto"
          >
            <CarouselContent>
              {backendTech.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 sm:basis-1/4 md:basis-1/4  "
                >
                  <div className="p-1">
                    <Card className="border-none shadow-none">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="flex flex-col justify-center items-center gap-2 font-semibold">
                          <span>{logo.logo}</span>
                          <span>{logo.name}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default TechStack;
