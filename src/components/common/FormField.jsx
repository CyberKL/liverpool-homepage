import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function FormField({
  type = "text",
  name,
  label,
  useIcons = true,
  defaultValue = "",
  handleChange = null,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  const watchElement = watch(name, defaultValue);
  const names = name === "fname" || name === "lname";

  const onInputChange = (e) => {
    if (handleChange) handleChange(e);
    setValue(name, e.target.value, {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  return (
    <div className="relative p-5 w-full sm:col-span-6 col-span-full">
      <label
        htmlFor={name}
        className={`text-xs absolute left-7 top-3  bg-white dark:bg-gray-900 px-1 ${
          (errors[name] && (watchElement || names)) || isFocused
            ? "text-red-600"
            : "text-gray-600 dark:text-white"
        }`}
      >
        {label} <span className="text-red-600">*</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        id={name}
        {...register(name)}
        onChange={onInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`border text-gray-600 border-gray-300 w-full px-[14px] py-[10.5px] text-sm hover:border-black dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:hover:border-white ${
          (errors[name] && (watchElement || names))
            ? "border-red-600 hover:border-red-600 dark:border-red-600 dark:hover:border-red-600"
            : ""
        } rounded-md focus:hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600`}
      />
      {watchElement && !errors[name] && useIcons && (
        <svg
          className="h-5 absolute right-7 top-8"
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
      {errors[name] && (watchElement || names) && useIcons && (
        <svg
          className="h-5 absolute right-7 top-8"
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
      {errors[name] && (watchElement || names) && (
        <div className="flex flex-col">
          {Object.keys(errors[name].types).map((key, index) =>
            Array.isArray(errors[name].types[key]) ? (
              errors[name].types[key].map((message, index) => (
                <span
                  key={index}
                  className="text-red-600 text-nowrap text-[0.625rem] px-[14px] pt-1"
                >
                  {message}
                </span>
              ))
            ) : (
              <span
                key={index}
                className="text-red-600 text-nowrap text-[0.625rem] px-[14px] pt-1"
              >
                {errors[name].types[key]}
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
}
