import React from "react";
import Accessories from "./Home/Accessories";
import BusinessSummary from "./Home/BusinessSummary";
import Hero from "./Home/Hero";
import Reviews from "./Home/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <Accessories />
      <BusinessSummary />
      <Reviews />
    </>
  );
};

export default Home;
