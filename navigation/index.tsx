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

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={NAVIGATIONSTACKS.HOME} component={HomeStack} />
        <Tab.Screen name={NAVIGATIONSCREENS.SEARCH} component={SearchStack} />
        <Tab.Screen name={NAVIGATIONSCREENS.SERIES} component={SeriesScreen} />
        <Tab.Screen
          name={NAVIGATIONSCREENS.EPISODE}
          component={EpisodeScreen}
        />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
