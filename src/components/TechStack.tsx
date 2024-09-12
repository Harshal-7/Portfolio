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
    Autoscroll({ speed: 1.8 })
  );
  const plugin2 = React.useRef(
    // Autoplay({ delay: 2000, stopOnInteraction: false })
    Autoscroll({ speed: 1.8 })
  );

  return (
    <MaxWidthWrapper className="my-10">
      <div className="flex flex-col self-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "text-4xl lg:text-6xl self-center mb-5 mt-5 font-bold lg:mb-8 text-[#5148fc]"
          )}
        >
          Tech Stack
        </motion.div>
        <div className="flex flex-col gap-2 md:gap-5 justify-center items-center">
          <Carousel
            plugins={[plugin1.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-3xl mx-auto"
            // onMouseEnter={plugin1.current.stop}
            onMouseLeave={plugin1.current.reset}
          >
            <CarouselContent>
              {frontendTech.map((logo, index) => (
                <CarouselItem key={index} className="basis-1/3 md:basis-1/5">
                  <div className="">
                    <Card className="border-none shadow-none">
                      <CardContent className="flex aspect-square items-center justify-center p-4 md:p-6">
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
            className="w-full max-w-3xl mx-auto"
            // onMouseEnter={plugin2.current.stop}
            onMouseLeave={plugin2.current.reset}
          >
            <CarouselContent>
              {backendTech.map((logo, index) => (
                <CarouselItem key={index} className="basis-1/3 md:basis-1/5">
                  <div className="p-1">
                    <Card className="border-none shadow-none">
                      <CardContent className="flex aspect-square items-center justify-center p-4 md:p-6">
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
