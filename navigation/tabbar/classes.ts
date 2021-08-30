import { StyleSheet } from "react-native";
import { CustomStyleSheetProps } from "@jobsity/common/types/styles";

const classes = ({ isAndroid, palette }: CustomStyleSheetProps) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: isAndroid ? 60 : 70,
      backgroundColor: palette.main.primary,
    },
    navigatorItem: {
      flex: 1,
      height: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    itemContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    itemText: {
      color: palette.text.primary,
      marginTop: 4,
    },
    pressableContainer: {
      flex: 1,
      width: "100%",
      height: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: 8,
    },
  });
};

export default classes;
