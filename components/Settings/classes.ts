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
      fontSize: 22,
      color: palette.common.white,
      paddingLeft: 12,
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
