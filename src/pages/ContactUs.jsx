import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import SmallNav from "../components/common/SmallNav";

import usePageTitle from "../hooks/usePageTitle";

export default function ContactUs() {
  usePageTitle("Liverpool FC — Contact Us");

  const [scrolled, setScrolled] = useState(false);
  const [isNormalExpanded, setIsNormalExpaned] = useState(false);
  const [isMatchdayExpanded, setIsMatchdayExpaned] = useState(false);

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

  return (
    <div>
      <header className="sticky top-0 z-10">
        <div className="relative">
          {!scrolled && <div className="bg-red-700 h-20"></div>}
          <div className="absolute top-[60%] w-full px-20 hidden xl:block">
            <Navbar scrollValue={100} />
          </div>
          <div className="absolute top-[60%] w-full px-20 block xl:hidden">
            <SmallNav />
          </div>
        </div>
      </header>
      <main>
        <div className="pb-[90px]">
          <div className="bg-liverRed text-white px-[60px] pt-[120px] pb-[30px] flex items-end gap-4">
            <h1 className="uppercase font-bold text-xl lg:text-4xl">
              supporter services
            </h1>
            <span className="lg:text-5xl text-2xl font-roboto">Contact Us</span>
          </div>
          <div className="px-[60px]">
            <ul className="flex gap-7 border-b border-gray-200 font-bold text-[14px]">
              <li>
                <div
                  id="contactUs"
                  className="py-5 uppercase border-b-2 border-liverRed"
                >
                  <Link to={"/contact-us"}>contact us</Link>
                </div>
              </li>
              <li>
                <div
                  id="emailForm"
                  className="py-5 uppercase opacity-30 hover:opacity-70"
                >
                  <Link to={"/contact-email-form"}>contact email form</Link>
                </div>
              </li>{" "}
            </ul>
          </div>

          <div className="py-[60px] space-y-[60px]">
            <div className="flex flex-col items-center">
              <div className="space-y-[30px] max-w-2xl">
                <p className="font-bold text-gray-600 text-lg">
                  If you need help with any Club services, including Ticketing,
                  LFC Official Membership and the Official Liverpool FC Store,
                  you can find useful information and answers to frequently
                  asked questions on our{" "}
                  <Link to={""} className="underline text-red-600">
                    Help Center
                  </Link>
                  .
                </p>
                <p className="text-gray-600 text-lg">
                  You can also contact our Supporter Services team for help with
                  any of the above, or for general Club enquiries or complaints.
                  We’re normally available Monday to Saturday.
                </p>
              </div>
            </div>

            <div className="space-y-[30px] bg-gray-100 py-[40px]">
              <div className="flex justify-center">
                <div className="max-w-2xl w-full space-y-[15px]">
                  <h2 className="text-2xl px-[15px] font-roboto">
                    Supporter Services Opening Times
                  </h2>
                  <div>
                    <div className="border-b border-gray-300 py-[30px] space-y-[30px]">
                      <button
                        className="flex items-center justify-between w-full p-[15px] hover:text-red-600"
                        onClick={() => {
                          setIsNormalExpaned(!isNormalExpanded);
                          setIsMatchdayExpaned(false);
                        }}
                      >
                        <span className="font-roboto">
                          Normal Opening Hours
                        </span>
                        <div
                          className={`text-red-600 ${
                            isNormalExpanded ? "" : "rotate-45"
                          }`}
                        >
                          <svg
                            viewBox="0 0 15 15"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4"
                          >
                            <path d="M0 13.636L13.636 0l1.363 1.364L1.364 15 0 13.636z"></path>
                            <path d="M1.364 0l13.635 13.636-1.363 1.363L0 1.364 1.364 0z"></path>
                          </svg>
                        </div>
                      </button>
                      {isNormalExpanded && (
                        <div className="space-y-[30px] px-[15px] text-gray-600">
                          <p className="font-bold">
                            Live Chat, Social and Email
                          </p>
                          <ul className="list-disc px-[20px]">
                            <li>Mon-Fri: 8.15am-5.30pm</li>
                            <li>Saturday: 9am-3pm</li>
                            <li>Sunday: Closed</li>
                          </ul>
                          <p className="font-bold">Ticket Office Windows</p>
                          <ul className="list-disc px-[20px]">
                            <li>Mon-Fri: 8.15am-4pm</li>
                            <li>Saturday: 9am-3pm</li>
                            <li>Sunday: Closed</li>
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="border-b border-gray-300 py-[30px] space-y-[30px]">
                      <button
                        className="flex items-center justify-between w-full p-[15px] hover:text-red-600"
                        onClick={() => {
                          setIsMatchdayExpaned(!isMatchdayExpanded);
                          setIsNormalExpaned(false);
                        }}
                      >
                        <span className="font-roboto">
                          Matchday Opening Hours
                        </span>
                        <div
                          className={`text-red-600 ${
                            isMatchdayExpanded ? "" : "rotate-45"
                          }`}
                        >
                          <svg
                            viewBox="0 0 15 15"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4"
                          >
                            <path d="M0 13.636L13.636 0l1.363 1.364L1.364 15 0 13.636z"></path>
                            <path d="M1.364 0l13.635 13.636-1.363 1.363L0 1.364 1.364 0z"></path>
                          </svg>
                        </div>
                      </button>
                      {isMatchdayExpanded && (
                        <div className="space-y-[30px] px-[15px] text-gray-600">
                          <p>
                            <span className="font-bold">
                              Ticketing enquiries{" "}
                            </span>{" "}
                            - opening hours will vary depending on kick-off.
                            We'll publish opening hours for upcoming matches on
                            this page.
                          </p>
                          <p>
                            <span className="font-bold">
                              Other enquiries (e.g. Official Liverpool FC Store,
                              Stadium Tours etc.){" "}
                            </span>{" "}
                            - our hours don't change. We're available to help
                            during the same times as a non-matchday.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center font-roboto text-[16px]">
                <div className="max-w-2xl w-full px-[15px] space-y-[30px]">
                  <h2 className="text-gray-800 text-[26px]">
                    Ways to Contact Supporter Service
                  </h2>
                  <div>
                    <h3 className="font-bold text-[18px]">Chat</h3>
                    <p className="text-gray-600">
                      Press the chat button on the bottom-right of the screen to
                      start a chat with us. Please note, you must accept cookies
                      on liverpoolfc.com for the Live Chat button to appear.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[18px]">Email</h3>
                    <p className="text-gray-600">
                      <Link to={""} className="text-red-600 underline">
                        Fill in our contact form
                      </Link>{" "}
                      we’ll email you back. We aim to respond within 48 hours.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[18px]">Social Media</h3>
                    <p className="text-gray-600">
                      <Link
                        to={""}
                        className="text-red-600 underline font-bold"
                      >
                        Contact us on X
                      </Link>{" "}
                      - Follow{" "}
                      <Link to={""} className="text-red-600 underline">
                        @LFCHelp
                      </Link>
                      for important ticketing, matchday and other Supporter
                      Services updates. You can also Direct Message us. We aim
                      to respond within 4 hours.
                    </p>
                  </div>
                  <p className="text-gray-600">
                    <Link to={""} className="text-red-600 underline font-bold">
                      Contact us on Facebook
                    </Link>{" "}
                    - Send us a message through our{" "}
                    <Link to={""} className="text-red-600 underline">
                      Liverpool FC Help page
                    </Link>
                    . We aim to respond within 4 hours.
                  </p>
                  <div>
                    <h3 className="font-bold text-[18px]">
                      Visit the Ticket Office at Anfield
                    </h3>
                    <p className="text-gray-600">
                      The Ticket Office is located underneath the Kop stand. You
                      can contact us about ticketing using the options above,
                      but if you're at{" "}
                      <Link to={""} className="text-red-600 underline">
                        Anfield
                      </Link>{" "}
                      you can also visit us in person.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[18px]">
                      Accessible Contact Options
                    </h3>
                    <p className="text-gray-600">
                      Any supporters who are registered with the club as
                      disabled, or who have accessibility needs that prevent
                      them from using our online contact options, can also call
                      us on 0151 264 2500. Our phone line is open Mon-Fri
                      8.15am-4pm and Saturday 9am-3pm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
