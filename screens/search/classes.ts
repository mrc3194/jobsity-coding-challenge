import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 16,
      width: "100%",
      backgroundColor: palette.main.secondary,
      alignItems: "center",
    },
    contentContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    scrollView: {
      width: "100%",
      flex: 1,
    },
    headerTitle: {
      color: palette.common.white,
      fontSize: 28,
      fontWeight: "700",
      marginTop: 18,
      marginBottom: 12,
      paddingLeft: 18,
    },
    firstSearchContainer: {
      width: "80%",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    firstSearchText: {
      textAlign: "center",
      width: "100%",
      maxWidth: "100%",
      color: palette.text.primary,
      fontSize: 28,
    },
    searchContainer: {
      width: "100%",
      paddingBottom: 12,
      paddingHorizontal: 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    cancelText: {
      color: palette.main.accent,
      fontSize: 16,
    },
  });
};

export default classes;
