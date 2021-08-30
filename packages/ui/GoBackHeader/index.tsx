import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";
import Icon from "../Icon";
import { useNavigation } from "@react-navigation/native";

const GoBackHeader = () => {
  const { goBack } = useNavigation();
  const styles = useStyles(classes);
  return (
    <View style={styles.backButtonContainer}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Icon name="arrow-back" size={22} color="white" />
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoBackHeader;
