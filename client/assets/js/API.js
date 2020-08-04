import { createArticleIds, getParams } from "./utils";

// Loads articles
export function loadArticles() {
  const BASE_URL =
    "https://newsapi.org/v2/everything?sortBy=published&apiKey=b699b51d3ada470d824afdd3d1c288e0&q=";

  const { query } = getParams();
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + query)
      .then(res => res.json())
      .then(data => {
        const articles = createArticleIds(data.articles);
        resolve(articles);
      });
  });
}
