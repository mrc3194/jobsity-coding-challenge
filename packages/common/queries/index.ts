import React from "react";
import { useQuery } from "react-query";
import { Epsiode } from "../types/queries/episodes";
import { Search } from "../types/queries/search";
import { Series } from "../types/queries/series";

const fetchAllSeries = async ({ queryKey }: any): Promise<Series[] | void> => {
  try {
    const { page } = queryKey[1];
    const response = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

const fetchSeries = async ({ queryKey }: any): Promise<Series | void> => {
  try {
    const { id } = queryKey[1];
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

const fetchSearch = async ({ queryKey }: any): Promise<Search[] | void> => {
  const { searchTerm } = queryKey[1];
  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

const fetchEpisodes = async ({ queryKey }: any): Promise<Epsiode[] | void> => {
  const { id } = queryKey[1];
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

export const useFetchSeries = (page: number = 0) => {
  return useQuery(["allSeriesPaginated", { page }], fetchAllSeries);
};

export const useSearchSeries = (searchTerm: string) => {
  return useQuery(["searchSeries", { searchTerm }], fetchSearch);
};

export const useSeries = (id: number) => {
  return useQuery(["fetchSeries", { id }], fetchSeries);
};

export const useEpisodes = (id: number) => {
  return useQuery(["fetchEpisodes", { id }], fetchEpisodes);
};
