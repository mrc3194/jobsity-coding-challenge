import React, { useMemo } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useEpisodes } from "@jobsity/common/queries";
import Episodes from "../Episodes";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import Image from "@jobsity/ui/Image";
import cleanHTMLText from "@jobsity/common/cleanHTMLText";
import { Series } from "@jobsity/common/types/queries/series";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@jobsity/ui/Icon";
import useSavedSeries from "@jobsity/hooks/useSavedSeries";
import NoImage from "@jobsity/ui/NoImage";
import GoBackHeader from "@jobsity/ui/GoBackHeader";

interface Props {
  data: Series;
  showId: number;
}

const Success = ({ data, showId }: Props) => {
  const query = useEpisodes(showId);
  const { seriesIsSaved, saveSeries, deleteSeries } = useSavedSeries();
  const styles = useStyles(classes);
  const { image, name, genres, schedule, summary } = data;
  const cleanedSummary = useMemo(
    () => (summary ? cleanHTMLText(summary) : null),
    [summary]
  );

  const isSeriesSaved = useMemo(
    () => seriesIsSaved(data.id),
    [data.id, seriesIsSaved]
  );

  const manageSeriesSavedStatus = () => {
    if (isSeriesSaved) {
      deleteSeries(data.id);
    } else {
      saveSeries(data);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.posterContainer}>
          {image ? (
            <Image
              source={{ uri: image?.original }}
              viewStyle={styles.poster}
            />
          ) : (
            <View style={styles.noImageContainer}>
              <NoImage />
            </View>
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
              {schedule.time.length > 0 && (
                <Text style={styles.seriesDates}>{schedule.time} hrs.</Text>
              )}
            </View>
          </View>
          <TouchableOpacity
            onPress={manageSeriesSavedStatus}
            style={styles.saveButtonContainer}
          >
            <Icon
              name={isSeriesSaved ? "bookmark" : "bookmark-outline"}
              color="white"
              size={32}
            />
          </TouchableOpacity>
          <GoBackHeader />
        </View>
        <Text style={styles.headerText}>Genres</Text>
        <View style={styles.genresScrollViewContainer}>
          <ScrollView
            contentContainerStyle={[styles.genresContentContainer]}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {genres.map((genre: string) => (
              <View key={genre} style={styles.dayContainer}>
                <Text style={styles.day}>{genre}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {summary && (
          <React.Fragment>
            <Text style={styles.headerText}>Summary</Text>
            <Text style={styles.summary}>{cleanedSummary}</Text>
          </React.Fragment>
        )}
        <Episodes query={query} />
      </ScrollView>
    </View>
  );
};

interface Days {
  days?: string[];
}

const Days = ({ days }: Days) => {
  const styles = useStyles(classes);
  return (
    <View style={styles.daysContainer}>
      {days?.map((day: string) => (
        <View key={day} style={styles.dayContainer}>
          <Text style={styles.day}>
            {days.length > 3 ? day.substr(0, 3) : day}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Success;
