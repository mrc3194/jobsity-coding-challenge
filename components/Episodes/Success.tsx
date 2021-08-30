import React, { useMemo, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import { Episode } from "../../packages/common/types/queries/episodes";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATIONSCREENS } from "../../packages/common/enums/navigation";

const Success = ({ data }: any) => {
  const [currentSeason, setCurrentSeason] = useState<number>(0);
  const seasonsList = useMemo(() => data[currentSeason], [currentSeason, data]);
  const styles = useStyles(classes);
  if (data.length === 0) return <></>;
  return (
    <View style={styles.container}>
      <View style={styles.seasonsSelectorContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          {data.map((season: any, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.seasonSelector,
                  currentSeason === index && styles.seasonSelected,
                ]}
                onPress={() => setCurrentSeason(index)}
              >
                <Text
                  style={[
                    styles.seasonSelectorText,
                    currentSeason === index && styles.seasonSelectedText,
                  ]}
                >
                  Season {season.season}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <ListOfEpisodes episodes={seasonsList.episodes} />
    </View>
  );
};

interface ListOfEpisodesProps {
  episodes: Episode[];
}

const ListOfEpisodes = ({ episodes }: ListOfEpisodesProps) => {
  const { navigate } = useNavigation();
  const styles = useStyles(classes);

  return (
    <View style={styles.listOfEpisodesContainer}>
      {episodes.map((episode: Episode, index: number) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          style={styles.episodeContainer}
          onPress={() =>
            navigate(NAVIGATIONSCREENS.EPISODE, { episodeId: episode.id })
          }
        >
          <Text style={styles.episodeText}>
            <Text style={styles.seasonEpisode}>
              S{episode.season}E{episode.number}
            </Text>{" "}
            {episode.name}
          </Text>
          <Text style={styles.episodeDuration}>{episode.runtime} minutes</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Success;
