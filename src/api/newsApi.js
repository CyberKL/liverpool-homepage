export const fetchNewsArticles = async (query, apiKey, fromDate) => {
    const url = `https://newsapi.org/v2/everything?q="${query}"&language=en&from=${fromDate}&sortBy=popularity&apiKey=${apiKey}`;
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching news: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.articles.filter(article => article.urlToImage && article.urlToImage.trim() !== ""); // Ensure the article has an image
  };
  