import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PurchaseItem } from "./Purchase/PurchaseItem";

import OrderNow from "./Purchase/OrderNow";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";

// form validation rules

const Purchase = () => {
  const { id: purchaseId } = useParams();

  // create purchase collection in db
  const {
    isLoading,
    isError,
    error: queryErr,
    data: queryData,
  } = useQuery(["purchaseById", purchaseId], () =>
    axios.get("accessories/" + purchaseId)
  );

  // User state
  if (isError) {
    return <Error msg={queryErr?.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="py-8 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12">
      <PurchaseItem itemInfo={queryData.data} />

      <OrderNow itemInfo={queryData.data} />
    </section>
  );
};

export default Purchase;
