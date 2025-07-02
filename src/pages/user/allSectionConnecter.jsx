import React from "react";
import Navbar from "../../components/navbar/navbar";
import HeroSection from "./heroSection/heroSection";
import ServicesSection from "./serviceSection/ServicesSection";
import SkillsSection from "./skillsSection/SkillsSection";

const AllSectionConnecter = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
    </div>
  );
};

export default AllSectionConnecter;
