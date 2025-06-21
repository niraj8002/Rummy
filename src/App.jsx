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
import { PoolGame } from "./Games/Pool/pool";
import { PokerGame } from "./Games/Poker/poker";
import TrafficLight from "./li";
import { RummyGame } from "./Games/Rummy/MainRummy/rummy";
import { RummyPointGame } from "./Games/Rummy/RummyChildGame/Rummypoint/rummypoint";
import { RummyPoolGame } from "./Games/Rummy/RummyChildGame/RummyPool/rummypool";
import { RummyDealGame } from "./Games/Rummy/RummyChildGame/DealRummy/rummyDeal";
import LoginPage from "./Login/login";
import RegisterPage from "./Register/regiter";
import DownloadPage from "./DownloadAPK/download";
import Profilepage from "./Profile/profile";
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
        <Route path="/point_rummy_game" element={<RummyPointGame />} />
        <Route path="/pool_rummy_game" element={<RummyPoolGame />} />
        <Route path="/deal_rummy_game" element={<RummyDealGame />} />
        <Route path="/li" element={<TrafficLight />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/download_apk" element={<DownloadPage />} />
        <Route path="/profile" element={<Profilepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
