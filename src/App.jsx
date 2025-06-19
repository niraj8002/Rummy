import React, { useState } from "react";
import "./App.css";
import { AppLayout } from "./AppLayout/applayout";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./NavLinkCom/Aboutus/aboutus";
import Navbar from "./HomeComponets/Navbar/navbar";
import Footer from "./HomeComponets/Footer/footer";
import ContactUs from "./NavLinkCom/Contactus/contactus";
import PrivacyPolicy from "./PrivacyPolicy/privacyPolicy";
import TermsAndConditions from "./TermsConditions/termsAndConditions";
import ReturnAndCancelation from "./ReturnAndCancelation/returnandcanelation";
import { RummyGame } from "./Games/Rummy/rummy";
import { PoolGame } from "./Games/Pool/pool";
import { PokerGame } from "./Games/Poker/poker";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        <Route path="/return_cancellation" element={<ReturnAndCancelation />} />
        <Route path="/game_rummy" element={<RummyGame />} />
        <Route path="/game_pool" element={<PoolGame />} />
        <Route path="/game_poker" element={<PokerGame />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
