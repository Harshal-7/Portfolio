"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowUpRight, Github } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

const ProjectCard = ({
  title,
  desc,
  liveLink,
  gitLink,
  img,
}: {
  title?: string;
  desc?: string;
  liveLink: string;
  gitLink?: string;
  img?: string;
}) => {
  return (
    <div className="flex flex-col max-w-80 md:max-w-xl border rounded-lg shadow-lg dark:bg-background relative group hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <Link href={liveLink} target="_blank">
        <img
          className="rounded-t-lg h-[150px] md:h-[300px] w-full object-cover"
          src={img}
          alt="img"
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <Link href={liveLink} target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-center transition-colors duration-300 group-hover:text-[#5148fc]">
            {title}
          </h5>
        </Link>
        <p className="mb-5 text-center transition-colors duration-300 flex-grow">
          {desc}
        </p>
        <div className="flex justify-between items-center">
          <Link href={liveLink} target="_blank">
            <div className="mx-auto flex w-full max-w-lg items-center justify-center">
              <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border p-[3px]">
                <div className="animate-rotate absolute inset-0 h-full w-full rounded-full group-hover:bg-[conic-gradient(#5d55ff_20deg,transparent_120deg)]"></div>
                <div className="relative z-20 flex w-full rounded-[0.60rem] bg-background">
                  <Button
                    variant="link"
                    className="text-[#5d55ff] relative z-20"
                  >
                    Live link <ArrowUpRight className="w-5 h-5 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
          {gitLink ? (
            <Link href={gitLink} target="_blank">
              <FaGithub className="w-5 h-5 mr-1" />
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
