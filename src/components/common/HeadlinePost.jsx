import { Link } from "react-router-dom";
import React from "react";
import lfcDiary from '../../assets/lfc-diary-010824.webp'

export default function HeadlinePost({
  Image = lfcDiary,
  dark = false,
  title = "TOUR",
  text = "USA diary: Sightseeing, training with a difference and a debate about ironing",
  time = new Date("2024-08-03T03:24:00"),
  Source = "",
  Width = "",
  ShowImage = true,
}) {
  const difference = Date.now() - time;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  function formatDate(date) {
    // Helper function to get the day suffix (st, nd, rd, th)
    function getDaySuffix(day) {
      if (day > 3 && day < 21) return "th"; // Special case for 11th-20th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }

    const options = { day: "numeric", month: "long", year: "numeric" };
    const formatter = new Intl.DateTimeFormat("en-GB", options); // 'en-GB' for day/month/year format

    const day = new Intl.DateTimeFormat("en-GB", { day: "numeric" }).format(
      date
    );
    const formattedDate = formatter.format(date);

    const daySuffix = getDaySuffix(day);

    return formattedDate.replace(day, day + daySuffix); // Replace numeric day with day + suffix
  }

  let elapsedTime = "";

  if (days > 2) {
    // Format elapsed time if more than 2 days ago
    elapsedTime = formatDate(time);
  } else if (days > 1) {
    // Handle exactly 2 days ago
    elapsedTime = "2 days ago";
  } else if (days > 0) {
    // Handle less than 2 days but more than 1 day
    elapsedTime = `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    elapsedTime = `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    elapsedTime = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    elapsedTime = `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }

  return (
    <Link to={Source}>
      <div
        to={Source}
        className={`px-3 hover:bg-black hover:bg-opacity-10 transition ease-in duration-200 h-full sm:w-full ${Width}`}
      >
        <div className={`${ShowImage ? 'border-b py-5' : 'pb-5'} border-gray-400 space-y-5 h-full`}>
          {ShowImage && (
            <div>
              <img src={Image} alt="" className="w-full h-[280px]" />
            </div>
          )}
          <div className={dark ? "text-black" : "text-white"}>
            {ShowImage && (<time dateTime={time}>
              <span
                className={`text-xs ${dark ? "text-gray-600" : "text-pink-200"}`}
              >
                {elapsedTime}
              </span>
            </time>)}
            <h2 className="space-x-2">
              <span className="font-bold">{title}</span>
              <span>{text}</span>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
