import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import Image from "@jobsity/ui/Image";
import { LinearGradient } from "expo-linear-gradient";
import classes from "./classes";
import { Episode } from "@jobsity/common/types/queries/episodes";
import cleanHTMLText from "@jobsity/common/cleanHTMLText";
import { useNavigation } from "@react-navigation/native";
import Icon from "@jobsity/ui/Icon";
import GoBackHeader from "@jobsity/ui/GoBackHeader";

interface Props {
  data: Episode;
}

const Success = ({ data }: Props) => {
  const { goBack } = useNavigation();
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
        <View style={styles.linearGradient} />
        <View style={styles.seriesInfo}>
          <View style={styles.seriesInfoContainer}>
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
      <GoBackHeader />
    </View>
  );
};

export default Success;
