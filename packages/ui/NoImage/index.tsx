import React from "react";
import { View, Text } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

const NoImage = () => {
  const styles = useStyles(classes);
  return (
    <View style={styles.noImage}>
      <Text style={styles.textNoImage}>No Image Available</Text>
    </View>
  );
};

export default NoImage;
