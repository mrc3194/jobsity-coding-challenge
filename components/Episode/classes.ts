import { StyleSheet } from "react-native";

const classes = ({ screenHeight, palette }: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#222",
    },
    posterContainer: {
      width: "100%",
      height: "100%",
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
