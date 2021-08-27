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

interface Image {
  medium: string;
  original: string;
}

interface Link {
  href: string;
}

interface Links {
  self?: Link;
  previousepisode: Link;
}

export interface SeriesObject {
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
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}
