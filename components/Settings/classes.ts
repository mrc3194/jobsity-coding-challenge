import { StyleSheet } from "react-native";

const classes = ({ palette }: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
    },
    headerTitle: {
      fontSize: 22,
      color: palette.common.white,
      paddingLeft: 12,
    },
  });
};

export default classes;
