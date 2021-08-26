import React from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

interface useDimensionsResponse {
  screenWidth: number;
  screenHeight: number;
}

const useDimensions = (): useDimensionsResponse => {
  return {
    screenWidth: width,
    screenHeight: height,
  };
};

export default useDimensions;
