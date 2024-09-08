import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import SmallNav from "../components/common/SmallNav";
import Footer from "../components/common/Footer";
import { FormProvider, useForm } from "react-hook-form";
import updateSchema from "../validations/updateSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormField from "../components/common/FormField";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../api/api";
import { setUser } from "../features/auth/authSlice";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [countries, setCountries] = useState([]);

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  // Validation
  const methods = useForm({
    criteriaMode: "all",
    resolver: yupResolver(updateSchema, { abortEarly: false }),
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, dirtyFields },
  } = methods;

  const onSubmit = async (data) => {
    // Add only the dirty fields to the updatedFields object
    const updatedFields = Object.keys(dirtyFields).reduce((acc, field) => {
      acc[field] = data[field];
      return acc;
    }, {});

    const response = await updateUser(updatedFields);

    if (response) {
      dispatch(
        setUser({
          ...user,
          ...updatedFields,
        })
      );

      alert("Update successful!");
    } else {
      alert("Update failed");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  };

  if (!loading)
    return (
      <div>
        <header className="sticky top-0 z-20">
          <div className="relative">
            {!scrolled && <div className="bg-red-700 h-20"></div>}
            <div className="absolute top-[60%] w-full px-20 hidden xl:block">
              <Navbar scrollValue={100} />
            </div>
            <div className="absolute top-[60%] w-full sm:px-20 px-4 block xl:hidden">
              <SmallNav />
            </div>
          </div>
        </header>
        <main>
          <div className="px-20 dark:bg-gray-900 py-40">
            <div>
              <FormProvider {...methods}>
                <form
                  className="grid grid-cols-12"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <FormField
                    name={"fname"}
                    label={"First name"}
                    useIcons={false}
                    defaultValue={user.fname}
                  />
                  <FormField
                    name={"lname"}
                    label={"Last name"}
                    useIcons={false}
                    defaultValue={user.lname}
                  />
                  <FormField
                    type="email"
                    name="email"
                    label="E-mail"
                    useIcons={false}
                    defaultValue={user.email}
                  />
                  <FormField
                    name="dob"
                    label="Date of birth"
                    useIcons={false}
                    defaultValue={Intl.DateTimeFormat("en-US", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }).format(new Date(user.dob))}
                    handleChange={handleDobChange}
                  />
                  <div className="relative sm:col-span-6 col-span-full p-5">
                    <label className="text-gray-600 text-xs absolute left-7 top-3 bg-white dark:bg-gray-900 px-1">
                      Gender
                    </label>
                    <select
                      {...register("gender")}
                      defaultValue={user.gender}
                      className="w-full focus:bg-gray-100 focus:ring-2 focus:ring-red-600 border border-gray-300 bg-white text-sm text-gray-600 rounded-md hover:border-black dark:bg-gray-900 dark:focus:bg-gray-800 dark:border-gray-700 dark:hover:border-white dark:text-white cursor-pointer px-[14px] py-[10.5px]"
                    >
                      <option
                        disabled
                        value={""}
                        className="bg-gray-50 dark:bg-gray-800"
                      >
                        Select Gender
                      </option>
                      <option
                        className="bg-white dark:bg-gray-900"
                        value={"Male"}
                      >
                        Male
                      </option>
                      <option
                        className="bg-white dark:bg-gray-900"
                        value={"Female"}
                      >
                        Female
                      </option>
                    </select>
                  </div>
                  <div className="relative sm:col-span-6 col-span-full p-5">
                    <label className="text-gray-600 text-xs absolute left-7 top-3 bg-white dark:bg-gray-900 px-1">
                      Country <span className="text-red-600">*</span>
                    </label>
                    <select
                      {...register("country")}
                      defaultValue={user.country}
                      className="w-full focus:bg-gray-100 focus:ring-2 focus:ring-red-600 border border-gray-300 bg-white text-sm text-gray-600 rounded-md hover:border-black dark:bg-gray-900 dark:focus:bg-gray-800 dark:border-gray-700 dark:hover:border-white dark:text-white cursor-pointer px-[14px] py-[10.5px]"
                    >
                      <option disabled value={""}>
                        Select Country
                      </option>
                      {countries.map((country, index) => (
                        <option
                          key={index}
                          value={country.name.common}
                          className="bg-white dark:bg-gray-900"
                        >
                          {country.name.common}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="bg-liverRed text-white rounded-full sm:mx-0 mx-20 col-span-full sm:col-span-2 sm:col-start-6 sm:col-end-8 text-xl mt-8 py-1 disabled:bg-gray-200 disabled:text-gray-400"
                    disabled={!isValid}
                  >
                    Confirm
                  </button>
                </form>
              </FormProvider>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
}
