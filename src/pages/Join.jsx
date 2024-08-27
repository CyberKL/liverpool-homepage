import React, { useEffect, useState } from "react";
import usePageTitle from "../hooks/usePageTitle";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import joinSchema from "../validations/joinSchema";

import FormField from "../components/common/FormField";
import OptionBox from "../components/common/OptionBox";

import arrow from "../assets/bold-arrow.svg";
import lfcLogo from "../assets/LFC.svg";
import { Link } from "react-router-dom";
import { fetchData } from "../api/api";

export default function Join() {
  usePageTitle("Liverpool FC - Account");

  const siteKey = "6LcXDiAqAAAAAG-wafGhvJP5R5Yic8cxFBYnXy7P";

  const [capVal, setCapVal] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [loading, setLoading] = useState(true);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  // Validation
  const methods = useForm({
    criteriaMode: "all",
    resolver: yupResolver(joinSchema, { abortEarly: false }),
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, dirtyFields },
    setValue,
    getValues,
  } = methods;
  useEffect(() => {
    console.log(methods.formState.errors);
  }, [methods.formState.errors]);

  // Api call
  const onSubmit = async (data) => {
    const user = {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      dob: data.dob,
      password: data.password,
      gender: data.gender,
      country: data.country,
      options: data.options,
    };

    try {
      const response = await fetchData("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response) {
        alert("Registration successful!");
        // Redirect or clear form as needed
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Countries api
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Date of birth handling
  const formatDob = (value) => {
    const loop = 8 - value.length;

    for (let i = 0; i < loop; i++) value += "_";

    let formatted = value;
    formatted = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(
      4,
      8
    )}`;

    return formatted;
  };

  const handleDobChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
    if (value.length > 8) value = value.slice(0, 8); // Limit input to 8 digits
    if (value.length === 0) {
      e.target.value = "";
      return;
    }

    const formattedValue = formatDob(value);
    e.target.value = formattedValue;

    // Move caret position
    const cursorPos =
      value.length + (value.length > 2 ? 1 : 0) + (value.length > 4 ? 1 : 0);

    setTimeout(() => {
      e.target.setSelectionRange(cursorPos, cursorPos);
    }, 0);
    const day = value.slice(0, 2);
    const month = value.slice(3, 5);
    const year = value.slice(6);
    const date = new Date(year, month - 1, day);
    return date;
  };

  // Handling radio buttons
  const handleRadioChange = () => {
    Object.keys(getValues("options")).forEach((key) => {
      setValue(`options.${key}`, selectedRadio === "yes", {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    });
  };

  if (!loading)
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
          <div className="bg-gray-100 md:pt-[72px] md:pb-[88px] flex justify-center">
            <div className="flex flex-col items-center space-y-4 text-center py-20">
              <h1 className="text-liverRed text-[2.5rem]">Why join MyLFC?</h1>
              <p className="text-center text-wrap max-w-md text-gray-600 space-y-4">
                Unlock new, exciting and exclusive benefits all in one place.
                Join MyLFC, your FREE, Official LFC Account.
              </p>
              <ul className="list-disc list-inside my-4 text-center text-gray-600">
                <li>The chance to win amazing prizes every week</li>
                <li>Unlock behind-the-scenes videos</li>
                <li>Follow the match with live commentary</li>
                <li>Keep up to date through the Club newsletter</li>
                <li>Read exclusive interviews in the eMagazine</li>
                <li>Play EA Sports FIFA 23 at LFC Gaming</li>
                <li>Join the conversation on LFC Fan Forums</li>
                <li>Earn even more benefits and rewards</li>
              </ul>
              <h6 className="text-gray-600 font-bold">
                Already have an account? <span> </span>
                <Link to={"/login"} className="underline italic text-liverRed">
                  Log in
                </Link>
              </h6>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white flex justify-center items-center pt-16 pb-32">
            <div className="max-w-screen-sm">
              <FormProvider {...methods}>
                <form
                  className="flex flex-col m-5 gap-3 w-full"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="mb-2 grid grid-cols-12 max-w-xs sm:max-w-full">
                    <FormField name="fname" label="First name" />
                    <FormField name="lname" label="Last name" />
                    <FormField type="email" name="email" label="E-mail" />
                    <FormField
                      name="dob"
                      label="Date of birth"
                      useIcons={false}
                      defaultValue="01/01/1990"
                      handleChange={handleDobChange}
                    />
                    <FormField
                      type="password"
                      name="password"
                      label="Password"
                      useIcons={false}
                    />
                    <FormField
                      type="password"
                      name="conPassword"
                      label="Re-enter Password"
                      useIcons={false}
                    />
                    <div className="col-span-full p-5">
                      <div className="p-4 bg-gray-100 text-[0.625rem] text-gray-600">
                        <h6 className="font-bold mb-1">
                          For your security please ensure your password:
                        </h6>
                        <ul>
                          <li>Is between 8 and 30 characters long</li>
                          <li>
                            Contains a mix of upper (capital) and lower case
                            letters
                          </li>
                          <li>Contains at least one number</li>
                          <li>
                            Contains at least one special character (* : @ | # %
                            , . ; [ ] {} ? - _ ~ $ &amp; &lt; &gt; ‘ “ ^ ( ) / !
                            `)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-span-full grid grid-cols-12">
                      <div className="relative sm:col-span-6 col-span-full p-5">
                        <label className="text-gray-600 text-xs absolute left-7 top-3 bg-white px-1">
                          Gender
                        </label>
                        <select
                          {...register("gender")}
                          defaultValue={""}
                          className="w-full focus:bg-gray-100 focus:ring-2 focus:ring-red-600 border border-gray-300 bg-white text-sm text-gray-600 rounded-md hover:border-black cursor-pointer px-[14px] py-[10.5px]"
                        >
                          <option disabled value={""} className="bg-gray-50">
                            Select Gender
                          </option>
                          <option className="bg-white" value={"Male"}>
                            Male
                          </option>
                          <option className="bg-white" value={"Female"}>
                            Female
                          </option>
                        </select>
                      </div>
                      <div className="relative sm:col-span-6 col-span-full p-5">
                        <label className="text-gray-600 text-xs absolute left-7 top-3 bg-white px-1">
                          Country <span className="text-red-600">*</span>
                        </label>
                        <select
                          {...register("country")}
                          defaultValue={"United Kingdom"}
                          className="w-full focus:bg-gray-100 focus:ring-2 focus:ring-red-600 border border-gray-300 bg-white text-sm text-gray-600 rounded-md hover:border-black cursor-pointer px-[14px] py-[10.5px]"
                        >
                          <option disabled value={""}>
                            Select Country
                          </option>
                          {countries.map((country, index) => (
                            <option
                              key={index}
                              value={country.name.common}
                              className="bg-white"
                            >
                              {country.name.common}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="p-5 grid grid-cols-12 col-span-full">
                      <div className="mb-1 col-span-full">
                        <span className="uppercase text-gray-600 font-bold">
                          get more from lfc?
                        </span>
                      </div>
                      <div className="mb-4 col-span-full">
                        <div className="grid grid-cols-12 sm:place-items-start">
                          <div className="mt-4 space-y-1 sm:col-span-6 col-span-full">
                            <p className="text-xs">
                              Do you want to hear about our products,
                              competitions, new signings, tickets, club news and
                              partner offers?
                            </p>
                            <p className="text-gray-600 text-[0.625rem]">
                              We send offers and news on behalf of our partners
                              but do not share your information directly with
                              them.
                            </p>
                          </div>
                          <div className="grid grid-cols-12 gap-x-4 sm:col-span-6 col-span-full gap-4">
                            <label
                              className="sm:col-span-4 col-span-full flex items-center border-4 border-red-600 text-red-600 cursor-pointer"
                              onClick={() => setSelectedRadio("yes")}
                            >
                              <div className="grid place-items-center p-[9px]">
                                <input
                                  id="yes"
                                  type="radio"
                                  name="choice"
                                  onChange={handleRadioChange}
                                  className="cursor-pointer col-start-1 row-start-1 appearance-none size-[21px] border-2 border-red-600 rounded-full relative"
                                />
                                {selectedRadio === "yes" && (
                                  <div className="size-[11px] rounded-full bg-red-600 col-start-1 row-start-1" />
                                )}
                              </div>
                              <span className="p-1 italic font-bold">
                                <h6>Yes</h6>
                              </span>
                            </label>
                            <label
                              className="sm:col-span-4 col-span-full flex items-center border-4 border-red-600 text-red-600 cursor-pointer"
                              onClick={() => setSelectedRadio("no")}
                            >
                              <div className="grid place-items-center p-[9px]">
                                <input
                                  id="no"
                                  type="radio"
                                  name="choice"
                                  onChange={handleRadioChange}
                                  className="cursor-pointer col-start-1 row-start-1 appearance-none size-[21px] border-2 border-red-600 rounded-full relative"
                                />
                                {selectedRadio === "no" && (
                                  <div className="size-[11px] rounded-full bg-red-600 col-start-1 row-start-1" />
                                )}
                              </div>
                              <span className="p-1 italic font-bold">
                                <h6>No</h6>
                              </span>
                            </label>
                            <button
                              className={`sm:col-span-4 col-span-full flex items-center gap-2 border-4 italic font-bold border-red-600 text-red-600 p-[9px] ${
                                isOptionsVisible ? "bg-red-600 text-white" : ""
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                setIsOptionsVisible(!isOptionsVisible);
                              }}
                            >
                              Manage
                              <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`space-y-3 col-span-full ${
                          isOptionsVisible ? "visible" : "hidden"
                        }`}
                      >
                        <div className="text-gray-600">
                          <h3 className="font-bold text-xs uppercase">
                            content
                          </h3>
                          <span className="text-[0.625rem] block">
                            Please select what type of things you would like to
                            hear more about
                          </span>
                        </div>
                        <div className="grid grid-cols-12 gap-8">
                          <OptionBox
                            name={"offers"}
                            Title={"Products & Offers"}
                            Body={
                              "Latest information on club products, new launches, retail, ticketing news"
                            }
                          />
                          <OptionBox
                            name={"newsletters"}
                            Title={"Club Newsletters"}
                            Body={
                              "All the latest news, videos and behind the scenes content from the men's and women's teams"
                            }
                          />
                          <OptionBox
                            name={"foundation"}
                            Title={"LFC Foundation"}
                            Body={
                              "Latest information and news from the club’s official charity"
                            }
                          />
                          <OptionBox
                            name={"partners"}
                            Title={"LFC Official Partners"}
                            Body={
                              "Latest information, offers and products from our official partners"
                            }
                          />

                          <div className="col-span-full">
                            <h3 className="font-bold text-xs uppercase text-gray-600">
                              channels
                            </h3>
                            <span className="text-[0.625rem]">
                              Please select how you would like to hear from us
                            </span>
                          </div>
                          <OptionBox name={"email"} Title={"Email"} />
                          <OptionBox name={"sms"} Title={"SMS"} />
                          <OptionBox name={"mail"} Title={"Direct Mail"} />
                          <OptionBox name={"telephone"} Title={"Telephone"} />

                          <h3 className="font-bold text-xs uppercase text-gray-600 col-span-full">
                            Other types of communication
                          </h3>
                          <OptionBox
                            name={"other"}
                            Body={
                              "Please note we can send you messages related to your orders, services subscribed and updates relating to products or services you have purchased from us, or information about your account. This includes communications relating to Season Tickets, Ticket Sales and Official Membership benefits. If you explicitly would like to turn off these type of communication, it may limit your ability to be aware of these benefits."
                            }
                          />
                        </div>
                      </div>

                      <div className="mt-4 col-span-full">
                        <p className="text-gray-600 text-[0.625rem]">
                          You can acess our preference centre at any time to opt
                          out of communications and control how [we] use your
                          data. By registering to join, you confirm that you
                          have read and accept Liverpool Football Club{" "}
                          <Link to={""} className="italic underline font-bold">
                            Terms and Conditions
                          </Link>{" "}
                          and have read the club{" "}
                          <Link to={""} className="italic underline font-bold">
                            Privacy Policy
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:justify-center">
                    <div className="space-y-4 flex flex-col items-center w-min">
                      <ReCAPTCHA
                        sitekey={siteKey}
                        onChange={(val) => setCapVal(val)}
                      />
                      <button
                        className="bg-liverRed text-white w-full italic font-bold h-10 disabled:bg-gray-200 disabled:text-gray-400"
                        disabled={!isValid || !dirtyFields.options || !capVal}
                      >
                        Register Now
                      </button>
                      <p className="text-xs">
                        Already have an account?<span> </span>
                        <Link
                          to={"/login"}
                          className="text-liverRed font-bold underline italic"
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    );
}
