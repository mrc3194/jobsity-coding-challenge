import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import SearchResults from "../../components/SearchResults";
import { useFetchSeries } from "@jobsity/common/queries";
import Button from "@jobsity/ui/Button";

const HomeScreen = () => {
  const [page, setPage] = useState<number>(0);
  const query = useFetchSeries(page);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
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
        />
        <Button
          title="Next"
          onPress={() => setPage((prevPage) => prevPage + 1)}
          width="50%"
          disabled={query.isLoading}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
