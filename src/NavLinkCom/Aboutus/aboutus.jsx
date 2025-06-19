import React from "react";
import Banner from "../../Reuseable Com/Banner";
import IntroductionSection from "./IntroductionSection ";
import bannerimg from "../../assets//bannerimg/aboutBanner.jpg";

import WhatWeOffer from "./whatWeOffer";

export const AboutUs = () => {
  return (
    <>
      <Banner img={bannerimg} heading="Where Gamers Level Up" />
      <IntroductionSection />
      <WhatWeOffer />
    </>
  );
};
