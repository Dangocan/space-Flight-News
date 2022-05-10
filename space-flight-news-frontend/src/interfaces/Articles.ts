import { IEvents } from "./IEvents";
import { ILaunchs } from "./ILaunchs";

export interface IQueryParams {
  page?: string;
  sort?: string;
  contain?: string;
}

export interface IArticle {
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
