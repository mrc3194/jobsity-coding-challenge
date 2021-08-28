import React from "react";
import { ScrollView, Text, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import SeriesInfoPoster from "@jobsity/ui/SeriesInfoPoster";
import { Search } from "@jobsity/common/types/queries/search";

interface SuccessProps {
  data: Search[];
}

const Success = ({ data }: SuccessProps) => {
  const styles = useStyles(classes);
  if (data.length === 0) {
    return (
      <View style={styles.emptyStateContainer}>
        <Text style={styles.emptyStateText}>
          Search any series in TV Maze App
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.successContainer}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {data.map((series: Search) => {
          return (
            <SeriesInfoPoster
              key={series.show.id}
              title={series.show.name}
              imageSource={series.show.image ? series.show.image.medium : null}
              style={styles.poster}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Success;
