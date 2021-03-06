import React, { Dispatch, SetStateAction } from "react";
import { SafeAreaView, Text, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import Input from "@jobsity/ui/Input";
import { UseQueryResult } from "react-query";
import ResultQuery from "@jobsity/ui/ResultQuery";
import Success from "./Success";
import Loading from "./Loading";

interface SearchResultsProps {
  query: UseQueryResult;
  searchResults?: boolean;
  personResults?: boolean;
  isFlatList?: boolean;
  isInfinite?: boolean;
  setPage?: Dispatch<SetStateAction<number>>;
  page?: number;
}

const SearchResults = ({
  query,
  searchResults = false,
  personResults = false,
  ...rest
}: SearchResultsProps) => {
  return (
    <ResultQuery
      query={query}
      Success={Success}
      Loading={Loading}
      searchResults={searchResults}
      personResults={personResults}
      {...rest}
    />
  );
};

export default SearchResults;
