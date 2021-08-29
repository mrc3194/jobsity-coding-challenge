import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import { useEpisodeInfo } from "@jobsity/common/queries";
import Episode from "../../components/Episode";

// navigation params
const EpisodeScreen = ({ route }: any) => {
  const { episodeId } = route.params;
  const query = useEpisodeInfo(episodeId);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Episode query={query} />
    </SafeAreaView>
  );
};

export default EpisodeScreen;
