// pages/index.tsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import EQSection from "../components/EQSection";
import AppSection from "../components/AppSection";
import ImprovementSection from "../components/ImprovementSection";
import TestimonialSection from "../components/TestimonialSection";
import WorkSection from "../components/WorkSection";
import VacanciesSection from "../components/VacanciesSection";
import FamiliarSection from "../components/SoundsFamiliar";
import TestSection from "../components/TestSection";
import TipsSection from "../components/TipsSection";
import EQSection2 from "../components/EQSection2";
import FooterSection from "../components/footerSection";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <EQSection />
      <FamiliarSection/>
      <TipsSection/>
      <AppSection />
      <ImprovementSection />
      <EQSection2/>
      <TestimonialSection />
      <TestSection/>
      <WorkSection />
      <VacanciesSection />
      <FooterSection/>
    </div>
  );
};

export default Home;
