import { Article } from "../models/Article";
import axios from "axios";

const newArticlesCount = async () => {
  const countResponse = await axios.get(
    "https://api.spaceflightnewsapi.net/v3/articles/count"
  );

  const countDbArticler = await Article.countDocuments();

  return countResponse.data - countDbArticler;
};

export const cronFetchArticles = async () => {
  const articlesCount = await newArticlesCount();

  if (articlesCount > 0) {
    const numberOfDbArticles = await Article.countDocuments();

    const articlesArrayResponse = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=${articlesCount}&_sort=publishedAt&_start=${numberOfDbArticles}`
    );
    await Article.insertMany(articlesArrayResponse.data);
  }
  console.log("CRON completed");
};
