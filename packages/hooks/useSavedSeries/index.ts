import React, { useContext } from "react";
import { SavedSeriesContext } from "@jobsity/common/SavedSeriesContext";

const useSavedSeries = () => {
  return useContext(SavedSeriesContext);
};

export default useSavedSeries;
