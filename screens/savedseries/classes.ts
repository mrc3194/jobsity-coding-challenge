import { StyleSheet } from "react-native";

const classes = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    containerView: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 12,
    },
    headerTitle: {
      color: "white",
      fontSize: 20,
      fontWeight: "700",
    },
    switchContainer: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    switchLabel: {
      color: "white",
      marginRight: 8,
    },
  });
};

export default classes;
