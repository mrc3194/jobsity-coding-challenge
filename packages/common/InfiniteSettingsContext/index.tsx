import React, { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalStorageKeys } from "../types/localStorage";
import { LocalStorageAutoOptions } from "../types/auth";
import saveInStorage from "../localStorage";

const initialContext = {
  infiniteScrollActive: false,
  setValue: (newValue: boolean) => {
    true;
  },
};

interface InfiniteScrollSettingsContextProps {
  infiniteScrollActive: boolean;
  setValue: (newValue: boolean) => void;
}

export const InfiniteScrollSettingsContext =
  React.createContext<InfiniteScrollSettingsContextProps>(initialContext);

export interface InfiniteScrollSettingsProps {
  children: React.ReactChild[] | React.ReactChild;
}

const InfiniteScrollSettingsProvider: React.FC<InfiniteScrollSettingsProps> = ({
  children,
}) => {
  const [infiniteScrollActive, setInfiniteScrollActive] =
    useState<boolean>(false);

  const getInitialData = async () => {
    try {
      const localSettingsResponse: string | null = await AsyncStorage.getItem(
        LocalStorageKeys.SCROLL
      );
      if (localSettingsResponse !== null) {
        const localSettings = JSON.parse(localSettingsResponse);
        setInfiniteScrollActive(localSettings);
      }
    } catch (e) {
      console.error("##error", e);
    }
  };

  const setValue = (newValue: boolean) => {
    saveInStorage(JSON.stringify(!newValue), LocalStorageKeys.SCROLL);
    setInfiniteScrollActive(newValue);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <InfiniteScrollSettingsContext.Provider
      value={{ infiniteScrollActive, setValue }}
    >
      {children}
    </InfiniteScrollSettingsContext.Provider>
  );
};

export default InfiniteScrollSettingsProvider;
