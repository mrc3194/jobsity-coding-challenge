import React from "react";
import { useQuery } from "react-query";
import groupEpisodesBySeason from "../groupEpisodesBySeason";
import { Episode, Seasons } from "../types/queries/episodes";
import { PersonInfo, PersonSearch } from "../types/queries/person";
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

const fetchEpisodes = async ({ queryKey }: any): Promise<Seasons[] | any> => {
  const { id } = queryKey[1];
  try {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
    const jsonResponse: Episode[] = await response.json();
    return groupEpisodesBySeason(jsonResponse);
  } catch (e) {
    console.error(e);
  }
};
const fetchEpisodeInfo = async ({ queryKey }: any): Promise<Episode | any> => {
  const { id } = queryKey[1];
  try {
    const response = await fetch(`https://api.tvmaze.com/episodes/${id}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

const fetchPersonSearch = async ({
  queryKey,
}: any): Promise<PersonSearch[] | void> => {
  const { searchTerm } = queryKey[1];
  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/people?q=${searchTerm}`
    );
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

const fetchPerson = async ({ queryKey }: any): Promise<PersonInfo[] | any> => {
  const { id } = queryKey[1];
  try {
    const response = await fetch(
      `https://api.tvmaze.com/people/${id}/castcredits?embed=show`
    );
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

export const useEpisodeInfo = (id: number) => {
  return useQuery(["fetchEpisodeInfo", { id }], fetchEpisodeInfo);
};

export const useSearchPerson = (searchTerm: string) => {
  return useQuery(["searchPerson", { searchTerm }], fetchPersonSearch);
};

export const usePerson = (id: number) => {
  return useQuery(["fetchPerson", { id }], fetchPerson);
};
