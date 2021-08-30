import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.main.accent,
      alignItems: "center",
      justifyContent: "center",
    },
    animatedLogoContainer: {
      width: "80%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: 120,
    },
    logoImageContainer: {
      width: 120,
      height: 120,
    },
    logoLettersContainer: {
      flex: 1,
      height: "100%",
      overflow: "hidden",
    },
    logoImage: {
      width: "100%",
      height: "100%",
    },
  });
};

export default classes;
