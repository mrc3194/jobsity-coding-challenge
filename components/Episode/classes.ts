import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ screenHeight, palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: palette.main.primary,
    },
    posterContainer: {
      width: "100%",
      height: "100%",
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
      backgroundColor: palette.common.black,
      opacity: 0.7,
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
    backButtonContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      padding: 12,
      paddingVertical: 18,
    },
    backButton: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    backButtonText: {
      color: palette.text.primary,
      marginLeft: 4,
    },
  });
};

export default classes;
