"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUp, ArrowUpCircle } from "lucide-react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { useScrollPositionArrow } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";

export const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollPosition = useScrollPositionArrow();
  const isScrolled = scrollPosition > 5 ? "opacity-100" : "opacity-0";

  return (
    <Button
      onClick={scrollToTop}
      variant="link"
      className="p-0 fixed bottom-4 right-4 p-2z-[999] "
    >
      {/* <ArrowUpCircle  /> */}
      <FaArrowAltCircleUp
        className={cn(
          "h-7 w-7 hover:scale-110 transition-all duration-700",
          isScrolled
        )}
      />
    </Button>
  );
};
