import React from "react";
import { StyleSheet, Platform, StyleProp } from "react-native";
import useDimensions from "../useDimensions";
import useTheme from "../useTheme";
import usePlatform from "../usePlatform";

const useStyles = (stylesheet: Function, params?: any): StyleProp<any> => {
  const { screenWidth, screenHeight } = useDimensions();
  const theme = useTheme();
  const platform = usePlatform();
  const dwPercentage = (number: number) => number * 0.01 * screenWidth;
  const dhPercentage = (number: number) => number * 0.01 * screenHeight;
  if (!stylesheet) {
    return StyleSheet.create({});
  }
  const styles = stylesheet({
    ...theme,
    ...params,
    screenHeight,
    screenWidth,
    ...platform,
    dwPercentage,
    dhPercentage,
  });
  return styles;
};

export default useStyles;
