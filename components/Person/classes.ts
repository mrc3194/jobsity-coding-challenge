import { StyleSheet } from "react-native";

const classes = ({ screenHeight, palette }: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#222",
    },
    posterContainer: {
      width: "100%",
      height: "50%",
      backgroundColor: "red",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    poster: {
      position: "absolute",
      top: 0,
      left: 0,
    },
    flatListContainer: {
      flex: 1,
      width: "100%",
    },
    noSeriesListedContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    noSeriesText: {
      color: palette.common.white,
      fontSize: 24,
      width: "90%",
      textAlign: "center",
    },
    flatList: {
      paddingTop: 12,
      paddingLeft: 12,
    },
    flatListStyle: {
      flex: 1,
    },
    linearGradient: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
    seriesContainer: {
      width: "94%",
      paddingVertical: 18,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginBottom: 8,
      backgroundColor: palette.common.black,
    },
    seriesText: {
      color: palette.common.white,
    },
    seriesInfo: {
      width: "100%",
      height: "45%",
      padding: 12,
      justifyContent: "flex-end",
      alignItems: "flex-start",
    },
    seriesInfoContainer: {
      width: "100%",
    },
    seriesTitle: {
      color: palette.common.white,
      fontSize: 22,
      fontWeight: "700",
      width: "80%",
    },
    seriesSeason: {
      marginTop: 4,
      color: palette.common.white,
    },
    seriesDates: {
      color: palette.common.white,
      marginTop: 8,
    },
    summary: {
      color: palette.common.white,
      marginTop: 12,
    },
  });
};

export default classes;
