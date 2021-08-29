import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import SearchResults from "../../components/SearchResults";
import { useSeries } from "@jobsity/common/queries";
import SeriesInfo from "../../components/SeriesInfo";

// props navigation params
const SeriesScreen = ({ route }: any) => {
  const showId: number = route.params.showId;
  const query = useSeries(showId);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <SeriesInfo query={query} showId={showId} />
    </SafeAreaView>
  );
};

export default SeriesScreen;
