import React from "react";
import Accessories from "./Home/Accessories";
import AccessoriesWeProvide from "./Home/AccessoriesWeProvide";
import BusinessSummary from "./Home/BusinessSummary";
import ChooseUs from "./Home/ChooseUs";
import Hero from "./Home/Hero";
import Reviews from "./Home/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <Accessories />
      <AccessoriesWeProvide />
      <BusinessSummary />
      <Reviews />
      <ChooseUs />
    </>
  );
};

export default Home;
