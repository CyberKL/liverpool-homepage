import React from "react";
import HeadlinePost from "../common/HeadlinePost";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import community from "../../assets/community.webp";
import useFetchNews from "../../hooks/useFetchNews";

export default function Community() {
  const { articles } = useFetchNews(3);
  return (
    <div className="sm:px-20 px-4 pt-5 space-y-5">
      <div className="flex text-sm font-bold px-4">
        <div className="px-3 py-2 text-white bg-black dark:bg-white dark:text-black rounded-3xl">
          <span>CLUB AND COMMUNITY</span>
        </div>
        <Link
          to={""}
          className="ml-auto flex gap-1 items-center text-gray-500 dark:text-white group hover:opacity-30"
        >
          <span>MORE</span>
          <img
            src={arrow}
            alt=""
            className="h-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1 dark:invert" 
          />
        </Link>
      </div>
      <div className="sm:grid sm:grid-cols-3 flex gap-10 overflow-x-scroll">
        {articles.map((article, index) => (
          <HeadlinePost
            Width="w-screen"
            time={new Date(article.publishedAt)}
            title={article.title}
            text={article.description}
            Image={article.urlToImage}
            Source={article.url}
            key={index}
            dark={!document.querySelector("html").classList.contains("dark")}
          />
        ))}
      </div>
    </div>
  );
}
