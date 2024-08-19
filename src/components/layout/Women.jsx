import React, { useEffect, useState } from "react";
import HeadlinePost from "../common/HeadlinePost";
import { Link } from "react-router-dom";
import lfcw from "../../assets/lfcw.webp";
import useFetchNews from "../../hooks/useFetchNews";

export default function Women() {
    const { articles } = useFetchNews(3)

  return (
    <div className="sm:px-20 px-4 pt-5 space-y-5">
      <div className="flex text-white text-sm font-bold px-4">
        <div className="px-3 py-2 bg-black bg-opacity-15 rounded-3xl">
          <span>LFC WOMEN</span>
        </div>
        <Link
          to={""}
          className="ml-auto flex gap-1 items-center group hover:opacity-80"
        >
          <span>MORE NEWS</span>
          <img
            src="arrow.svg"
            alt=""
            className="h-3 filter invert transition-transform duration-300 ease-in-out group-hover:translate-x-1"
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
          />
        ))}
      </div>
    </div>
  );
}
