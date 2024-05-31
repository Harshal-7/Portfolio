"use client";

import Footer from "@/components/Footer";
import Information from "@/components/Information";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Information />
      <TechStack />
      <Footer />
    </div>
  );
}
