import { usePlatformResponse } from "@jobsity/hooks/usePlatform";
import { ThemeContextProps } from "../theme-context";

export interface CustomStyleSheetProps
  extends ThemeContextProps,
    usePlatformResponse {
  screenHeight: number;
  screenWidth: number;
  dwPercentage: (number: number) => number;
  dhPercentage: (number: number) => number;
}
