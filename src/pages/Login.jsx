import React, { useEffect, useRef } from "react";
import auth from "../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast from "react-hot-toast";

const Login = () => {
  // Authentication email and password
  const [signInWithEmailAndPassword, userLogin, loadingLogin, errorLogin] =
    useSignInWithEmailAndPassword(auth);
  // Authentication sign in with google
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  // password reset email sending
  const [sendPasswordResetEmail, sendingReset, errorReset] =
    useSendPasswordResetEmail(auth);

  // Reference to DOM elements
  const emailRef = useRef("");

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid")
      .lowercase()
      .trim(),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .trim(),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm(formOptions);

  // Input form submission
  const onSubmit = async ({ email, password }) => {
    await signInWithEmailAndPassword(email, password);
  };

  // handle click sign in with Google
  const handleClickLogInWithGoogle = () => signInWithGoogle();
  // handle sending password reset email
  const handleResetPassword = () => {
    if (!emailRef.current.firstElementChild.value) {
      emailRef.current.firstElementChild.focus();
      return;
    }

    sendPasswordResetEmail(emailRef.current.firstElementChild.value);
  };

  // if user exist go to the target page
  if (userLogin || userGoogle) {
    const { displayName, email } = userLogin || userGoogle;
    // mutate({ name: displayName, email });
    navigate(from, { replace: true });
  }
  // password reset error
  if (errorReset) {
    toast.error(errorReset.message);
  }
  // password reset email sending
  if (sendingReset) {
    toast.success(
      `Password reset email is sent at ${emailRef.current.firstElementChild.value}`
    );
  }

  return (
    <section className="py-8 md:py-16">
      <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
        <div className="card-body">
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email */}
            <div className="from-control" ref={emailRef}>
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

            {errorLogin && (
              <span className="-mb-1 text-red-600">{errorLogin.message}</span>
            )}

            {/* Submit button */}
            <input
              type="submit"
              className={`btn btn-accent btn-wide self-center ${
                loadingLogin ? "loading btn-disabled" : ""
              }`}
              value="Login"
            />
          </form>

          {/* Register and reset */}
          <div className="my-2 flex justify-between gap-2 text-sm font-semibold">
            <span>
              New user?{" "}
              <Link to="/register" className="text-accent">
                Register
              </Link>
            </span>
            <span>
              Forget password?{" "}
              <button className="text-accent" onClick={handleResetPassword}>
                Reset
              </button>
            </span>
          </div>

          <div className="divider">OR</div>

          {errorGoogle && (
            <span className="mb-2 text-red-500">{errorGoogle.message}</span>
          )}

          {loadingGoogle ? (
            <button className="btn btn-outline btn-secondary btn-disabled loading">
              Log in with Google
            </button>
          ) : (
            <button
              className="btn btn-outline btn-secondary"
              onClick={handleClickLogInWithGoogle}
            >
              Log in with Google
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
