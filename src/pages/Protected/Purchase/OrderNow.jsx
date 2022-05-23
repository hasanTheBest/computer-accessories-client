import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

import { useMutation } from "react-query";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import useValidationSchema from "./userValidationSchema";
import Loading from "../../../Components/Loading";
import Error from "../../../Components/Error";

// form validation rules
const OrderNow = ({ itemInfo }) => {
  // User
  const [user, loading, error] = useAuthState(auth);

  const formOptions = useValidationSchema(
    itemInfo.min_order,
    itemInfo.quantity
  );

  // input validation
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm(formOptions);

  // create purchase collection in db
  const {
    isLoading,
    isError,
    isSuccess,
    error: queryErr,
    mutate,
    data: queryData,
  } = useMutation((payload) => {
    return axios.post("/user/purchase", payload);
  });

  // User state
  if (error) {
    return <Error msg={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  // Query state
  if (isError) {
    toast.error(queryErr.message);
  }

  if (isSuccess) {
    toast.success("Order is placed. Thank you");
  }

  const onSubmit = (data) => {
    mutate({ ...data, purchasedItem: itemInfo });
  };

  // Query Error
  if (isError) {
    toast.error(queryErr.message);
  }

  if (isSuccess) {
    if (queryData.data.insertedId) {
      toast.success("Successfully made a order. Thank you");
    }
  }

  return (
    <div className="card bg-base-100 shadow-xl w-full lg:w-1/2 flex-grow-1">
      <div className="card-body">
        <h2 className="text-xl font-bold mb-4 text-center">Order Now</h2>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="form-control">
            <label class="label">
              <span class="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className={`input input-bordered w-full ${
                errors.name
                  ? "input-error"
                  : touchedFields.name && "input-success"
              }`}
              readOnly
              defaultValue={user.displayName}
              {...register("name")}
            />
            <label className="label">
              <span className="text-red-600 label-text-alt">
                {errors.name?.message}
              </span>
            </label>
          </div>

          {/* Email */}
          <div className="from-control">
            <label class="label">
              <span class="label-text">Email*</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className={`input input-bordered w-full ${
                errors.email
                  ? "input-error"
                  : touchedFields.email && "input-success"
              }`}
              readOnly
              defaultValue={user.email}
              {...register("email")}
            />
            <label className="label">
              <span className="text-red-600 label-text-alt">
                {errors.email?.message}
              </span>
            </label>
          </div>

          {/* Phone Number */}
          <div className="form-control">
            <label class="label">
              <span class="label-text">Phone Number*</span>
            </label>
            <input
              type="text"
              placeholder="Your Phone Number"
              className={`input input-bordered w-full ${
                errors.phone
                  ? "input-error"
                  : touchedFields.phone && "input-success"
              }`}
              {...register("phone")}
            />
            <label className="label">
              <span className="text-red-600 label-text-alt">
                {errors.phone?.message}
              </span>
            </label>
          </div>

          {/* Address */}
          <div className="form-control">
            <label class="label">
              <span class="label-text">Address*</span>
            </label>
            <input
              type="text"
              placeholder="Your Address"
              className={`input input-bordered w-full ${
                errors.address
                  ? "input-error"
                  : touchedFields.address && "input-success"
              }`}
              {...register("address")}
            />
            <label className="label">
              <span className="text-red-600 label-text-alt">
                {errors.address?.message}
              </span>
            </label>
          </div>

          {/* Quantity */}
          <div className="form-control">
            <label class="label">
              <span class="label-text">Quantity*</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              className={`input input-bordered w-full ${
                errors.quantity
                  ? "input-error"
                  : touchedFields.quantity && "input-success"
              }`}
              {...register("quantity")}
            />
            <label className="label">
              <span className="text-red-600 label-text-alt">
                {errors.quantity?.message}
              </span>
            </label>
          </div>

          {/* Submit button */}
          <input
            type="submit"
            className={`btn btn-accent btn-wide self-center ${
              isLoading ? "loading btn-disabled" : ""
            }`}
            value="Order"
          />
        </form>
      </div>
    </div>
  );
};

export default OrderNow;
