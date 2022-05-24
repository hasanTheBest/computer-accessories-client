import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { useOutletContext } from "react-router-dom";
import useProductSchema from "./AddProduct/useProductSchema";

// form validation rules
const AddProduct = ({ user, refetch, userInfo }) => {
  const { displayName: name, email } = useOutletContext();
  const formOptions = useProductSchema();

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
    return axios.post("/products", payload);
  });

  // Query Error
  if (isError) {
    toast.error(queryErr.message);
  }

  if (isSuccess) {
    if (queryData.data.result.modifiedCount > 0) {
      toast.success("Successfully post a accessories. Thank you");
      refetch();
    }
  }

  const onSubmit = (data) => {
    console.log(data);
    // mutate(data);
  };

  return (
    <div className="card bg-base-100 shadow max-w-screen-md mx-auto">
      <div className="card-body">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Add a product
        </h2>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="form-control">
            <label class="input-group">
              <span>Name*</span>
              <input
                type="text"
                placeholder="Accessory title/name"
                className={`input input-bordered w-full ${
                  errors.name
                    ? "input-error"
                    : touchedFields.name && "input-success"
                }`}
                {...register("name")}
              />
            </label>
            <label className="label ml-24">
              <span className="text-red-600 label-text-alt">
                {errors.name?.message}
              </span>
            </label>
          </div>

          {/* Quantity */}
          <div className="from-control">
            <label class="input-group">
              <span>Quantity*</span>
              <input
                type="number"
                placeholder="Stock Quantity"
                className={`input input-bordered w-full ${
                  errors.quantity
                    ? "input-error"
                    : touchedFields.quantity && "input-success"
                }`}
                {...register("quantity")}
              />
            </label>
            <label className="label ml-24">
              <span className="text-red-600 label-text-alt">
                {errors.quantity?.message}
              </span>
            </label>
          </div>

          {/* Min Order */}
          <div className="form-control">
            <label class="input-group">
              <span>Min Order*</span>
              <input
                type="text"
                placeholder="Minimum Order Quantity"
                className={`input input-bordered w-full ${
                  errors.min_order
                    ? "input-error"
                    : touchedFields.min_order && "input-success"
                }`}
                {...register("min_order")}
              />
            </label>
            <label className="label ml-24">
              <span className="text-red-600 label-text-alt">
                {errors.min_order?.message}
              </span>
            </label>
          </div>

          {/* Price */}
          <div className="form-control">
            <label class="input-group">
              <span>Unit Price*</span>
              <input
                type="text"
                placeholder="Unit Price"
                className={`input input-bordered w-full ${
                  errors.price
                    ? "input-error"
                    : touchedFields.price && "input-success"
                }`}
                {...register("price")}
              />
            </label>
            <label className="label ml-24">
              <span className="text-red-600 label-text-alt">
                {errors.price?.message}
              </span>
            </label>
          </div>

          {/* Description */}
          <div className="form-control">
            <label class="input-group">
              <span>Description*</span>
              <input
                type="text"
                placeholder="Say something about product"
                className={`input input-bordered w-full ${
                  errors.description
                    ? "input-error"
                    : touchedFields.description && "input-success"
                }`}
                {...register("description")}
              />
            </label>
            <label className="label ml-24">
              <span className="text-red-600 label-text-alt">
                {errors.description?.message}
              </span>
            </label>
          </div>

          {/* Image */}
          <div className="form-control">
            <label class="input-group">
              <span>Image*</span>
              <input
                type="file"
                className={`input input-bordered w-full ${
                  errors.file
                    ? "input-error"
                    : touchedFields.file && "input-success"
                }`}
                {...register("image")}
              />
            </label>

            <label className="label ml-24">
              <span className="text-red-600 label-text-alt">
                {errors.file?.message}
              </span>
            </label>
          </div>

          {/* Submit button */}
          <input
            type="submit"
            className={`btn btn-accent btn-wide self-center ${
              isLoading ? "loading" : ""
            }`}
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
