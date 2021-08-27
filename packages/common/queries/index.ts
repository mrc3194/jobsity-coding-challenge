import React from "react";
import { useQuery } from "react-query";
import { SeriesObject } from "../types/queries/series";

const fetchSeries = async (
  page: number = 0
): Promise<SeriesObject[] | void> => {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
    return response.json();
  } catch (e) {
    console.error(e);
  }
};

export const useFetchSeries = (page: number = 0) => {
  return useQuery(["allSeriesPaginated", page], () => fetchSeries(page));
};
