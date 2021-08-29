import React, { useState } from "react";
import { SafeAreaView, View, Button, Text, Switch } from "react-native";
import useSavedSeries from "@jobsity/hooks/useSavedSeries";
import SearchResults from "@jobsity/ui/SearchResults";
import { useMemo } from "react";
import orderSeriesByAlphabeticalOrder from "@jobsity/common/orderSeriesByAlphabeticalOrder";

// props navigation params
const SavedSeriesScreen = () => {
  const { savedSeries } = useSavedSeries();
  const [alphabeticalOrder, setAlphabeticalOrder] = useState<boolean>(false);
  const orderedSeries = useMemo(() => {
    if (!alphabeticalOrder) return savedSeries;
    return orderSeriesByAlphabeticalOrder(savedSeries);
  }, [savedSeries, alphabeticalOrder]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 12,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Your saved series
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", marginRight: 8 }}>Alphabetical</Text>
          <Switch
            value={alphabeticalOrder}
            onValueChange={(value: boolean) => setAlphabeticalOrder(value)}
          />
        </View>
      </View>
      <SearchResults data={orderedSeries} saveOption />
    </SafeAreaView>
  );
};

export default SavedSeriesScreen;
