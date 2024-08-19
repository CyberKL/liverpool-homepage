import React, { useState, useEffect, useRef } from "react";
import usePageTitle from "../hooks/usePageTitle";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import HeadlinePost from "../components/common/HeadlinePost";

import bigImg from "../assets/bigImg.webp";
import arrow from "../assets/arrow.svg";
import SmallNav from "../components/common/SmallNav";
import useFetchNews from "../hooks/useFetchNews";

export default function AllNews() {
  usePageTitle("Latest News - Liverpool FC");
  const { articles, loadMore, hasMore } = useFetchNews(15, 7, true);

  const [scrolled, setScrolled] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);

  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

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
          {!scrolled && <div className="bg-red-700 h-16"></div>}
          <div
            className={`${
              scrolled ? "" : "absolute top-[60%]"
            } w-full px-[70px] hidden xl:block`}
          >
            <Navbar scrollValue={100} />
            {!footerVisible && (
              <div
                className={`flex justify-between ${
                  scrolled ? "py-3" : "pt-10 pb-5"
                } px-5 bg-white border-b border-gray-300`}
              >
                <div className="px-3 py-1 bg-black rounded-3xl">
                  <span className="uppercase text-white text-sm font-bold">
                    all news
                  </span>
                </div>
                <div
                  className={`text-gray-600  ${
                    filtersVisible
                      ? "bg-white absolute right-20 top-20 p-5 pl-20 shadow-lg"
                      : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-1 font-bold ${
                      filtersVisible ? "text-red-600" : ""
                    }`}
                    onClick={() => setFiltersVisible(!filtersVisible)}
                  >
                    <button className="uppercase text-sm">
                      filter by topic
                    </button>
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 ${
                        filtersVisible ? "-rotate-90" : "rotate-90"
                      }`}
                    >
                      <path
                        d="M5 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                  {filtersVisible && (
                    <div className="flex flex-col items-end gap-2 mt-2 mb-4">
                      <button className="cursor-pointer opacity-40">
                        All news
                      </button>
                      <button className="hover:text-liverRed">Men</button>
                      <button className="hover:text-liverRed">Women</button>
                      <button className="hover:text-liverRed">Academy</button>
                      <button className="hover:text-liverRed">Club</button>
                      <button className="hover:text-liverRed">
                        Media Watch
                      </button>
                      <button className="hover:text-liverRed">Tickets</button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            className={`${
              scrolled ? "" : "absolute top-[60%]"
            } w-full sm:px-[70px] px-5 block xl:hidden`}
          >
            <SmallNav />
            {!footerVisible && (
              <div
                className={`flex justify-between ${
                  scrolled ? "py-3" : "pt-10 pb-5"
                } px-5 bg-white border-b border-gray-300`}
              >
                <div className="px-3 py-1 bg-black rounded-3xl">
                  <span className="uppercase text-white text-sm font-bold">
                    all news
                  </span>
                </div>
                <div
                  className={`lg:block hidden text-gray-600  ${
                    filtersVisible
                      ? "bg-white absolute right-20 top-20 p-5 pl-20 shadow-lg"
                      : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-1 font-bold ${
                      filtersVisible ? "text-red-600" : ""
                    }`}
                    onClick={() => setFiltersVisible(!filtersVisible)}
                  >
                    <button className="uppercase text-sm">
                      filter by topic
                    </button>
                    <svg
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 ${
                        filtersVisible ? "-rotate-90" : "rotate-90"
                      }`}
                    >
                      <path
                        d="M5 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </div>
                  {filtersVisible && (
                    <div className="flex flex-col items-end gap-2 mt-2 mb-4">
                      <button className="cursor-pointer opacity-40">
                        All news
                      </button>
                      <button className="hover:text-liverRed">Men</button>
                      <button className="hover:text-liverRed">Women</button>
                      <button className="hover:text-liverRed">Academy</button>
                      <button className="hover:text-liverRed">Club</button>
                      <button className="hover:text-liverRed">
                        Media Watch
                      </button>
                      <button className="hover:text-liverRed">Tickets</button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="mt-32">
        <div className="pb-[90px] px-[60px] grid grid-cols-12">
          {articles.map((article, index) => (
            <div
              className={`col-span-full ${
                (index + 1) % 3 === 0 ? "sm:col-span-8" : "sm:col-span-4"
              }`}
              key={index}
            >
              <HeadlinePost
                dark={true}
                title={article.title}
                text={article.description}
                time={new Date(article.publishedAt)}
                Image={article.urlToImage}
                Source={article.url}
              />
            </div>
          ))}
          <div className="col-span-full pt-[90px] pb-[120px] flex justify-center">
            <button className="text-white flex items-center px-5 pb-4 bg-black w-full max-w-xs h-16 hover:bg-opacity-60" disabled={!hasMore} onClick={loadMore}>
              LOAD MORE
              <img src={arrow} alt="" className="filter invert h-4" />
            </button>
          </div>
        </div>
      </main>
      <footer ref={footerRef}>
        <Footer />
      </footer>
    </div>
  );
}
