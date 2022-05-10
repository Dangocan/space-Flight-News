import mongoose from "mongoose";
import { IEvents } from "../Interfaces/IEvents";
import { ILaunchs } from "../Interfaces/ILaunchs";

interface IArticle {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: ILaunchs[];
  events: IEvents[];
}

const articleSchema = new mongoose.Schema<IArticle>({
  id: Number,
  featured: Boolean,
  title: String,
  url: String,
  imageUrl: String,
  newsSite: String,
  summary: String,
  publishedAt: String,
  launches: {
    id: String,
    provider: String,
  },
  events: {
    id: String,
    provider: String,
  },
});

export const Article = mongoose.model<IArticle>("Article", articleSchema);
