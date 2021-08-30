import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";
import {} from "@react-navigation/native";

const classes = ({ palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.main.secondary,
    },
  });
};

export default classes;
