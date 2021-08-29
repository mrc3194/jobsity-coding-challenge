import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import Settings from "../../components/Settings";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

// props navigation params
const SettingsScreen = () => {
  const styles = useStyles(classes);
  return (
    <SafeAreaView style={styles.container}>
      <Settings />
    </SafeAreaView>
  );
};

export default SettingsScreen;
