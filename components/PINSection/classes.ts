import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      width: "90%",
      paddingVertical: 20,
      paddingHorizontal: 12,
      borderRadius: 8,
      backgroundColor: palette.main.accent,
      justifyContent: "center",
      alignItems: "center",
    },
    pinContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 18,
    },
    numberBox: {
      width: 50,
      height: 50,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: palette.text.primary,
      backgroundColor: palette.main.extra,
    },
    number: {
      color: palette.common.black,
      fontSize: 24,
    },
    textInput: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
    },
    headerTitle: {
      color: palette.text.primary,
      marginBottom: 12,
      fontSize: 16,
    },
  });
};

export default classes;
