import React from "react";
import arrow from '../../assets/arrow.svg'
import lfcLogo from '../../assets/lfc-logo.png'

export default function Fixture({
  Tickets,
  Competition,
  Date,
  Score,
  Team,
  TeamLogo = "",
  Home,
}) {
  let home, away, winner, homeLogo, awayLogo;
  if (Home) {
    home = "Liverpool";
    homeLogo = lfcLogo;
    awayLogo = TeamLogo;
    away = Team;
  } else {
    home = Team;
    homeLogo = TeamLogo;
    awayLogo = lfcLogo;
    away = "Liverpool";
  }

  if (Score) {
    if (Score.split("-")[0] > Score.split("-")[1]) {
      winner = home;
    } else if (Score.split("-")[0] < Score.split("-")[1]) {
      winner = away;
    }
  }

  function formatDate(date) {
    const dayOfWeekFormatter = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    });
    const dayOfMonthFormatter = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
    });
    const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" });
    const timeFormatter = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });

    const dayOfWeek = dayOfWeekFormatter.format(date).toUpperCase();
    const dayOfMonth = dayOfMonthFormatter.format(date);
    const month = monthFormatter.format(date).toUpperCase();
    const time = timeFormatter.format(date);

    return `${dayOfWeek} ${dayOfMonth} ${month} — ${time}`;
  }

  return (
    <div className="space-y-20 border border-gray-200 w-full p-5 flex flex-col dark:bg-white">
      <div>
        <h3 className="font-bold">{Competition.toUpperCase()}</h3>
        <p className="text-gray-600 text-sm">{formatDate(Date)}</p>
      </div>
      <div className="flex items-center flex-grow text-lg">
        <div className="space-y-3 mr-5 flex-grow">
          <div className="flex items-center gap-5">
            <img src={homeLogo} alt="logo" className="h-8" />
            <span
              className={`font-roboto ${winner === away ? "opacity-60" : ""}`}
            >
              {home}
            </span>
          </div>
          <hr />
          <div className="flex items-center gap-5">
            <img src={awayLogo} alt="logo" className="h-8" />
            <span
              className={`font-roboto ${winner === home ? "opacity-60" : ""}`}
            >
              {away}
            </span>
          </div>
        </div>
        {Score && (
          <div className="bg-gray-100 ml-auto flex flex-col px-7 py-4 gap-5 text-xl">
            <span>{Score.split("-")[0]}</span>
            <span>{Score.split("-")[1]}</span>
          </div>
        )}
      </div>
      <div className={Tickets || Score ? "block" : "invisible"}>
        <button className="text-white font-bold flex items-center px-5 pb-4 bg-black w-full h-20 hover:bg-opacity-60">
          {Score ? "MATCH REPORT" : "BUY TICKETS"}
          <img src={arrow} alt="" className="filter invert h-4" />
        </button>
      </div>
    </div>
  );
}
