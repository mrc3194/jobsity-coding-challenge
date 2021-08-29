import React from "react";
import {
  View,
  Text,
  Image,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import useStyles from "../../hooks/useStyles";
import classes from "./classes";

interface SeriesInfoPoster extends TouchableOpacityProps {
  imageSource: string | null;
  title: string;
  style?: ViewStyle;
}

const SeriesInfoPoster = ({
  imageSource,
  title,
  style,
  ...rest
}: SeriesInfoPoster) => {
  const styles = useStyles(classes);
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      style={[styles.container, style]}
      {...rest}
    >
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
    </TouchableOpacity>
  );
};

export default SeriesInfoPoster;
