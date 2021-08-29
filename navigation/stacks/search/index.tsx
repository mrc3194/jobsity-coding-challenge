import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../screens/home";
import SearchScreen from "../../../screens/search";
import SeriesScreen from "../../../screens/series";
import EpisodeScreen from "../../../screens/episode";
import { NAVIGATIONSCREENS } from "@jobsity/common/enums/navigation";
import PersonScreen from "../../../screens/person";

const Stack = createStackNavigator();

const SearchStack = (props: any) => {
  // const {
  //     route: { params },
  // } = props;
  return (
    <Stack.Navigator initialRouteName={NAVIGATIONSCREENS.SEARCH}>
      <Stack.Screen name={NAVIGATIONSCREENS.SEARCH} component={SearchScreen} />
      <Stack.Screen name={NAVIGATIONSCREENS.SERIES} component={SeriesScreen} />
      <Stack.Screen name={NAVIGATIONSCREENS.PERSON} component={PersonScreen} />
      <Stack.Screen
        name={NAVIGATIONSCREENS.EPISODE}
        component={EpisodeScreen}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
