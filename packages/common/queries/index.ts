import React from "react";
import { useQuery } from "react-query";
import { SeriesObject } from "../types/queries/series";

const fetchAllSeries = async ({
  queryKey,
}: any): Promise<SeriesObject[] | void> => {
  try {
    const { page } = queryKey[1];
    const response = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

const fetchSearch = async ({ queryKey }: any) => {
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

export const useFetchSeries = (page: number = 0) => {
  return useQuery(["allSeriesPaginated", { page }], fetchAllSeries);
};

export const useSearchSeries = (searchTerm: string) => {
  return useQuery(["searchSeries", { searchTerm }], fetchSearch);
};
