"use client";

import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import LangMenu from "./LangMenu";
import { Link } from "react-router-dom";

import arrow from "../../assets/arrow.svg";
import lfc from "../../assets/LFC.svg";
import join from "../../assets/join.svg";
import lang from "../../assets/lang.svg";
import standardChartered from "../../assets/Standard_Chartered.svg";
import { useSelector } from "react-redux";

export default function Navbar({ scrollValue = 200 }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuTransition, setMenuTransition] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const timeoutIdRef = useRef(null);
  const [section, setSection] = useState("");
  const [arrowRotaion, setArrowRotation] = useState({ rotate: "90deg" });
  const [langMenuVisible, setLangMenuVisible] = useState(false);
  const navbarRef = useRef(null);
  
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (menuVisible) {
      setMenuTransition(true);
    }
  }, [menuVisible]);

  const handleMouseEnter = (sectionName) => {
    if (langMenuVisible) {
      closeLangMenu();
    }
    setSection(sectionName);
    clearTimeout(timeoutIdRef.current);
    setMenuVisible(true);
    setOverlay(true);
  };

  const handleMouseLeave = () => {
    if (menuVisible) {
      timeoutIdRef.current = setTimeout(() => {
        setTimeout(() => setOverlay(false), 100);
        setTimeout(() => setMenuVisible(false), 300);
        setMenuTransition(false);
      }, 400);
    }
  };

  const closeMenu = () => {
    setTimeout(() => setOverlay(false), 100);
    setTimeout(() => setMenuVisible(false), 300);
    setMenuTransition(false);
  };

  const handleClick = (sectionName) => {
    if (langMenuVisible) {
      closeLangMenu();
    }
    if (menuVisible) {
      closeMenu();
    } else {
      setSection(sectionName);
      setMenuVisible(true);
      setOverlay(true);
    }
  };

  const closeLangMenu = () => {
    setArrowRotation({ rotate: "90deg" });
    setLangMenuVisible(false);
    setOverlay(false);
  };

  const handleLangClick = () => {
    if (menuVisible) {
      closeMenu();
    }
    if (langMenuVisible) {
      closeLangMenu();
    } else {
      setArrowRotation({ rotate: "270deg" });
      setLangMenuVisible(true);
      setOverlay(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollValue) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeLangMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langMenuVisible]);

  return (
    <div className="relative">
      {overlay && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-10 z-10" />
      )}
      <div onMouseLeave={handleMouseLeave} ref={navbarRef}>
        <nav
          className="relative bg-liverRed px-6 overflow-visible flex items-center justify-between h-14 z-40"
          onMouseEnter={() => clearTimeout(timeoutIdRef.current)}
        >
          <div className="flex p-3">
            <Link to={"/"}>
              <img
                src={scrolled ? lfc : "liverpoolfc_crest.png"}
                alt=""
                className={scrolled ? "h-14 w-14 z-50" : "h-28 z-50"}
              />
            </Link>
          </div>
          <div className="flex ml-auto items-center text-white text-sm font-bold gap-8">
            <div className="border-r border-gray-400 pr-6">
              <ul className="flex gap-8">
                <li>
                  <button
                    onMouseEnter={() => handleMouseEnter("News")}
                    onClick={() => handleClick("News")}
                    className="hover:opacity-80"
                  >
                    NEWS
                  </button>
                </li>
                <li>
                  <button
                    onMouseEnter={() => handleMouseEnter("Fixtures & Teams")}
                    onClick={() => handleClick("Fixtures & Teams")}
                    className="hover:opacity-80"
                  >
                    FIXTURES & TEAMS
                  </button>
                </li>
                <li>
                  <button
                    onMouseEnter={() => handleMouseEnter("Tickets & Booking")}
                    onClick={() => handleClick("Tickets & Booking")}
                    className="hover:opacity-80"
                  >
                    TICKETS & BOOKING
                  </button>
                </li>
                <li>
                  <button
                    onMouseEnter={() => handleMouseEnter("Shop")}
                    onClick={() => handleClick("Shop")}
                    className="hover:opacity-80"
                  >
                    SHOP
                  </button>
                </li>
                <li>
                  <button
                    onMouseEnter={() => handleMouseEnter("Video")}
                    onClick={() => handleClick("Video")}
                    className="hover:opacity-80"
                  >
                    VIDEO
                  </button>
                </li>
                <li>
                  <button
                    onMouseEnter={() => handleMouseEnter("More")}
                    onClick={() => handleClick("More")}
                    className="hover:opacity-80"
                  >
                    MORE
                  </button>
                </li>
              </ul>
            </div>
            <div className={`border-r border-gray-400 ${auth ? 'pr-9' : 'pr-6'}`}>
              {auth ? (
                <Link to={"/profile"}>Profile</Link>
              ): (
                <ul className="flex gap-8">
                <li>
                  <Link
                    to={"/join"}
                    className="flex items-center gap-2 hover:opacity-80"
                  >
                    <img src={join} alt="" />
                    JOIN
                  </Link>
                </li>
                <li>
                  <Link to={"/login"} className="hover:opacity-80">
                    LOGIN
                  </Link>
                </li>
              </ul>
              )}
            </div>
            <div className="border-r border-gray-400 pr-6">
              <button
                className="flex items-center gap-2"
                onClick={handleLangClick}
              >
                <img src={lang} alt="" className="h-4" />
                <div className="flex items-center gap-1">
                  <p>EN</p>
                  <img
                    src={arrow}
                    alt=""
                    className={`filter invert h-4 `}
                    style={arrowRotaion}
                  />
                </div>
              </button>
            </div>
            <div>
              <Link to={"https://www.sc.com/en/"}>
                <img src={standardChartered} alt="" className="h-7 pr-6" />
              </Link>
            </div>
          </div>
        </nav>
        <div
          className={`absolute left-0 right-0 z-30 transition-all duration-300 ease-in-out ${
            menuTransition ? "opacity-100" : "opacity-0"
          }`}
          onMouseEnter={() => clearTimeout(timeoutIdRef.current)}
        >
          {menuVisible && <Menu Section={section} />}
        </div>
        <div className="absolute left-auto right-0 w-min z-30">
          {langMenuVisible && <LangMenu />}
        </div>
      </div>
    </div>
  );
}
