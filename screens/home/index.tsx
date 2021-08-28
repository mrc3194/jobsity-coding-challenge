import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import SearchResults from "../../components/SearchResults";
import { useFetchSeries } from "@jobsity/common/queries";

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
          height: 100,
        }}
      >
        <Button
          title={"Previous"}
          onPress={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 0}
        />
        <Button
          title={"Next"}
          onPress={() => setPage((prevPage) => prevPage + 1)}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
