import React from "react";
import { View, ViewStyle } from "react-native";
import useStyles from "../../hooks/useStyles";
import classes from "./classes";

interface SeriesInfoPosterLoadingProps {
  style?: ViewStyle;
}

const SeriesInfoPosterLoading = ({ style }: SeriesInfoPosterLoadingProps) => {
  const styles = useStyles(classes);
  return <View style={[styles.container, styles.loadingContainer, style]} />;
};

export default SeriesInfoPosterLoading;
