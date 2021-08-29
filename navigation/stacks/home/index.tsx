import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../screens/home";
import SearchScreen from "../../../screens/search";
import SeriesScreen from "../../../screens/series";
import EpisodeScreen from "../../../screens/episode";

const Stack = createStackNavigator();

const HomeStack = (props: any) => {
  // const {
  //     route: { params },
  // } = props;
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen name={"Home"} component={HomeScreen} />
      <Stack.Screen name={"Search"} component={SearchScreen} />
      <Stack.Screen name={"Series"} component={SeriesScreen} />
      <Stack.Screen name={"Episode"} component={EpisodeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
