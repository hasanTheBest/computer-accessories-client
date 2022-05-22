import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useMutation } from "react-query";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../Components/Loading";
import Error from "../../Components/Error";

const AddReview = () => {
  // user
  const [user, loading, error] = useAuthState(auth);

  // form validation rules
  const validationSchema = Yup.object().shape({
    review: Yup.string().required("Review is required").trim(),
    ratings: Yup.number()
      .min(1, "Minimum number value 1")
      .max(5, "Maximum number value 5")
      .required("Ratings is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm(formOptions);

  const {
    isError,
    isSuccess,
    isLoading,
    mutate,
    error: queryErr,
    data: queryData,
  } = useMutation((payload) => {
    return axios.post("/user/review", payload);
  });

  // user related state
  if (error) {
    return <Error msg={error.message} />;
  }

  if (loading) {
    return <Loading />;
  }

  // Input form submission - add Review
  const onSubmit = (data) => {
    const { displayName, email, photoURL } = user;
    mutate({ ...data, displayName, email, photoURL });
  };

  // React query state
  if (isError) {
    toast.error(queryErr.message);
  }

  if (isSuccess) {
    const { data } = queryData;
    if (data.insertedId) {
      toast.success("Successfully added a review");
    }
  }

  return (
    <section className="py-8 md:py-16">
      <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
        <div className="card-body">
          <h2 className="text-2xl font-bold mb-4 text-center">Add a review</h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Ratings */}
            <div className="from-control">
              <label className="label">
                <span className="label-text-alt">Rating</span>
              </label>
              <input
                type="number"
                placeholder="Your rating out of 5"
                className={`input input-bordered w-full ${
                  errors.ratings
                    ? "input-error"
                    : touchedFields.ratings && "input-success"
                }`}
                {...register("ratings")}
              />
              <label className="label">
                <span className="text-red-600 label-text-alt">
                  {errors.ratings?.message}
                </span>
              </label>
            </div>

            {/* Textarea */}
            <div className="from-control">
              <label className="label">
                <span className="label-text-alt">Description</span>
              </label>
              <textarea
                placeholder="Review"
                className={`textarea textarea-bordered w-full ${
                  errors.review
                    ? "textarea-error"
                    : touchedFields.review && "textarea-success"
                }`}
                {...register("review")}
              ></textarea>

              <label className="label">
                <span className="text-red-600 label-text-alt">
                  {errors.review?.message}
                </span>
              </label>
            </div>

            {/* Submit button */}
            <input
              type="submit"
              className={`btn btn-accent btn-wide self-center ${
                isLoading ? "loading btn-disabled" : ""
              }`}
              value="Add"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddReview;
