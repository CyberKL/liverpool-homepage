import React from "react";
import { Link } from "react-router-dom";

// Import images
import app from "../../assets/app.webp";
import arrow from "../../assets/arrow.svg";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import tiktok from "../../assets/tiktok.svg";
import instagram from "../../assets/instagram.svg";
import x from "../../assets/x.svg";
import youtube from "../../assets/youtube.svg";
import onefootball from "../../assets/onefootball.svg";

export default function Menu({ Section }) {
  const data = {
    News: {
      NEWS: [
        ["All News", "/news"],
        ["Men", ""],
        ["Women", ""],
        ["Academy", ""],
        ["Club", ""],
        ["Media Watch", ""],
        ["Tickets", ""],
      ],
    },
    "Fixtures & Teams": {
      MENS: [
        ["Fixtures", ""],
        ["Results", ""],
        ["Tables", ""],
        ["Match Centre", ""],
        ["Players & Staff", ""],
        ["Stats", ""],
      ],
      WOMENS: [
        ["Fixtures", ""],
        ["Results", ""],
        ["Tables", ""],
        ["Match Centre", ""],
        ["Players & Staff", ""],
        ["Helens Stadium", ""],
      ],
      ACADEMY: [
        ["Players & Staff", ""],
        ["U18s Fixtures", ""],
        ["U18s Results", ""],
        ["U21s Fixtures", ""],
        ["U21s Results", ""],
      ],
    },
    "Tickets & Booking": {
      TICKETS: [
        ["Tickets Availability", ""],
        ["How To Buy Tickets", ""],
        ["Away Travel", ""],
        ["Accessibility", ""],
      ],
      "LFC WOMEN TICKETS": [
        ["LFC Women Season Tickets", ""],
        ["LFC Women Tickets Availability", ""],
      ],
      BOOKING: [
        ["Match Hospitality", ""],
        ["Meetings & Events", ""],
        ["Stadium Tours", ""],
        ["Concerts", ""],
        ["LFC Events", ""],
        ["Official Match Breaks Hospitality", ""],
      ],
    },
    Shop: {
      SHOP: [
        ["Online Store", ""],
        ["Club Store", ""],
        ["Soccer Schools", ""],
        ["Membership", ""],
        ["E-Academy", ""],
        ["Anfield Forever", ""],
        ["Programme & Magazine", ""],
        ["Wholesale Partners", ""],
      ],
      MENS: [
        ["Men's Home Kit", ""],
        ["Men's Away Kit", ""],
        ["Men's Third Kit", ""],
      ],
      SALE: [
        ["Men's Fashion", ""],
        ["Women's Fashion", ""],
        ["Kid's Fashion", ""],
      ],
    },
    Video: {
      VIDEO: [
        ["LFCTV GO", ""],
        ["Matches", ""],
        ["Players", ""],
        ["Browse", ""],
        ["Playlists", ""],
        ["Live", ""],
      ],
    },
    More: {
      ANFIELD: [
        ["Match Day", ""],
        ["Local Residents", ""],
        ["Champions Wall", ""],
        ["Disabled Supporters Association", ""],
        ["Supporter Liaison Officer", ""],
        ["Official Supporters Clubs", ""],
      ],
      CLUB: [
        ["Hillsborough", ""],
        ["Heysel", ""],
        ["Corporate Information", ""],
        ["Brand Protection", ""],
        ["Jobs at LFC", ""],
        ["The Red Way", ""],
        ["Red Together", ""],
        ["Anti-Slavery", ""],
        ["Partners", ""],
        ["Sustainability", ""],
        ["Club Charter", ""],
        ["Foundation", ""],
        ["Fan Engagement", ""],
        ["Club History", ""],
        ["Honours", ""],
      ],
      FANS: [
        ["MyLFC", ""],
        ["Safeguarding", ""],
        ["LFC Apps", ""],
        ["Competitions", ""],
        ["Message Boards", ""],
        ["Membership", ""],
        ["LFC Gaming", ""],
      ],
    },
  };

  return (
    <div className="bg-white space-y-4 pt-6">
      <div>
        <div className="flex py-3 px-10">
          <div
            className={`py-3 grid w-full gap-x-56 text-nowrap ${
              Section === "Shop" ? "grid-cols-2" : "grid-cols-3"
            }`}
          >
            {Object.entries(data[Section]).map(([key, value]) => (
              <div
                className={`space-y-5 ${
                  key === "SALE" ? "col-start-2 -mt-32" : ""
                }`}
                key={key}
              >
                <p className="font-bold text-sm">{key}</p>
                <ul className="space-y-2">
                  {value.map((element) => (
                    <li className="hover:text-red-600" key={element[0]}>
                      <Link to={element[1]}>{element[0]}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="ml-auto flex justify-end gap-5 w-full">
            {Section === "Shop" && (
              <div className="space-y-8 w-[21rem]">
                <div>
                  <img src={app} alt="" className="" />
                </div>
                <div className="flex items-center gap-1">
                  <span>DOWNLOAD THE STORE APP</span>
                  <img src={arrow} alt="" className="h-3" />
                </div>
                <hr />
              </div>
            )}
            <div className="bg-liverRed text-white space-y-8 py-6 px-4 w-min h-min">
              <div className="space-y-5">
                <h2 className="font-bold text-nowrap text-sm">
                  JOIN MYLFC, YOUR FREE, OFFICIAL LFC ACCOUNT
                </h2>
                <p className="text-wrap text-lg leading-6">
                  Unlock new, exciting and exclusive benefits including videos,
                  match commentary, emagazine and more, all in one place.
                </p>
              </div>
              <div>
                <button className="flex items-center px-5 pb-4 bg-black w-full h-16 hover:bg-opacity-60">
                  REGISTER NOW
                  <img src={arrow} alt="" className="filter invert h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {Section === "Shop" && (
          <div className="space-y-5 px-10">
            <p className="font-bold text-sm">WOMENS</p>
            <ul className="space-y-2">
              <li>Women's Home Kit</li>
              <li>Women's Away Kit</li>
              <li>Women's Third Kit</li>
            </ul>
          </div>
        )}
      </div>
      <hr />
      <div className="flex px-6 py-3">
        <div>
          <ul className="flex gap-3 text-sm">
            <li className="font-bold">HELP</li>
            <li>Help & FAQs</li>
            <li>Contact</li>
            <li>A - Z</li>
          </ul>
        </div>
        <div className="ml-auto flex gap-3">
          <Link to={""}>
            <img src={facebook} alt="Facebook" className="h-8" />
          </Link>
          <Link to={""}>
            <img src={linkedin} alt="LinkedIn" className="h-8" />
          </Link>
          <Link to={""}>
            <img src={tiktok} alt="TikTok" className="h-8" />
          </Link>
          <Link to={""}>
            <img src={instagram} alt="Instagram" className="h-8" />
          </Link>
          <Link to={""}>
            <img src={x} alt="X" className="h-8" />
          </Link>
          <Link to={""}>
            <img src={youtube} alt="YouTube" className="h-8" />
          </Link>
          <Link to={""}>
            <img src={onefootball} alt="OneFootball" className="h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}
