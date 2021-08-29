import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.main.secondary,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: "800",
      color: palette.text.primary,
      paddingLeft: 12,
      paddingVertical: 18,
    },
  });
};

export default classes;
