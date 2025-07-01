import React from "react";
import Navbar from "../HomeComponets/Navbar/navbar";
import NeonBanner from "../HomeComponets/HeroSection/Hero";
import TournamentsSection from "../HomeComponets/TournamentSection/tournament";
import GuideSection from "../HomeComponets/Guide/guide";
import Footer from "../HomeComponets/Footer/footer";
import { DownloadCTA } from "../DownloadAPK/DownloadCTA";

export const AppLayout = () => {
  return (
    <>
      <NeonBanner />
      <TournamentsSection />
      <GuideSection />
      <div className="bg-[#0B050C]">
        <DownloadCTA />
      </div>
    </>
  );
};
