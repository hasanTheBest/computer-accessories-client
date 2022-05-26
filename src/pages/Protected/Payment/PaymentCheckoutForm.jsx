import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const PaymentCheckoutForm = ({ orderInfo }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");

  const { name: clientName, email, quantity, purchasedItem } = orderInfo;
  const { name, price } = purchasedItem;
  const amount = quantity * price;

  useEffect(() => {
    axios
      .post("/create-payment-intent", {
        price: amount,
      })
      .then(function (response) {
        console.log(response);
        // setClientSecret(data.data.clientSecret);
      })
      .catch(function (error) {
        toast.error(error);
      });
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error?.message);
      // console.log("[error]", error);
    } else {
      // toast.success(JSON.stringify(paymentMethod, null, 2));
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-accent mt-8 btn-wide"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default PaymentCheckoutForm;
