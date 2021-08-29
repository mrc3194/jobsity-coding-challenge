import React from "react";
import { Text, View } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

const Settings: React.FC = () => {
  const styles = useStyles(classes);
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Set PIN</Text>
    </View>
  );
};

export default Settings;
