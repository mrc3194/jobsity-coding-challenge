import React from "react";
import { InfiniteScrollSettingsContext } from "@jobsity/common/InfiniteSettingsContext";

const useInfiniteScrollSettings = () =>
  React.useContext(InfiniteScrollSettingsContext);

export default useInfiniteScrollSettings;
