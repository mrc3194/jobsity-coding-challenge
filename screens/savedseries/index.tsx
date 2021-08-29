import React, { useState } from "react";
import { SafeAreaView, View, Button, Text } from "react-native";
import { useSeries } from "@jobsity/common/queries";
import SeriesInfo from "../../components/SeriesInfo";
import useSavedSeries from "@jobsity/hooks/useSavedSeries";
import SearchResults from "@jobsity/ui/SearchResults";
import { useMemo } from "react";

// props navigation params
const SavedSeriesScreen = () => {
  const { savedSeries } = useSavedSeries();
  const [alphabeticalOrder, setAlphabeticalOrder] = useState<boolean>(false);
  const orderedSeries = useMemo(() => {}, [savedSeries]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "700",
          paddingLeft: 12,
        }}
      >
        Your saved series
      </Text>
      <SearchResults data={savedSeries} />
    </SafeAreaView>
  );
};

export default SavedSeriesScreen;
