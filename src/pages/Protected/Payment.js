import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PaymentCheckoutForm from "./Payment/PaymentCheckoutForm";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";

const stripePromise = loadStripe(
  "pk_test_51L3Q1dBqJojpurdcvD8UatCuxwMZiYuu9d6gZvocg14ixRcUT9hvJD4TslwQEbO8fp2FAIMRlqZ5s3K7Bxt67JA500ldJ6Si2c"
);

const Payment = () => {
  const { orderId } = useParams();

  const {
    isLoading,
    isError,
    error: queryErr,
    data: queryData,
  } = useQuery(["ordersById", orderId], () =>
    axios.get("user/purchase/" + orderId)
  );

  // Query state
  if (isError) {
    return <Error msg={queryErr?.message} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  const { name: clientName, quantity, purchasedItem } = queryData.data;
  const { name, price } = purchasedItem;

  return (
    <section className="max-w-screen-sm mx-auto">
      <div className="card w-full bg-neutral text-neutral-content mb-8">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Hello, {clientName}!</h2>
          <p>
            We are going to pay for <b>{name}</b> for <b>{quantity}</b>pcs each
            of <b>${price}</b>. Total <b>${quantity * price}</b> will be
            deducted from your card.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <Elements stripe={stripePromise}>
          <PaymentCheckoutForm orderInfo={queryData.data} />
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
