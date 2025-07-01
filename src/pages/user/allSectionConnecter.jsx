import React from "react";
import Navbar from "../../components/navbar/navbar";
import HeroSection from "./heroSection/heroSection";
import ServicesSection from "./serviceSection/ServicesSection";

const AllSectionConnecter = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default AllSectionConnecter;
