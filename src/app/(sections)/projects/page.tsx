"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCard from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import { Yeseva_One } from "next/font/google";
import { motion } from "framer-motion";

const YesevaOne = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

const projects = [
  {
    title: "Vinox Technologies",
    desc: "Developed a fully functional website for a client using Next.js with TypeScript as a freelancer.",
    liveLink: "https://www.vinoxtechnologies.com",
    img: "/vinox-temp.png",
    gitLink: "",
  },
  {
    title: "Authentication App",
    desc: "Built a secure Authentication Application with Auth.js in Next.js",
    liveLink: "https://auth-app-harshal.vercel.app",
    img: "/auth1.png",
    gitLink: "https://github.com/Harshal-7/auth-app",
  },
  {
    title: "Flashcard Generator",
    desc: "Developed a Flashcard Generator application using React, Redux.",
    liveLink: "https://flashcard-generator-one.vercel.app",
    img: "/flashcard1.png",
    gitLink: "https://github.com/Harshal-7/flashcard-generator",
  },
  {
    title: "Task Manager",
    desc: "Developed a functional Task manager app using React, Redux",
    liveLink: "https://task-one-liart.vercel.app",
    img: "/tasks.png",
    gitLink: "https://github.com/Harshal-7/Task",
  },
  {
    title: "Weather App",
    desc: "Developed a weather app in Next.js allowing users to search for weather information based on city name.",
    liveLink: "https://weather-app-nu-silk-36.vercel.app",
    img: "/weatherapp.png",
    gitLink: "https://github.com/Harshal-7/weather-app",
  },

  {
    title: "BMI Calculator",
    desc: "Simple BMI Calculator, used to estimate a person's weight-related health risks.",
    liveLink: "https://harshal-7.github.io/Mini-Projects/bmi-calculator",
    img: "/bmi.png",
    gitLink:
      "https://github.com/Harshal-7/Mini-Projects/tree/main/bmi-calculator",
  },
];

const ProjectsPage = () => {
  return (
    <MaxWidthWrapper className="min-h-screen w-full flex flex-col justify-start items-center p-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className={cn(
          "text-5xl lg:text-7xl font-bold text-center p-4 text-[#5148fc]",
          YesevaOne.className
        )}
      >
        Projects
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-12 md:mt-12 grid lg:grid-cols-2 gap-10"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            liveLink={project.liveLink}
            gitLink={project.gitLink}
            img={project.img}
          />
        ))}
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default ProjectsPage;
