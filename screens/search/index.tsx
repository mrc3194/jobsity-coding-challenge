import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import SearchResults from "../../components/SearchResults";
import Input from "@jobsity/ui/Input";
import debounce from "@jobsity/common/debounce";
import { useSearchPerson, useSearchSeries } from "@jobsity/common/queries";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchTermQuery, setSearchTermQuery] = useState<string>("");

  const search = (text: string): void => {
    setSearchTerm(text);
    if (text.length === 0) return;
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
  const personQuery = useSearchPerson(searchTermQuery);
  const styles = useStyles(classes);

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
      <View style={{ flex: 1, width: "100%" }}>
        <ScrollView>
          <Text style={styles.headerTitle}>Series</Text>
          <SearchResults query={query} searchResults isFlatList={false} />
          <Text style={styles.headerTitle}>Persons</Text>
          <SearchResults query={personQuery} personResults isFlatList={false} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
