import React, { useMemo } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import SeriesInfoPoster from "@jobsity/ui/SeriesInfoPoster";
import { Search } from "@jobsity/common/types/queries/search";
import { Series } from "@jobsity/common/types/queries/series";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATIONSCREENS } from "../../packages/common/enums/navigation";

interface SuccessProps<T> {
  data: T[];
  searchResults?: boolean;
}

const Success = ({ data, searchResults = false }: SuccessProps<any>) => {
  const { navigate } = useNavigation();
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

  const goToSeries = (showId: number) => {
    navigate(NAVIGATIONSCREENS.SERIES, { showId });
  };

  const renderItem = (payload: any) => {
    if (searchResults) {
      const series: Search = payload.item;
      return (
        <SeriesInfoPoster
          key={series.show.id}
          title={series.show.name}
          imageSource={series.show.image ? series.show.image.medium : null}
          style={styles.poster}
          onPress={() => goToSeries(series.show.id)}
        />
      );
    }
    const series: Series = payload.item;
    return (
      <SeriesInfoPoster
        key={series.id}
        title={series.name}
        imageSource={series.image ? series.image.medium : null}
        style={styles.poster}
        onPress={() => goToSeries(series.id)}
      />
    );
  };

  return (
    <View style={styles.successContainer}>
      <FlatList
        columnWrapperStyle={styles.wrapper}
        renderItem={renderItem}
        data={data}
        keyExtractor={(item): string => {
          return String(searchResults ? item.show.id : item.id);
        }}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
      {/* <ScrollView>
        {searchResults
          ? data.map((series: Search) => {})
          : data.map((series: Series) => {
              return (
                <SeriesInfoPoster
                  key={series.id}
                  title={series.name}
                  imageSource={series.image ? series.image.medium : null}
                  style={styles.poster}
                />
              );
            })}
      </ScrollView> */}
    </View>
  );
};

export default Success;
