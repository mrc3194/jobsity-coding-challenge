import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ screenHeight, palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.main.secondary,
    },
    posterContainer: {
      width: "100%",
      height: screenHeight * 0.6,
      backgroundColor: palette.main.accent,
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
      backgroundColor: palette.main.primary,
    },
    day: {
      color: palette.text.primary,
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
    saveButtonContainer: {
      position: "absolute",
      bottom: 12,
      right: 12,
    },
    noImageContainer: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
  });
};

export default classes;
