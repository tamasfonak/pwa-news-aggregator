import { createArticleIds, getParams } from "./utils";

// Loads articles
export function loadArticles() {
  const BASE_URL = "http://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=b699b51d3ada470d824afdd3d1c288e0";

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
