import { Article } from "../models/Article";
import axios from "axios";
import mongoose from "mongoose";

export const initPopulation = async () => {
  if ((await Article.countDocuments()) !== 0) {
    console.log("Database already populated");
    process.exit(0);
  }
  try {
    const countResponse = await axios.get(
      "https://api.spaceflightnewsapi.net/v3/articles/count"
    );
    const articlesArrayResponse = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=${countResponse.data}`
    );
    await Article.insertMany(articlesArrayResponse.data);
    console.log("Database populated successfully");
    process.exit(0);
  } catch ({ message }) {
    console.log(message);
    process.exit(0);
  }
};

mongoose
  .connect(
    "mongodb+srv://Dangocan:k0cUMOTIWtO6w1Ad@cluster0.bb6ie.mongodb.net/space-flight?retryWrites=true&w=majority"
  )
  .then(async () => {
    await initPopulation();
  })
  .catch((error) => {
    console.log(error);
  });
