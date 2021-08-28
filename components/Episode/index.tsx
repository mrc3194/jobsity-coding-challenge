import React from "react";
import ResultQuery from "@jobsity/ui/ResultQuery";
import Success from "./Success";

const Episode = ({ query }: any) => {
  return <ResultQuery query={query} Success={Success} />;
};

export default Episode;
