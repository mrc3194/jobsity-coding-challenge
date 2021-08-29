import { Image, Link, Links, Series } from "./series";

export interface PersonSearch {
  score: 1;
  person: Person;
}

interface Country {
  name?: string;
  code?: string;
  timezone?: string;
}

interface PersonLinks {
  show: Link;
  character: Link;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: string;
  deathday?: string;
  gender: string;
  image: Image;
  _links: Links;
}

export interface PersonInfo {
  self: boolean;
  voice: boolean;
  _links: PersonLinks;
  _embedded: Series;
}
