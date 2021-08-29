import React from "react";
import { Image as RNImage, View, ImageProps, ViewStyle } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

interface ImageUIProps extends ImageProps {
  viewStyle?: ViewStyle;
}

const Image = ({ viewStyle, ...rest }: ImageUIProps) => {
  const styles = useStyles(classes);
  return (
    <View style={[styles.container, viewStyle]}>
      <RNImage {...rest} style={styles.image} resizeMode="cover" />
    </View>
  );
};

export default Image;
