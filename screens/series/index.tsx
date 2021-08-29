import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import SearchResults from "../../components/SearchResults";
import { useSeries } from "@jobsity/common/queries";
import SeriesInfo from "../../components/SeriesInfo";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

// props navigation params
const SeriesScreen = ({ route }: any) => {
  const showId: number = route.params.showId;
  const query = useSeries(showId);
  const styles = useStyles(classes);
  return (
    <SafeAreaView style={styles.container}>
      <SeriesInfo query={query} showId={showId} />
    </SafeAreaView>
  );
};

export default SeriesScreen;
