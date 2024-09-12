"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCard from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import { Yeseva_One } from "next/font/google";
import { motion } from "framer-motion";
import { projects } from "@/config/CONFIG";

const YesevaOne = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

const ProjectsPage = () => {
  return (
    <MaxWidthWrapper className="min-h-screen w-full flex flex-col justify-start items-center p-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={cn(
          "text-5xl lg:text-7xl font-bold text-center p-4 text-[#5148fc]"
        )}
      >
        Projects
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
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
