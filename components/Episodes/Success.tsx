import React, { useMemo, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Success = ({ data }: any) => {
  const [currentSeason, setCurrentSeason] = useState<number>(0);
  const seasonArray = useMemo(() => data[currentSeason], [currentSeason, data]);
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%", height: 50 }}>
        <ScrollView
          horizontal
          style={{
            flex: 1,
            borderWidth: 2,
            borderColor: "white",
          }}
        >
          {data.map((season: any, index: number) => {
            console.log(season.season);
            return (
              <TouchableOpacity
                style={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 18,
                }}
                onPress={() => setCurrentSeason(index)}
              >
                <Text style={{ color: "white" }}>Season {season.season}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <Text style={{ color: "white" }}>
        Season: {seasonArray.season} | {seasonArray.episodes.length}
      </Text>
    </View>
  );
};

export default Success;
