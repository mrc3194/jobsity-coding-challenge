import React, { useMemo } from "react";
import {
  View,
  Text,
  Image,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import Icon from "../Icon";
import classes from "./classes";
import useSavedSeries from "@jobsity/hooks/useSavedSeries";

interface SeriesInfoPoster extends TouchableOpacityProps {
  imageSource: string | null;
  title: string;
  style?: ViewStyle;
  saveOption?: boolean;
  id?: number;
}

const SeriesInfoPoster = ({
  imageSource,
  title,
  style,
  id = 0,
  saveOption = false,
  ...rest
}: SeriesInfoPoster) => {
  const { seriesIsSaved, deleteSeries } = useSavedSeries();
  const isSeriesSaved = useMemo(() => seriesIsSaved(id), []);
  const styles = useStyles(classes);
  const manageSeriesStatus = () => {
    if (isSeriesSaved) {
      deleteSeries(id);
    }
  };
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
      {saveOption ? (
        <View style={styles.titleContainerWithSaveOption}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <TouchableOpacity onPress={manageSeriesStatus}>
            <Icon
              name={isSeriesSaved ? "bookmark" : "bookmark-outline"}
              color="black"
              size={24}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.titleContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default SeriesInfoPoster;
