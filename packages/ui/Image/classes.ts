import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: palette.main.accent,
    },
    image: {
      width: "100%",
      height: "100%",
    },
  });
};

export default classes;
