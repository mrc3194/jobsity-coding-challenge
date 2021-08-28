import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import SearchResults from "../../components/SearchResults";
import Input from "@jobsity/ui/Input";
import debounce from "@jobsity/common/debounce";
import { useSearchSeries } from "../../packages/common/queries";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchTermQuery, setSearchTermQuery] = useState<string>("");

  const search = (text: string): void => {
    setSearchTerm(text);
    changeQueryTerm(text);
  };

  const changeQueryTerm = useCallback<(text: string) => void>(
    debounce(
      (text: string) => {
        setSearchTermQuery(text);
      },
      850,
      false
    ),
    []
  );

  const query = useSearchSeries(searchTermQuery);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#222", alignItems: "center" }}
    >
      <Input
        value={searchTerm}
        leftIcon
        width="90%"
        onChangeText={(text: string) => search(text)}
      />
      <SearchResults query={query} />
    </SafeAreaView>
  );
};

export default SearchScreen;
