interface Schedule {
  time: string;
  days: string[];
}
interface Rating {
  average: number;
}

interface Network {
  id: number;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
}

interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: number;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Link {
  href: string;
}

export interface Links {
  self?: Link;
  previousepisode: Link;
}

export interface Series {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string | string[];
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: string;
  dvdCountry?: string;
  externals?: Externals;
  image?: Image;
  summary: string;
  updated: number;
  _links: Links;
}
