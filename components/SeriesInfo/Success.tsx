import React from "react";
import { Text, View } from "react-native";
import { useEpisodes } from "@jobsity/common/queries";
import Episodes from "../Episodes";

const Success = ({ data, showId }: any) => {
  const query = useEpisodes(showId);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>id del show: {showId}</Text>
      {/* {data && <Text style={{ color: "white" }}>{JSON.stringify(data)}</Text>} */}
      <Episodes query={query} />
    </View>
  );
};

export default Success;
