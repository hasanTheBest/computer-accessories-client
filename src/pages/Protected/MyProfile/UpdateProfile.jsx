import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

import { useMutation } from "react-query";
import toast from "react-hot-toast";
import profileValidationSchema from "./profileValidationSchema";

// form validation rules
const UpdateProfile = ({ user, refetch }) => {
  const { displayName: name, email } = user;
  const formOptions = profileValidationSchema();

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
    return axios.put("/user", payload);
  });

  // Query Error
  if (isError) {
    toast.error(queryErr.message);
  }

  if (isSuccess) {
    if (queryData.data.result.modifiedCount > 0) {
      toast.success("Successfully made a update. Thank you");
      console.log("ok updated");
      refetch();
    }
  }

  const onSubmit = (data) => {
    // console.log(data);
    mutate(data);
  };

  return (
    <div className="card bg-base-100 shadow w-full lg:w-1/2 flex-grow-1">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Update Profile
        </h2>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="form-control">
            <label class="label">
              <span class="label-text">Name*</span>
            </label>
            <input
              type="text"
              placeholder="Passionate Web Developer"
              defaultValue={name}
              className={`input input-bordered w-full ${
                errors.name
                  ? "input-error"
                  : touchedFields.name && "input-success"
              }`}
              readOnly
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
              defaultValue={email}
              className={`input input-bordered w-full ${
                errors.email
                  ? "input-error"
                  : touchedFields.email && "input-success"
              }`}
              readOnly
              {...register("email")}
            />
            <label className="label">
              <span className="text-red-600 label-text-alt">
                {errors.email?.message}
              </span>
            </label>
          </div>

          {/* Designation */}
          <div className="form-control">
            <label class="label">
              <span class="label-text">Designation*</span>
            </label>
            <input
              type="text"
              placeholder="Your Designation"
              className={`input input-bordered w-full ${
                errors.designation
                  ? "input-error"
                  : touchedFields.designation && "input-success"
              }`}
              {...register("designation")}
            />
            <label className="label">
              <span className="text-red-600 label-text-alt">
                {errors.designation?.message}
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

          {/* Education */}
          <div className="from-control">
            <label class="label">
              <span class="label-text">Education</span>
            </label>
            <input
              type="text"
              placeholder="Education/Degree"
              className={`input input-bordered w-full ${
                errors.education
                  ? "input-error"
                  : touchedFields.education && "input-success"
              }`}
              {...register("education")}
            />
            <label className="label">
              <span className="text-red-600 label-text-alt">
                {errors.education?.message}
              </span>
            </label>
          </div>

          {/* Address */}
          <div className="form-control">
            <label class="label">
              <span class="label-text">Address</span>
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

          {/* Zip */}
          <div className="form-control">
            <label class="label">
              <span class="label-text">Zip Code</span>
            </label>
            <input
              type="text"
              placeholder="6403"
              className={`input input-bordered w-full ${
                errors.zip
                  ? "input-error"
                  : touchedFields.zip && "input-success"
              }`}
              {...register("zip")}
            />
            <label className="label">
              <span className="text-red-600 label-text-alt">
                {errors.zip?.message}
              </span>
            </label>
          </div>

          {/* Description */}
          <div className="form-control">
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Say something about you"
              className={`textarea textarea-bordered w-full ${
                errors.description
                  ? "textarea-error"
                  : touchedFields.description && "textarea-success"
              }`}
              {...register("description")}
            ></textarea>
            <label className="label">
              <span className="text-red-600 label-text-alt">
                {errors.description?.message}
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

export default UpdateProfile;
