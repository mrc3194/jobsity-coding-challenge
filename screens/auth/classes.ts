import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.main.secondary,
      justifyContent: "center",
      alignItems: "center",
    },
    authButton: {
      marginBottom: 24,
      width: "100%",
      alignItems: "center",
    },
    PINContainer: {
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  });
};

export default classes;
