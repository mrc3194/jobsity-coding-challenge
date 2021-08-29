import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({
  screenWidth,
  screenHeight,
  palette,
}: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      width: screenWidth * 0.44,
      height: screenHeight * 0.34,
      backgroundColor: palette.common.white,
      borderRadius: 12,
      overflow: "hidden",
    },
    loadingContainer: {
      backgroundColor: "gray",
    },
    imageContainer: {
      width: "100%",
      height: "78%",
      backgroundColor: palette.input.backgroundColor,
    },
    image: {
      width: "100%",
      height: "100%",
    },

    titleContainer: {
      width: "100%",
      height: "22%",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingHorizontal: 8,
    },
    titleContainerWithSaveOption: {
      width: "100%",
      height: "22%",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 8,
      flexDirection: "row",
    },
    title: {
      fontSize: 14,
      fontWeight: "600",
      color: palette.common.black,
    },
  });
};

export default classes;
