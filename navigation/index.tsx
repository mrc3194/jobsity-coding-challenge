import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SeriesScreen from "../screens/series";
import EpisodeScreen from "../screens/episode";
import HomeStack from "./stacks/home";
import {
  NAVIGATIONSCREENS,
  NAVIGATIONSTACKS,
} from "../packages/common/enums/navigation";
import SearchStack from "./stacks/search";
import SavedSeriesScreen from "../screens/savedseries";
import SettingsScreen from "../screens/settings";

const Tab = createBottomTabNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={NAVIGATIONSTACKS.HOME} component={HomeStack} />
        <Tab.Screen name={NAVIGATIONSCREENS.SEARCH} component={SearchStack} />
        {/* <Tab.Screen name={NAVIGATIONSCREENS.SERIES} component={SeriesScreen} /> */}
        <Tab.Screen name="SavedSeries" component={SavedSeriesScreen} />
        <Tab.Screen
          name={NAVIGATIONSCREENS.SETTINGS}
          component={SettingsScreen}
        />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
