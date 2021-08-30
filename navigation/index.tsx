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
} from "@jobsity/common/enums/navigation";
import SearchStack from "./stacks/search";
import SavedSeriesScreen from "../screens/savedseries";
import SettingsScreen from "../screens/settings";
import { AuthOptions } from "../packages/common/types/auth";
import AuthScreen from "../screens/auth";
import useAuthContext from "@jobsity/hooks/useAuthContext";
import SavedSeriesStack from "./stacks/savedseries";
import TabBar from "./tabbar";

const Tab = createBottomTabNavigator();

function NavigationStack() {
  const { userAuthenticated, optionActive } = useAuthContext();
  if (
    optionActive === AuthOptions.BIO ||
    (optionActive === AuthOptions.PIN && !userAuthenticated)
  ) {
    return <AuthScreen />;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name={NAVIGATIONSTACKS.HOME} component={HomeStack} />
        <Tab.Screen name={NAVIGATIONSCREENS.SEARCH} component={SearchStack} />
        {/* <Tab.Screen name={NAVIGATIONSCREENS.SERIES} component={SeriesScreen} /> */}
        <Tab.Screen
          name={NAVIGATIONSTACKS.SAVEDSERIES}
          component={SavedSeriesStack}
        />
        <Tab.Screen
          name={NAVIGATIONSTACKS.SETTINGS}
          component={SettingsScreen}
        />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
