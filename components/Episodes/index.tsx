import React from "react";
import { View } from "react-native";
import ResultQuery from "@jobsity/ui/ResultQuery";
import Success from "./Success";

const Episodes = ({ query }: any) => {
  return <ResultQuery query={query} Success={Success} />;
};

export default Episodes;
