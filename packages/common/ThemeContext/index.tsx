import React, { useMemo, useState } from "react";
import { Dimensions, useWindowDimensions } from "react-native";
import { ThemeContextProps } from "../types/theme-context";

const { width: dW, height: dH } = Dimensions.get("window");

const themeObject: ThemeContextProps = {
  device: {
    width: dW,
    height: dH,
  },
  palette: {
    type: "light",
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.9)",
      secondary: "rgba(255, 255, 255, 0.54)",
      disabled: "rgba(255, 255, 255, 0.38)",
      hint: "rgba(0, 0, 0, 0.12)",
    },
    main: {
      primary: "#E50914",
      secondary: "#221F1F",
      accent: "#B81D24",
      extra: "#F5F5F1",
    },
    button: {
      primary: "#3551A1",
      secondary: "#3551A1",
      disabled: "#3551A1",
      hint: "#3551A1",
    },
    loading: {
      indicator: "#DC4446",
    },
    input: {
      color: "black",
      backgroundColor: "rgba(235, 235, 235, 0.5)",
      placeholder: "rbga(0, 0, 0, 0.5)",
    },
    divider: "rgba(0, 0, 0, 0.02)",
  },
};

export const ThemeContext = React.createContext<ThemeContextProps>(themeObject);

export interface ThemeProviderProps {
  children: React.ReactChild[] | React.ReactChild;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const appTheme = useMemo(() => themeObject, []);

  return (
    <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
