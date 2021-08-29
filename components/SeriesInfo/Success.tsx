import React, { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { useEpisodes } from "@jobsity/common/queries";
import Episodes from "../Episodes";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import Image from "@jobsity/ui/Image";
import cleanHTMLText from "@jobsity/common/cleanHTMLText";
import { Series } from "@jobsity/common/types/queries/series";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  data: Series;
  showId: number;
}

const Success = ({ data, showId }: Props) => {
  const query = useEpisodes(showId);
  const styles = useStyles(classes);
  const { image, name, genres, schedule, summary } = data;
  const cleanedSummary = useMemo(() => cleanHTMLText(summary), [summary]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.posterContainer}>
          {image && (
            <Image
              source={{ uri: image?.original }}
              viewStyle={styles.poster}
            />
          )}
          <LinearGradient
            colors={["transparent", "black"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.95 }}
            style={styles.linearGradient}
          />
          <View style={styles.seriesInfo}>
            <Text style={styles.seriesTitle}>{name}</Text>
            <View style={styles.datesContainer}>
              <Days days={schedule.days} />
              <Text style={styles.seriesDates}>{schedule.time} hrs.</Text>
            </View>
          </View>
        </View>
        <Text style={styles.headerText}>Genres</Text>
        <View style={styles.genresScrollViewContainer}>
          <ScrollView
            contentContainerStyle={[styles.genresContentContainer]}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {genres.map((genre: string) => (
              <View style={styles.dayContainer}>
                <Text style={styles.day}>{genre}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <Text style={styles.headerText}>Summary</Text>
        <Text style={styles.summary}>{cleanedSummary}</Text>
        <Episodes query={query} />
      </ScrollView>
    </View>
  );
};

interface Days {
  days: string[];
}

const Days = ({ days }: Days) => {
  const styles = useStyles(classes);
  return (
    <View style={styles.daysContainer}>
      {days.map((day: string) => (
        <View style={styles.dayContainer}>
          <Text style={styles.day}>{day.substr(0, 3)}</Text>
        </View>
      ))}
    </View>
  );
};

export default Success;
