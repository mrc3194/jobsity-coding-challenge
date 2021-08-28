import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useFetchSeries } from "./packages/common/queries";

const RootComponent = () => {
  const [page, setPage] = useState<number>(0);
  const query = useFetchSeries(page);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Current Page {page}</Text>
      {query.data && <Text>Length {query.data.length}</Text>}
      <Button
        title="Next"
        onPress={() => setPage((prevPage) => prevPage + 1)}
      />
    </View>
  );
};

export default RootComponent;
