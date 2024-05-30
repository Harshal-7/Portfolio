"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Introduction = () => {
  gsap.registerPlugin(ScrollTrigger);
  const MainRef = useRef(null);
  const bannerRef = useRef(null);

  useGSAP(() => {
    gsap.from(MainRef.current, {
      scrollTrigger: {
        trigger: MainRef.current,
      },
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1.2,
    });
    gsap.from(bannerRef.current, {
      scrollTrigger: {
        trigger: bannerRef.current,
      },
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
      duration: 1.2,
    });
  }, {});

  return (
    <MaxWidthWrapper className="py-5 flex flex-col justify-center items-center lg:flex-row sm:pb-32 lg:pt-24 xl:pt-32 lg:pb-52">
      {/* left-section  */}
      <div
        ref={MainRef}
        className="flex flex-1 flex-col justify-center items-center lg:items-start mt-2 "
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-center lg:text-start font-bold px-5 py-2">
          Harshal Shinde
        </h1>
        <p className="text-sm md:text-xl lg:text-2xl text-center lg:text-start text-foreground px-5 py-2">
          Enthusiastic web developer with a passion for crafting clean,
          efficient and user-friendly experiences. Always eager to embrace new
          challenges in the ever-evolving digital landscape.
        </p>
        <div className="flex gap-1 px-5 py-2 mt-2 mb-10 sm:mb-0">
          <Link
            href="https://github.com/Harshal-7"
            target="_blank"
            className="flex items-center"
          >
            <FaGithub className="w-6 h-6 md:w-9 md:h-8 mr-3" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/harshal-shinde-77a862210"
            target="_blank"
            className="flex items-center"
          >
            <FaLinkedin className="w-6 h-6 md:w-9 md:h-8 mr-3" />
          </Link>

          <Link
            href="https://twitter.com/hscodez"
            target="_blank"
            className="flex items-center"
          >
            <FaXTwitter className="w-6 h-6 md:w-9 md:h-8 mr-3" />
          </Link>
        </div>
      </div>

      {/* right-section  */}
      <div
        ref={bannerRef}
        className="flex flex-1 items-center justify-center p-4"
      >
        <img
          src="/svg5.svg"
          alt="svg5.svg"
          className="w-[300px] sm:w-[600px]"
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default Introduction;
