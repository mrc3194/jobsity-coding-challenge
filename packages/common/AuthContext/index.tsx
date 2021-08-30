import React, { useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LocalStorageKeys } from "../types/localStorage";
import { LocalStorageAutoOptions } from "../types/auth";
import saveInStorage from "../localStorage";

const initialContext = {
  isLoading: true,
  optionActive: null,
  validatePIN: (pin: string) => true,
  setAuthOption: (option: string) => null,
  userAuthenticated: true,
  setNewPIN: (newPIN: string) => null,
  setUserSuccessAuth: () => null,
  resetCredentials: () => null,
};

interface AuthContextProps {
  isLoading: boolean;
  optionActive: string | null;
  userAuthenticated: boolean;
  validatePIN: (pin: string) => boolean;
  setAuthOption: (option: string) => void;
  setNewPIN: (newPIN: string) => void;
  setUserSuccessAuth: () => void;
  resetCredentials: () => void;
}

export const AuthContext =
  React.createContext<AuthContextProps>(initialContext);

export interface AuthProviderProps {
  children: React.ReactChild[] | React.ReactChild;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authOptions, setAuthOptions] = useState<LocalStorageAutoOptions>({
    pinCode: null,
    currentOption: null,
  });
  const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const validatePIN = (pin: string): boolean => authOptions.pinCode === pin;
  const setAuthOption = (option: string) => {
    setAuthOptions((prevOptions: LocalStorageAutoOptions) => {
      const newOptions = {
        ...prevOptions,
        currentOption: option,
      };
      saveInStorage(JSON.stringify(newOptions), LocalStorageKeys.AUTH_SETTINGS);
      return { ...newOptions };
    });
  };

  const setNewPIN = (newPIN: string) =>
    setAuthOptions((prevOptions: LocalStorageAutoOptions) => {
      const newOptions = {
        ...prevOptions,
        pinCode: newPIN,
      };
      saveInStorage(JSON.stringify(newOptions), LocalStorageKeys.AUTH_SETTINGS);
      return { ...newOptions };
    });

  const resetCredentials = () => {
    setAuthOptions({
      currentOption: null,
      pinCode: null,
    });
    AsyncStorage.removeItem(LocalStorageKeys.AUTH_SETTINGS);
  };

  const setUserSuccessAuth = () => setUserAuthenticated(true);

  const getInitialData = async () => {
    try {
      const localStorageAuthOptionsesponse: string | null =
        await AsyncStorage.getItem(LocalStorageKeys.AUTH_SETTINGS);
      if (localStorageAuthOptionsesponse !== null) {
        const localStorageAuthOptions = JSON.parse(
          localStorageAuthOptionsesponse
        );
        setAuthOptions({ ...localStorageAuthOptions });
        setIsLoading(false);
      }
    } catch (e) {
      console.error("##error", e);
    }
  };

  const contextValue = useMemo(
    () => ({
      isLoading,
      optionActive: authOptions.currentOption,
      validatePIN,
      setAuthOption,
      setNewPIN,
      userAuthenticated,
      setUserSuccessAuth,
      resetCredentials,
    }),
    [isLoading, authOptions, setAuthOption, validatePIN]
  );

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
