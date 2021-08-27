import { StyleSheet } from "react-native";

// change this type
// create typing for this
const classes = ({ palette }: any) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      height: 42,
      borderRadius: 8,
      backgroundColor: palette.input.backgroundColor,
      flexDirection: "row",
    },
    textInput: {
      width: "100%",
      height: "100%",
      paddingLeft: 6,
    },
    iconContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: 30,
    },
  });
};

export default classes;
