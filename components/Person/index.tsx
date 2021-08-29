import React from "react";
import ResultQuery from "@jobsity/ui/ResultQuery";
import Success from "./Success";

const Person = ({ query, name, image }: any) => {
  return (
    <ResultQuery query={query} Success={Success} name={name} image={image} />
  );
};

export default Person;
