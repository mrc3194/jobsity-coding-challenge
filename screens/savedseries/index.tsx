import React, { useState } from "react";
import { SafeAreaView, View, Button, Text, Switch } from "react-native";
import useSavedSeries from "@jobsity/hooks/useSavedSeries";
import SearchResults from "@jobsity/ui/SearchResults";
import { useMemo } from "react";
import orderSeriesByAlphabeticalOrder from "@jobsity/common/orderSeriesByAlphabeticalOrder";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

// props navigation params
const SavedSeriesScreen = () => {
  const { savedSeries } = useSavedSeries();
  const styles = useStyles(classes);
  const [alphabeticalOrder, setAlphabeticalOrder] = useState<boolean>(false);
  const orderedSeries = useMemo(() => {
    if (!alphabeticalOrder) return savedSeries;
    return orderSeriesByAlphabeticalOrder(savedSeries);
  }, [savedSeries, alphabeticalOrder]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.headerTitle}>Your saved series</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Alphabetical</Text>
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
