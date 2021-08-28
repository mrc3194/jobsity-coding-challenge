import React from "react";
import { Text, View } from "react-native";

const Success = ({ data }: any) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default Success;
