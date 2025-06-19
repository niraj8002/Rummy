import React from "react";
import Navbar from "../HomeComponets/Navbar/navbar";
import NeonBanner from "../HomeComponets/HeroSection/Hero";
import TournamentsSection from "../HomeComponets/TournamentSection/tournament";
import GuideSection from "../HomeComponets/Guide/guide";
import Footer from "../HomeComponets/Footer/footer";

export const AppLayout = () => {
  return (
    <>
      <NeonBanner />
      <TournamentsSection />
      <GuideSection />
    </>
  );
};
