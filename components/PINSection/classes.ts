import { StyleSheet } from "react-native";

const classes = ({ palette }: any) => {
  return StyleSheet.create({
    container: {
      width: "80%",
      paddingVertical: 20,
      borderRadius: 8,
      backgroundColor: palette.common.white,
    },
    pinContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 18,
    },
    numberBox: {
      width: 50,
      height: 50,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: "gray",
      backgroundColor: "#ddd",
    },
    number: {
      color: palette.common.black,
      fontSize: 24,
    },
    textInput: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      opacity: 0,
    },
  });
};

export default classes;
