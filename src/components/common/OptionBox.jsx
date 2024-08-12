import React, { useEffect, useState } from "react";

export default function Option({ Title, Body, SelectedRadio }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if(SelectedRadio === 'yes') setIsChecked(true)
      else if(SelectedRadio === 'no') setIsChecked(false)
  }, [SelectedRadio])

  return (
    <div
      className={`grid grid-cols-12 items-center bg-gray-100 p-4 max-w-[18rem] ${
        Body ? "sm:col-span-6 h-fit" : "sm:col-span-3"
      } ${
        Title ? "gap-2" : "sm:col-span-full sm:gap-[3.3rem] pb-6"
      } col-span-full`}
    >
      <div
        className={`text-[0.625rem] text-gray-600  ${
          Body ? "col-span-9" : "col-span-6"
        } ${Title ? "cursor-pointer" : ""}`}
        onClick={() => {
          Title && setIsChecked(!isChecked);
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
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
          className="peer sr-only"
        />
        <label htmlFor="switch-2" className="hidden"></label>
        <div className={`peer h-4 w-10 rounded-full border bg-gray-200 after:absolute after:-top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-gray-400 after:transition-all after:content-[''] peer-checked:bg-pink-400 peer-checked:after:bg-liverRed  peer-checked:after:translate-x-full`}></div>
      </label>
    </div>
  );
}
