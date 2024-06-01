"use client";

import Footer from "@/components/Footer";
import Information from "@/components/Information";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import ProjectsPage from "./(sections)/projects/page";
import ContactPage from "./(sections)/contact/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Information />
      <TechStack />
      <div className="block md:hidden">
        <ProjectsPage />
      </div>
      <div className="block md:hidden">
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}
