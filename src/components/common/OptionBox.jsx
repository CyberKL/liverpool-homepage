import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function Option({ name, Title, Body }) {

  const { register, formState: { errors }, setValue, getValues} = useFormContext();

  return (
    <div
      className={`grid grid-cols-12 items-center bg-gray-100 p-4 max-w-[18rem] sm:max-w-max ${
        (Body && Title) ? "sm:col-span-6 h-fit" : "sm:col-span-3"
      } ${
        Title ? "gap-2" : "sm:col-span-full sm:gap-[3.3rem] pb-6"
      } col-span-full`}
    >
      <div
        className={`text-[0.625rem] text-gray-600  ${
          Body ? "col-span-9" : "col-span-6"
        } ${Title ? "cursor-pointer" : ""}`}
        onClick={() => {
          Title && setValue(`options.${name}`, !getValues(`options.${name}`), { shouldValidate: true, shouldDirty: true, shouldTouch: true });
        }}
      >
        <h6 className="font-bold">{Title}</h6>
        <span className="leading-[1.66]">{Body}</span>
      </div>
      <label
        className={`relative inline-flex cursor-pointer items-center ${
          Body ? "col-span-3" : "col-span-6"
        } ${Body && !Title ? 'sm:col-span-3  col-span-full justify-start' : 'justify-end'}`}
      >
        <input
          id="switch-2"
          type="checkbox"
          {...register(`options.${name}`)}
          className="peer sr-only"
        />
        <label htmlFor="switch-2" className="hidden"></label>
        <div className={`peer h-4 w-10 rounded-full border bg-gray-200 after:absolute after:-top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-gray-400 after:transition-all after:content-[''] peer-checked:bg-pink-400 peer-checked:after:bg-liverRed  peer-checked:after:translate-x-full`}></div>
      </label>
    </div>
  );
}
