import { useState, useEffect } from 'react';
import { fetchNewsArticles } from '../api/newsApi';

const useFetchNews = (initialCount, increment = 0, isPaginated = false, query='Liverpool FC') => {
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const today = new Date();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 14);

    fetchNewsArticles(query, apiKey, lastWeek.toISOString())
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
      })
      .catch((error) => console.error(error));
  }, []);

  const loadMore = () => {
    if (isPaginated) {
      setVisibleCount((prevCount) => prevCount + increment);
    }
  };

  // This generates a random number just to not get the same articles in different components, this should be removed
  let randomNum = Math.floor(Math.random() * articles.length);

  return {
    articles: isPaginated ? articles.slice(0, visibleCount) : articles.slice(randomNum , randomNum + initialCount),
    loadMore,
    hasMore: isPaginated && visibleCount < articles.length,
  };
};

export default useFetchNews;
