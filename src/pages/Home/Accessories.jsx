import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";
import AccessoryItem from "./AccessoryItem";

const Accessories = () => {
  const {
    isError,
    isLoading,
    error: queryErr,
    data: queryData,
  } = useQuery("accessoriesHome", () => axios.get("accessories"));

  // React query state
  if (isError) {
    return <Error msg={queryErr.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section class="max-w-screen-xl mx-auto py-12 lg:py-24">
      <h2 className="text-4xl lg:text-6xl text-center font-semibold mb-8 lg:mb-16">
        Accessories
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
        {queryData.data.map((item) => (
          <AccessoryItem key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Accessories;
