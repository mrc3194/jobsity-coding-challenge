import React, { useCallback, useRef } from "react";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SearchResults from "../../components/SearchResults";
import Input from "@jobsity/ui/Input";
import debounce from "@jobsity/common/debounce";
import { useSearchPerson, useSearchSeries } from "@jobsity/common/queries";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import Icon from "@jobsity/ui/Icon";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import useDimensions from "@jobsity/hooks/useDimensions";
import useTheme from "@jobsity/hooks/useTheme";

const SearchScreen = () => {
  const [firstSearchHappened, setFirstSearchHappened] =
    useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchTermQuery, setSearchTermQuery] = useState<string>("");

  const search = (text: string): void => {
    setSearchTerm(text);
    if (text.length === 0) return;
    changeQueryTerm(text);
  };

  const changeQueryTerm = useCallback<(text: string) => void>(
    debounce(
      (text: string) => {
        setSearchTermQuery(text);
        if (!firstSearchHappened) setFirstSearchHappened(true);
      },
      850,
      false
    ),
    []
  );

  const query = useSearchSeries(searchTermQuery);
  const personQuery = useSearchPerson(searchTermQuery);
  const styles = useStyles(classes);
  const textInputRef = useRef<any>(null);
  const sharedInputFocused = useSharedValue<number>(0);

  const searchInputContainerStyle = useAnimatedStyle(() => {
    return {
      width:
        interpolate(
          sharedInputFocused.value,
          [0, 1],
          [100, 80],
          Extrapolate.CLAMP
        ) + "%",
    };
  });

  const cancelButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: sharedInputFocused.value,
        },
      ],
      opacity: sharedInputFocused.value,
    };
  });

  const blurInput = () => {
    textInputRef.current?.blur();
  };

  const onInputBlur = () => (sharedInputFocused.value = withTiming(0));
  const onInputFocus = () => (sharedInputFocused.value = withTiming(1));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Animated.View style={searchInputContainerStyle}>
          <Input
            ref={textInputRef}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
            value={searchTerm}
            leftIcon
            width="100%"
            onChangeText={(text: string) => search(text)}
          />
        </Animated.View>
        <Animated.View style={cancelButtonStyle}>
          <TouchableOpacity onPress={blurInput}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      {firstSearchHappened ? (
        <View style={styles.contentContainer}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.headerTitle}>Series</Text>
            <SearchResults query={query} searchResults isFlatList={false} />
            <Text style={styles.headerTitle}>Persons</Text>
            <SearchResults
              query={personQuery}
              personResults
              isFlatList={false}
            />
          </ScrollView>
        </View>
      ) : (
        <View style={styles.firstSearchContainer}>
          <Icon name="search" color="white" size={52} />
          <Text style={styles.firstSearchText}>
            Search for your favorite series or talents!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;
