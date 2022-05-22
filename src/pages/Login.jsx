import React from "react";
import auth from "../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Login = () => {
  // Authentication
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm(formOptions);

  // Input form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  // handle click sign in with Google
  const handleClickLogInWithGoogle = () => signInWithGoogle();

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

            {/* Submit button */}
            <input
              type="submit"
              className="btn btn-accent btn-wide self-center"
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
              Forget password? <button className="text-accent">Reset</button>
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
