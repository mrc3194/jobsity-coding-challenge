import React, { useMemo } from "react";
import { Text, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import Image from "@jobsity/ui/Image";
import { LinearGradient } from "expo-linear-gradient";
import classes from "./classes";
import { Episode } from "@jobsity/common/types/queries/episodes";
import cleanHTMLText from "@jobsity/common/cleanHTMLText";

interface Props {
  data: Episode;
}

const Success = ({ data }: Props) => {
  const styles = useStyles(classes);
  const { image, name, number, season, summary, airdate, airtime } = data;
  const cleanedSummary = useMemo(
    () => (summary ? cleanHTMLText(summary) : null),
    [summary]
  );
  return (
    <View style={styles.container}>
      <View style={styles.posterContainer}>
        {image && (
          <Image source={{ uri: image?.original }} viewStyle={styles.poster} />
        )}
        <LinearGradient
          colors={["transparent", "black"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.95 }}
          style={styles.linearGradient}
        />
        <View style={styles.seriesInfo}>
          <View style={{ width: "100%" }}>
            <Text style={styles.seriesTitle}>{name}</Text>
            <Text style={styles.seriesSeason}>
              Season {season} - Episode {number}
            </Text>
          </View>
          {summary && <Text style={styles.summary}>{cleanedSummary}</Text>}
          <Text style={styles.seriesDates}>
            Air date: {airdate} {airtime && `,${airtime} hrs.`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Success;
