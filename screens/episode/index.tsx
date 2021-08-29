import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import { useEpisodeInfo } from "@jobsity/common/queries";
import Episode from "../../components/Episode";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

// navigation params
const EpisodeScreen = ({ route }: any) => {
  const { episodeId } = route.params;
  const styles = useStyles(classes);
  const query = useEpisodeInfo(episodeId);
  return (
    <SafeAreaView style={styles.container}>
      <Episode query={query} />
    </SafeAreaView>
  );
};

export default EpisodeScreen;
