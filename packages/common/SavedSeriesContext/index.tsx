import React, { useEffect, useMemo, useState } from "react";
import { Series } from "../types/queries/series";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalStorageKeys } from "../types/localStorage";

export interface SavedSeriesContextProps {
  saveSeries: (newSeries: Series) => void;
  deleteSeries: (seriesId: number) => void;
  seriesIsSaved: (seriesId: number) => boolean;
  savedSeries: Series[];
}

const initialContext = {
  saveSeries: (newSeries: Series) => null,
  deleteSeries: (seriesId: number) => null,
  seriesIsSaved: (seriesId: number) => true,
  savedSeries: [],
};

export const SavedSeriesContext =
  React.createContext<SavedSeriesContextProps>(initialContext);

export interface SavedSeriesProviderProps {
  children: React.ReactChild[] | React.ReactChild;
}

const SavedSeriesProvider: React.FC<SavedSeriesProviderProps> = ({
  children,
}) => {
  const [savedSeries, setSavedSeries] = useState<Series[]>([]);
  const saveSeries = (newSeries: Series) => {
    setSavedSeries((prevSeries: Series[]) => {
      prevSeries.push(newSeries);
      saveInStorage(JSON.stringify(prevSeries));
      return [...prevSeries];
    });
  };

  const saveInStorage = async (series: string) => {
    try {
      await AsyncStorage.setItem(
        LocalStorageKeys.SAVED_SERIES,
        JSON.stringify(series)
      );
    } catch (e) {
      console.error("##error", e);
    }
  };

  const deleteSeries = (seriesId: number) => {
    setSavedSeries((prevSeries: Series[]) => {
      const newSeries = prevSeries.filter(
        (series: Series, index: number): boolean => series.id !== seriesId
      );
      saveInStorage(JSON.stringify(newSeries));
      return [...newSeries];
    });
  };

  const seriesIsSaved = (seriesId: number) => {
    return savedSeries.find((series: Series) => series.id === seriesId) ===
      undefined
      ? false
      : true;
  };

  // method only for development/testing
  const deleteLocalStorage = async () => {
    try {
      await AsyncStorage.removeItem(LocalStorageKeys.SAVED_SERIES);
    } catch (e) {
      console.error("##error", e);
    }
  };

  const getInitialData = async () => {
    try {
      const localStorageSavedSeriesResponse: string | null =
        await AsyncStorage.getItem(LocalStorageKeys.SAVED_SERIES);
      if (localStorageSavedSeriesResponse !== null) {
        const localStorageSavedSeries = JSON.parse(
          localStorageSavedSeriesResponse
        );
        setSavedSeries([...localStorageSavedSeries]);
      }
    } catch (e) {
      console.error("##error", e);
    }
  };

  useEffect(() => {
    // deleteLocalStorage();
    getInitialData();
  }, []);

  return (
    <SavedSeriesContext.Provider
      value={{ saveSeries, deleteSeries, seriesIsSaved, savedSeries }}
    >
      {children}
    </SavedSeriesContext.Provider>
  );
};

export default SavedSeriesProvider;
