import React, { useMemo } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import Image from "@jobsity/ui/Image";
import { LinearGradient } from "expo-linear-gradient";
import classes from "./classes";
import cleanHTMLText from "@jobsity/common/cleanHTMLText";
import { Person, PersonInfo } from "@jobsity/common/types/queries/person";
import {
  Image as ImageProps,
  Series,
} from "@jobsity/common/types/queries/series";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATIONSCREENS } from "@jobsity/common/enums/navigation";
import NoImage from "@jobsity/ui/NoImage";
import GoBackHeader from "@jobsity/ui/GoBackHeader";

interface Props {
  data: PersonInfo[];
  name: string;
  image: ImageProps;
}

const Success = ({ data, name, image }: Props) => {
  const styles = useStyles(classes);
  const { navigate } = useNavigation();

  const renderItem = ({ item }: any) => {
    const series: Series = item._embedded.show;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.seriesContainer}
        onPress={() =>
          navigate(NAVIGATIONSCREENS.SERIES, { showId: series.id })
        }
      >
        <Text style={styles.seriesText}>{series.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.posterContainer}>
        {image ? (
          <Image source={{ uri: image?.original }} viewStyle={styles.poster} />
        ) : (
          <View style={styles.noImageContainer}>
            <NoImage />
          </View>
        )}
        <View style={styles.linearGradient} />
        <View style={styles.seriesInfo}>
          <View style={styles.seriesInfoContainer}>
            <Text numberOfLines={3} style={styles.seriesTitle}>
              {name}
            </Text>
          </View>
        </View>
        <GoBackHeader />
      </View>
      {data.length === 0 ? (
        <View style={styles.noSeriesListedContainer}>
          <Text style={styles.noSeriesText}>
            There are no series listed for this person
          </Text>
        </View>
      ) : (
        <View style={styles.flatListContainer}>
          <FlatList
            contentContainerStyle={styles.flatList}
            style={styles.flatListStyle}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item: any) => String(item._embedded.show.id)}
          />
        </View>
      )}
    </View>
  );
};

export default Success;
