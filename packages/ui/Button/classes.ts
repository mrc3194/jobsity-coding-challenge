import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ palette, dhPercentage }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      height: dhPercentage(8),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: palette.button.primary,
    },
    text: {
      color: palette.common.black,
    },
  });
};

export default classes;
