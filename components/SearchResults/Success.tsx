import React, { Dispatch, SetStateAction, useMemo } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import SeriesInfoPoster from "@jobsity/ui/SeriesInfoPoster";
import { Search } from "@jobsity/common/types/queries/search";
import { Series } from "@jobsity/common/types/queries/series";
import { useNavigation } from "@react-navigation/native";
import { NAVIGATIONSCREENS } from "@jobsity/common/enums/navigation";
import { Person, PersonSearch } from "@jobsity/common/types/queries/person";
import useTheme from "@jobsity/hooks/useTheme";

interface SuccessProps<T> {
  data: T;
  searchResults?: boolean;
  personResults?: boolean;
  isFlatList?: boolean;
  page?: number;
  isInfinite?: boolean;
  isFetching?: boolean;
  setPage?: Dispatch<SetStateAction<number>>;
}

const Success = ({
  data,
  searchResults = false,
  personResults = false,
  isFlatList = true,
  setPage = () => {},
  page = 0,
  isInfinite = false,
  isFetching = false,
  ...rest
}: SuccessProps<any>) => {
  const { navigate } = useNavigation();
  const { palette } = useTheme();
  const styles = useStyles(classes);
  if (data.length === 0) {
    return (
      <View style={styles.emptyStateContainer}>
        <Text style={styles.emptyStateText}>There are no results</Text>
      </View>
    );
  }
  const goToSeries = (showId: number) => {
    navigate(NAVIGATIONSCREENS.SERIES, { showId });
  };

  const goToPerson = (personId: number, name: string, image: object | null) => {
    navigate(NAVIGATIONSCREENS.PERSON, { personId, name, image });
  };

  const renderItem = (payload: any) => {
    if (searchResults) {
      const series: Search = payload.item;
      return (
        <SeriesInfoPoster
          key={series.show.id + "show"}
          title={series.show.name}
          imageSource={series.show.image ? series.show.image.medium : null}
          style={styles.poster}
          onPress={() => goToSeries(series.show.id)}
        />
      );
    }
    if (personResults) {
      const personSearch: PersonSearch = payload.item;
      const { person } = personSearch;
      return (
        <SeriesInfoPoster
          key={person.id + "person"}
          title={person.name}
          imageSource={person.image ? person.image.medium : null}
          style={styles.poster}
          onPress={() => goToPerson(person.id, person.name, person.image)}
        />
      );
    }
    const series: Series = payload.item;
    return (
      <SeriesInfoPoster
        key={series.id + "series"}
        title={series.name}
        imageSource={series.image ? series.image.medium : null}
        style={styles.poster}
        onPress={() => goToSeries(series.id)}
      />
    );
  };

  const dataForFlatList = useMemo(() => {
    if (isInfinite) {
      return data.pages.flat();
    }
    return data;
  }, [isInfinite, data]);

  if (isFlatList) {
    return (
      <React.Fragment>
        <View style={styles.successContainer}>
          <FlatList
            columnWrapperStyle={styles.wrapper}
            renderItem={renderItem}
            data={dataForFlatList}
            keyExtractor={(item, index: number): string => {
              return String(
                searchResults
                  ? String(item.show.id) + String(index)
                  : String(item.id) + String(index)
              );
            }}
            style={styles.scrollView}
            contentContainerStyle={styles.contentContainer}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0}
            onEndReached={() => {
              if (!isFetching) {
                setPage((prevPage) => prevPage + 1);
              }
            }}
          />
        </View>
        {isFetching && isInfinite && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator color={palette.main.primary} size="small" />
          </View>
        )}
      </React.Fragment>
    );
  }
  return (
    <View style={styles.successContainer}>
      <View style={styles.contentContainerStatic}>
        {data.map((item: any, index: number) => renderItem({ item }))}
      </View>
    </View>
  );
};

export default Success;
