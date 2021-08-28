import { Image, Links } from "./series";

export interface Epsiode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image?: Image;
  summary: string;
  _links: Links;
}
