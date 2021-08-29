import { StyleSheet } from "react-native";

const classes = ({ palette }: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#222",
      alignItems: "center",
    },
    contentContaienr: {
      flex: 1,
      width: "100%",
    },
    headerTitle: {
      color: palette.common.white,
      fontSize: 28,
      fontWeight: "700",
      marginTop: 18,
      marginBottom: 12,
      paddingLeft: 18,
    },
  });
};

export default classes;
