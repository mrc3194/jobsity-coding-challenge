import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import SearchResults from "../../components/SearchResults";
import Input from "@jobsity/ui/Input";
import debounce from "@jobsity/common/debounce";
import { useSearchPerson, useSearchSeries } from "@jobsity/common/queries";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import Icon from "@jobsity/ui/Icon";

const SearchScreen = () => {
  const [firstSearchHappened, setFirstSearchHappened] =
    useState<boolean>(false);
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
        if (!firstSearchHappened) setFirstSearchHappened(true);
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
    <SafeAreaView style={styles.container}>
      <Input
        value={searchTerm}
        leftIcon
        width="90%"
        onChangeText={(text: string) => search(text)}
      />
      {firstSearchHappened ? (
        <View style={styles.contentContainer}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.headerTitle}>Series</Text>
            <SearchResults query={query} searchResults isFlatList={false} />
            <Text style={styles.headerTitle}>Persons</Text>
            <SearchResults
              query={personQuery}
              personResults
              isFlatList={false}
            />
          </ScrollView>
        </View>
      ) : (
        <View style={styles.firstSearchContainer}>
          <Icon name="search" color="white" size={52} />
          <Text style={styles.firstSearchText}>
            Search for your favorite series or talents!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
