import { useState, useEffect } from "react";
import { fetchData } from "../api/api";

const useFetchNews = (
  initialCount,
  increment = 0,
  isPaginated = false,
  query = "Liverpool FC"
) => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const today = new Date();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 14);
    const url = `https://newsapi.org/v2/everything?q="${query}"&language=en&from=${lastWeek.toISOString()}&sortBy=popularity&apiKey=${apiKey}`;

    fetchData(url)
      .then((data) => {
        // Ensure the article has an image
        const filteredArticles = data.articles.filter(
          (article) => article.urlToImage && article.urlToImage.trim() !== ""
        );

        setArticles(filteredArticles);
      })
      .catch((error) => console.error(error));
  }, []);

  const loadMore = () => {
    if (isPaginated) {
      setVisibleCount((prevCount) => prevCount + increment);
    }
  };

  // This generates a random number to get different articles for different components, this should be removed
  let randomNum = Math.floor(Math.random() * articles.length);

  return {
    articles: isPaginated
      ? articles.slice(0, visibleCount)
      : articles.slice(randomNum, randomNum + initialCount),
    loadMore,
    hasMore: isPaginated && visibleCount < articles.length,
  };
};

export default useFetchNews;
