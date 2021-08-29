import React from "react";
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";
const isiOS = Platform.OS === "ios";

export interface usePlatformResponse {
  isAndroid: boolean;
  isiOS: boolean;
  OS: string;
  version: string | number;
}

const usePlatform = (): usePlatformResponse => {
  return { isAndroid, isiOS, OS: Platform.OS, version: Platform.Version };
};

export default usePlatform;
