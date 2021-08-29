import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import { useEpisodeInfo, usePerson } from "@jobsity/common/queries";
import Episode from "../../components/Episode";
import Person from "../../components/Person";

// navigation params
const PersonScreen = ({ route }: any) => {
  const { personId, name, image } = route.params;
  const query = usePerson(personId);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Person query={query} name={name} image={image} />
    </SafeAreaView>
  );
};

export default PersonScreen;
