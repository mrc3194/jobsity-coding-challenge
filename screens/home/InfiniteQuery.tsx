import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import SearchResults from "../../components/SearchResults";
import { useFetchSeries } from "@jobsity/common/queries";
import Button from "@jobsity/ui/Button";
import useTheme from "@jobsity/hooks/useTheme";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import { useInfiniteQuery } from "react-query";

const InfiniteQuery = () => {
  const fetchSeries = async ({ pageParam = 0 }) => {
    const res = await fetch(`https://api.tvmaze.com/shows?page=${pageParam}`);
    return res.json();
  };
  const [page, setPage] = useState<number>(0);
  const query = useInfiniteQuery("infiniteScrolling", fetchSeries, {
    getNextPageParam: (lastPage, pages) => {},
  });
  const { palette } = useTheme();
  const styles = useStyles(classes);

  useEffect(() => {
    query.fetchNextPage({ pageParam: page });
  }, [page]);
  //   console.log("query", query);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>TVMazeApp</Text>
      <SearchResults
        query={query}
        searchResults={false}
        isInfinite
        page={page}
        setPage={setPage}
      />
    </SafeAreaView>
  );
};

export default InfiniteQuery;
