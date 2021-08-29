import { StyleSheet } from "react-native";

const classes = ({ palette }: any) => {
  return StyleSheet.create({
    successContainer: {
      flex: 1,
    },
    loadingContainer: {
      flex: 1,
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 24,
      paddingHorizontal: 18,
      overflow: "hidden",
    },
    contentContainer: {
      paddingVertical: 24,
    },
    contentContainerStatic: {
      paddingVertical: 24,
      paddingHorizontal: 18,
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    wrapper: {
      width: "100%",
      // flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 18,
    },
    scrollView: {
      // flex: 1,
    },
    poster: {
      marginBottom: 12,
    },
    emptyStateContainer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    emptyStateText: {
      color: palette.common.white,
      width: "80%",
      textAlign: "center",
      fontSize: 32,
      fontWeight: "700",
    },
  });
};

export default classes;
