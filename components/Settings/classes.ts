import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      paddingHorizontal: 12,
      paddingVertical: 28,
      alignItems: "center",
    },
    headerTitle: {
      fontSize: 28,
      color: palette.common.white,
      paddingLeft: 12,
      width: "100%",
      textAlign: "left",
      fontWeight: "700",
      paddingBottom: 18,
    },
    row: {
      width: "100%",
      flexDirection: "row",
      paddingHorizontal: 12,
      justifyContent: "space-between",
      alignItems: "center",
    },
    label: {
      color: palette.text.secondary,
    },
    activePINContainer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 18,
    },
  });
};

export default classes;
