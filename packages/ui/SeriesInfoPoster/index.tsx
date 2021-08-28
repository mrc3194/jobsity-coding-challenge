import React from "react";
import { View, Text, Image, ViewStyle } from "react-native";
import useStyles from "../../hooks/useStyles";
import classes from "./classes";

interface SeriesInfoPoster {
  imageSource: string | null;
  title: string;
  style?: ViewStyle;
}

const SeriesInfoPoster = ({ imageSource, title, style }: SeriesInfoPoster) => {
  const styles = useStyles(classes);
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        {imageSource && (
          <Image
            style={styles.image}
            source={{ uri: imageSource }}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default SeriesInfoPoster;
