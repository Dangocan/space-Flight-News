import { app } from "./app";
import mongoose from "mongoose";
import cron from "node-cron";
import { cronFetchArticles } from "./utils/cron";
import dotEnv from "dotenv";

dotEnv.config();

if (!process.env.DB_URL) throw new Error("DB_URL must be specified");

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connection established");
    app.listen(process.env.PORT || 3333, () =>
      console.log(`Server running on port ${process.env.PORT || "3333"}`)
    );
    cron.schedule("0 9 * * *", () => {
      cronFetchArticles();
    });
  })
  .catch((error) => {
    console.log(error);
  });
