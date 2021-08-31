import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import SearchResults from "../../components/SearchResults";
import { useFetchSeries } from "@jobsity/common/queries";
import Button from "@jobsity/ui/Button";
import useTheme from "@jobsity/hooks/useTheme";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

const Pagination = () => {
  const [page, setPage] = useState<number>(0);
  const query = useFetchSeries(page);
  const { palette } = useTheme();
  const styles = useStyles(classes);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>TVMazeApp</Text>
      <SearchResults query={query} searchResults={false} />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          rightDivider
          title="Previous"
          onPress={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 0 || query.isLoading}
          width="50%"
          backgroundColor={palette.button.secondary}
          textColor={palette.common.white}
          height={54}
        />
        <Button
          title="Next"
          onPress={() => setPage((prevPage) => prevPage + 1)}
          width="50%"
          backgroundColor={palette.button.secondary}
          textColor={palette.common.white}
          height={54}
          disabled={query.isLoading}
        />
      </View>
    </SafeAreaView>
  );
};

export default Pagination;
