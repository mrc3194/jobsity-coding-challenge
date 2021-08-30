import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    noImage: {
      width: "100%",
      height: "100%",
      backgroundColor: palette.main.accent,
      justifyContent: "center",
      alignItems: "center",
    },
    textNoImage: {
      textTransform: "uppercase",
      color: palette.text.primary,
      textAlign: "center",
      width: "90%",
    },
  });
};

export default classes;
