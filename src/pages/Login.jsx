import React, { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../validations/loginSchema";
import { Link, useNavigate } from "react-router-dom";
import { authentication } from "../api/api";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

import arrow from "../assets/bold-arrow.svg";
import lfcLogo from "../assets/LFC.svg";

export default function Login() {
  usePageTitle("Liverpool FC - Account");

  const siteKey = "6LcXDiAqAAAAAG-wafGhvJP5R5Yic8cxFBYnXy7P";

  const [capVal, setCapVal] = useState(null);
  const [passVisible, setPassVisible] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPassFocused, setIsPassFocused] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const watchEmail = watch("email", "");

  // Api call
  const onSubmit = async (data) => {
    const user = await authentication({email: data.email, password: data.password});

    if (user) {
      // Handle successful login

      // Create a token
      const token = {
        id: user.id,
        role: user.role.toLowerCase(),
      };

      dispatch(
        login({
          token: JSON.stringify(token),
          user: JSON.stringify({
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            dob: user.dob,
            gender: user.gender,
            country: user.country,
          }),
        })
      );

      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  // Reveal password functionality
  const handlePassClick = (e) => {
    e.preventDefault();
    setPassVisible((prev) => !prev);
    const diameter = Math.max(
      e.currentTarget.clientWidth,
      e.currentTarget.clientHeight
    );
    const ripple = document.createElement("span");
    ripple.style.width = ripple.style.height = `${diameter}px`;

    ripple.className =
      "absolute bg-gray-200 bg-opacity-60 left-0 top-0 rounded-full animate-ripple";
    e.currentTarget.appendChild(ripple);
    setTimeout(() => ripple.remove(), 400);
  };

  return (
    <div className="bg-liverRed pb-4 px-4">
      <div className="flex justify-between items-center w-full px-6 h-16">
        <div className="w-full">
          <Link
            to={"/"}
            className="text-white flex items-center justify-center gap-2 py-2 px-1 hover:bg-black hover:bg-opacity-5 w-fit"
          >
            <img src={arrow} alt="" className="filter invert h-5" />
            <div className="italic sm:text-base text-xs">
              <span>BACK TO </span>
              <span className="font-bold">WEB SITE</span>
            </div>
          </Link>
        </div>
        <Link to={"/"} className="w-full flex justify-center">
          <img src={lfcLogo} alt="" className="h-8" />
        </Link>
        <div className="w-full"></div>
      </div>
      <div>
        <div className="bg-gray-100 dark:bg-gray-950 flex flex-col items-center pt-[72px] pb-[88px] space-y-4">
          <h1 className="text-liverRed text-[2.5rem]">Log In</h1>
          <p className="text-gray-600 dark:text-gray-300 font-bold max-w-4xl text-center">
            No account? Unlock new, exciting and exclusive benefits all in one
            place. Join MyLFC, your FREE, Official LFC Account.{" "}
            <Link
              to={"/join"}
              className="text-liverRed underline italic font-bold"
            >
              Register Now
            </Link>
          </p>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-900 flex justify-center items-center pt-16 pb-32">
          <form
            className="flex flex-col items-center gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-10 w-full mb-2">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className={`text-xs absolute left-2 -top-2 bg-white dark:bg-gray-900 px-1 ${
                    (watchEmail && errors.email) || isEmailFocused
                      ? "text-red-600"
                      : "text-gray-600 dark:text-white"
                  }`}
                >
                  E-mail <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email")}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  className={`border border-gray-300 w-full p-2 hover:border-black dark:bg-gray-900 dark:hover:border-white dark:border-gray-700 dark:text-white ${
                    watchEmail && errors.email
                      ? "border-red-600 hover:border-red-600 dark:border-red-600 dark:hover:border-red-600"
                      : ""
                  } rounded-md focus:hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600`}
                />
                {watchEmail && !errors.email && (
                  <svg
                    className="h-5 absolute right-3 top-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    color="#31b5aa"
                  >
                    <path
                      fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                    ></path>
                  </svg>
                )}
                {watchEmail && errors.email && (
                  <svg
                    className="h-5 absolute right-3 top-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    color="#dc0714"
                  >
                    <path
                      fill="currentColor"
                      d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
                    ></path>
                  </svg>
                )}
                {watchEmail && errors.email && (
                  <p className="text-red-600 text-[0.6rem] px-[14px] pt-1">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="password"
                  className={`text-xs absolute left-2 -top-2 bg-white dark:bg-gray-900 px-1 ${
                    isPassFocused
                      ? "text-red-600"
                      : "text-gray-600 dark:text-white"
                  }`}
                >
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  type={passVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  {...register("password")}
                  onFocus={() => setIsPassFocused(true)}
                  onBlur={() => setIsPassFocused(false)}
                  className="w-full p-2 border border-gray-300 hover:border-black dark:bg-gray-900 dark:hover:border-white dark:border-gray-700 rounded-md focus:hover:border-transparent focus:outline-none focus:ring-red-600 focus:ring-2 dark:text-white"
                />
                <button
                  className="absolute right-3 top-2 rounded-full py-[2x] overflow-hidden hover:bg-gray-100 hover:bg-opacity-70"
                  onClick={handlePassClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    color="#d5d5d5"
                    className="h-5"
                  >
                    <path
                      fill="currentColor"
                      d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <Link
                to={""}
                className="text-liverRed text-xs font-bold underline italic"
              >
                Forgot password
              </Link>
              <ReCAPTCHA sitekey={siteKey} onChange={(val) => setCapVal(val)} />
              <button
                className="bg-liverRed text-white w-full italic font-bold h-10 disabled:bg-gray-200 disabled:text-gray-400"
                disabled={errors.email || errors.password || !capVal}
              >
                Login
              </button>
              <p className="text-xs dark:text-white">
                No account?<span> </span>
                <Link
                  to={"/join"}
                  className="text-liverRed font-bold underline italic"
                >
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
