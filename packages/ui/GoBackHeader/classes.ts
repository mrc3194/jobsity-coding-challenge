import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    backButtonContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      padding: 12,
      paddingVertical: 18,
    },
    backButton: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    backButtonText: {
      color: palette.text.primary,
      marginLeft: 4,
    },
  });
};

export default classes;
