"use client";

import Information from "@/components/Information";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      <Introduction />
      <Information />
      <TechStack />
    </div>
  );
}
