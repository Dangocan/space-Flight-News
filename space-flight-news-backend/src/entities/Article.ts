import { IEvents } from "../Interfaces/IEvents";
import { ILaunchs } from "../Interfaces/ILaunchs";

export class Article {
  public readonly "id": number;
  public "featured": boolean;
  public "title": string;
  public "url": string;
  public "imageUrl": string;
  public "newsSite": string;
  public "summary": string;
  public "publishedAt": string;
  public "launches": ILaunchs[];
  public "events": IEvents[];

  constructor(props: Omit<Article, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = Math.random();
    }
  }
}
