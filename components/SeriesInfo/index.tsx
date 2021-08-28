import React from "react";
import { View } from "react-native";
import ResultQuery from "@jobsity/ui/ResultQuery";
import Success from "./Success";

const SeriesInfo = ({ query, showId }: any) => {
  return <ResultQuery query={query} Success={Success} showId={showId} />;
};

export default SeriesInfo;
