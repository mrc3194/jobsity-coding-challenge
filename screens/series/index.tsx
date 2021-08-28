import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import SearchResults from "../../components/SearchResults";
import { useSeries } from "@jobsity/common/queries";
import SeriesInfo from "../../components/SeriesInfo";

const SeriesScreen = () => {
  const showId = 83;
  const query = useSeries(showId);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <SeriesInfo query={query} showId={showId} />
    </SafeAreaView>
  );
};

export default SeriesScreen;
