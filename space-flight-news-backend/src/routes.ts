import { Router } from "express";
import { Article } from "./models/Article";

const router = Router();

router.get("/", (req, res) => {
  return res
    .status(200)
    .send("Fullstack Challenge 2021 🏅 - Space Flight News");
});

router.get("/articles", async (req, res) => {
  const articlesCount = await Article.countDocuments();

  const pageCount = Math.ceil(articlesCount / 10);
  let page: number = parseInt(req.query.page as string);
  let contain: string = req.query.contain as string;
  let sort = req.query.sort;

  if (sort !== "asc" && sort !== "desc") {
    sort = "";
  }

  if (!page || page <= 0) {
    page = 1;
  }

  if (page > pageCount) {
    page = pageCount;
  }

  const articles = await Article.find(
    contain ? { title: { $regex: new RegExp(`${contain}`, "gi") } } : {},
    { _id: 0 }
  )
    .sort(sort ? { publishedAt: sort } : {})
    .limit(10)
    .skip(page * 10 - 10);
  return res.status(200).json(articles);
});

router.post("/articles", async (req, res) => {
  const article = {
    id: req.body.id,
    title: req.body.title,
    url: req.body.url,
    imageUrl: req.body.imageUrl,
    newsSite: req.body.newsSite,
    summary: req.body.summary,
    publishedAt: req.body.publishedAt,
    updatedAt: req.body.updatedAt,
    featured: req.body.featured,
    launches: req.body.launches,
    events: req.body.events,
  };

  try {
    await Article.create(article);

    return res.status(201).json({ message: "Success created a new article" });
  } catch ({ message }) {
    return res.status(400).json({
      message: "failed to create a new article",
      error: message,
    });
  }
});

export { router };
