import React, { useState } from "react";
import "./App.css";
import Navbar from "./HomeComponets/Navbar/navbar";
import NeonBanner from "./HomeComponets/HeroSection/Hero";
import GuideSection from "./HomeComponets/Guide/guide";
import TournamentsSection from "./HomeComponets/TournamentSection/tournament";
import Footer from "./HomeComponets/Footer/footer";
function App() {
  return (
    <>
      <Navbar />
      <NeonBanner />
      <TournamentsSection />
      <GuideSection />
      <Footer />
    </>
  );
}

export default App;
