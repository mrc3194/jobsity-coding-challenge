import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../screens/home";
import SearchScreen from "../../../screens/search";
import SeriesScreen from "../../../screens/series";
import EpisodeScreen from "../../../screens/episode";
import { NAVIGATIONSCREENS } from "../../../packages/common/enums/navigation";
import PersonScreen from "../../../screens/person";

const Stack = createStackNavigator();

const HomeStack = (props: any) => {
  // const {
  //     route: { params },
  // } = props;
  return (
    <Stack.Navigator initialRouteName={NAVIGATIONSCREENS.HOME}>
      <Stack.Screen name={NAVIGATIONSCREENS.HOME} component={HomeScreen} />
      <Stack.Screen name={NAVIGATIONSCREENS.SERIES} component={SeriesScreen} />
      <Stack.Screen
        name={NAVIGATIONSCREENS.EPISODE}
        component={EpisodeScreen}
      />
      <Stack.Screen name={NAVIGATIONSCREENS.PERSON} component={PersonScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
