import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

const PaymentCheckoutForm = ({ orderInfo }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");

  const { name: clientName, _id, email, quantity, purchasedItem } = orderInfo;
  const { name, price } = purchasedItem;
  const amount = quantity * price;

  const {
    isError,
    isSuccess,
    isLoading,
    mutate,
    error: queryErr,
    data: queryData,
  } = useMutation((payload) => {
    return axios.put("user/purchase/" + _id, payload);
  });

  // React query state
  if (isError) {
    toast.error(queryErr.message);
  }

  if (isSuccess) {
    const { data } = queryData;
    if (data.modifiedCount > 0) {
      toast.success("Successfully made payment");
    }
  }

  useEffect(() => {
    axios
      .post("/create-payment-intent", {
        price: amount,
      })
      .then(function (response) {
        setClientSecret(response.data.clientSecret);
      })
      .catch(function (error) {
        console.log(error);
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
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      });

    if (paymentError) {
      toast.error(paymentError?.message);
      console.log(error);
    } else {
      // console.log(paymentIntent);

      //store payment on database
      const payment = {
        order: _id,
        title: name,
        transactionId: paymentIntent.id,
      };

      // send data to server
      mutate(payment);
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
        className={`btn btn-sm btn-accent mt-8 btn-wide ${
          isLoading ? "loading" : ""
        }`}
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default PaymentCheckoutForm;
