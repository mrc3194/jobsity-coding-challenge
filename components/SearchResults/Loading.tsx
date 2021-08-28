import React from "react";
import { Text, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import SeriesInfoPosterLoading from "@jobsity/ui/SeriesInfoPoster/Loading";

const Loading = () => {
  const styles = useStyles(classes);
  return (
    <View style={styles.loadingContainer}>
      {new Array(6).fill(null).map((_: null, index: number) => (
        <SeriesInfoPosterLoading key={index} style={styles.poster} />
      ))}
    </View>
  );
};

export default Loading;
