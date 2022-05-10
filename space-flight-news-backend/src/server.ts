import { app } from "./app";
import mongoose from "mongoose";
import cron from "node-cron";
import { cronFetchArticles } from "./utils/cron";

mongoose
  .connect(
    "mongodb+srv://Dangocan:k0cUMOTIWtO6w1Ad@cluster0.bb6ie.mongodb.net/space-flight?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connection established");
    app.listen(3333);
    cron.schedule("0 9 * * *", () => {
      cronFetchArticles();
    });
  })
  .catch((error) => {
    console.log(error);
  });
