import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import { useEpisodeInfo, usePerson } from "@jobsity/common/queries";
import Episode from "../../components/Episode";
import Person from "../../components/Person";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

// navigation params
const PersonScreen = ({ route }: any) => {
  const { personId, name, image } = route.params;
  const styles = useStyles(classes);
  const query = usePerson(personId);
  return (
    <SafeAreaView style={styles.container}>
      <Person query={query} name={name} image={image} />
    </SafeAreaView>
  );
};

export default PersonScreen;
