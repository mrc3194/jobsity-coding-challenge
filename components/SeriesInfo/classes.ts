import { StyleSheet } from "react-native";

const classes = ({ screenHeight, palette }: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#222",
    },
    posterContainer: {
      width: "100%",
      height: screenHeight * 0.6,
      backgroundColor: "red",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    poster: {
      position: "absolute",
      top: 0,
      left: 0,
    },
    linearGradient: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
    seriesInfo: {
      width: "100%",
      height: "30%",
      padding: 12,
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    seriesTitle: {
      color: palette.common.white,
      fontSize: 22,
      fontWeight: "700",
      width: "80%",
    },
    daysContainer: {
      width: "100%",
      paddingVertical: 12,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    dayContainer: {
      borderRadius: 1000,
      paddingHorizontal: 12,
      paddingVertical: 4,
      marginRight: 6,
      backgroundColor: palette.common.white,
    },
    day: {
      color: palette.common.black,
      fontSize: 13,
    },
    seriesDates: {
      color: palette.common.white,
      fontSize: 16,
      fontWeight: "500",
    },
    genresContentContainer: {
      width: "100%",
      paddingVertical: 12,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingHorizontal: 12,
    },
    genresScrollViewContainer: {
      width: "100%",
    },
    headerText: {
      color: palette.common.white,
      fontSize: 20,
      fontWeight: "700",
      paddingLeft: 12,
      marginTop: 18,
      marginBottom: 4,
    },
    summary: {
      width: "100%",
      paddingHorizontal: 12,
      color: palette.common.white,
    },
  });
};

export default classes;
