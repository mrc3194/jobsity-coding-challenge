import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SeriesScreen from "../../../screens/series";
import EpisodeScreen from "../../../screens/episode";
import { NAVIGATIONSCREENS } from "@jobsity/common/enums/navigation";
import SavedSeriesScreen from "../../../screens/savedseries";

const Stack = createStackNavigator();

const SavedSeriesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName={NAVIGATIONSCREENS.SAVEDSERIES}
    >
      <Stack.Screen
        name={NAVIGATIONSCREENS.SAVEDSERIES}
        component={SavedSeriesScreen}
      />
      <Stack.Screen name={NAVIGATIONSCREENS.SERIES} component={SeriesScreen} />
      <Stack.Screen
        name={NAVIGATIONSCREENS.EPISODE}
        component={EpisodeScreen}
      />
      {/* <Stack.Screen
        name={NAVIGATIONSCREENS.EPISODE}
        component={EpisodeScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default SavedSeriesStack;
