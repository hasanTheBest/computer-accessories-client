import axios from "axios";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import toast from "react-hot-toast";

const Signup = () => {
  // Authentication
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile] = useUpdateProfile(auth);

  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, `Name must be at least 3 characters`)
      .required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // input validation
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm(formOptions);

  // create user collection in db
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

  const onSubmit = async ({ name, email, confirmPassword }) => {
    await createUserWithEmailAndPassword(email, confirmPassword);
    await updateProfile({ displayName: name });
  };

  if (user) {
    const { displayName, email } = user;
    // mutate({ name: displayName, email });
  }

  if (isError) {
    toast.error(queryErr.message);
  }

  if (isLoading) {
    toast.loading("Adding User...");
  }

  if (isSuccess && queryData.data.token) {
    localStorage.setItem("accessToken", queryData.data.token);
    toast.success("Successfully added a user");
  }

  return (
    <section className="py-8 md:py-16">
      <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
        <div className="card-body">
          <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name */}
            <div className="form-control">
              <input
                type="name"
                placeholder="Your Name"
                className={`input input-bordered w-full ${
                  errors.name
                    ? "input-error"
                    : touchedFields.name && "input-success"
                }`}
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
              <input
                type="email"
                placeholder="Your Email"
                className={`input input-bordered w-full ${
                  errors.email
                    ? "input-error"
                    : touchedFields.email && "input-success"
                }`}
                {...register("email")}
              />
              <label className="label">
                <span className="text-red-600 label-text-alt">
                  {errors.email?.message}
                </span>
              </label>
            </div>

            {/* Password */}
            <div className="from-control">
              <input
                type="password"
                placeholder="Your Password"
                className={`input input-bordered w-full ${
                  errors.password
                    ? "input-error"
                    : touchedFields.password && "input-success"
                }`}
                {...register("password")}
              />
              <label className="label">
                <span className="text-red-600 label-text-alt">
                  {errors.password?.message}
                </span>
              </label>
            </div>

            {/* confirm Password */}
            <div className="from-control">
              <input
                type="password"
                placeholder="Confirm Password"
                className={`input input-bordered w-full ${
                  errors.confirmPassword
                    ? "input-error"
                    : touchedFields.confirmPassword && "input-success"
                }`}
                {...register("confirmPassword")}
              />
              <label className="label">
                <span className="text-red-600 label-text-alt">
                  {errors.confirmPassword?.message}
                </span>
              </label>
            </div>

            {/* Accept Terms*/}
            <div className="form-control">
              <label className="cursor-pointer label justify-start gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  {...register("acceptTerms")}
                />
                <span className="label-text">Terms & Conditions</span>
              </label>
              <label className="label">
                <span className="text-red-600 label-text-alt">
                  {errors.acceptTerms?.message}
                </span>
              </label>
            </div>

            {error && (
              <span className="-mb-1 text-red-600">{error.message}</span>
            )}

            {/* Submit button */}
            {loading ? (
              <button className="btn btn-accent btn-wide self-center loading btn-disabled">
                Register
              </button>
            ) : (
              <input
                type="submit"
                className="btn btn-accent btn-wide self-center"
                value="Register"
              />
            )}
          </form>

          <div className="my-2 flex justify-between gap-2 text-sm font-semibold">
            <span>
              Already a user?{" "}
              <Link to="/login" className="text-accent">
                Login
              </Link>
            </span>
          </div>

          <div className="divider">OR</div>

          <button className="btn btn-outline btn-secondary">
            login with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
