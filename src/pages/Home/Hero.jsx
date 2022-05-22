import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";

const Hero = () => {
  const {
    isError,
    isLoading,
    error: queryErr,
    data: queryData,
  } = useQuery("heroBanner", () => axios.get("banner"));

  // React query state
  if (isError) {
    return <Error msg={queryErr.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const {
    data: { image, name, description },
  } = queryData;

  return (
    <section class="max-w-screen-xl mx-auto hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row gap-8">
        <img src={image} class="max-w-sm rounded-lg shadow-2xl" alt={name} />
        <div>
          <h1 class="text-3xl lg:text-5xl font-bold">{name}</h1>
          <p class="py-6">{description}</p>
          <button class="btn btn-primary">Place Order</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
