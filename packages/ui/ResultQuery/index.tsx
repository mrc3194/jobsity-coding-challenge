import React, { ComponentType } from "react";
import { View, ActivityIndicator } from "react-native";
import { UseQueryResult } from "react-query";

interface Query {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error;
  data: any;
}

type ResultQuery<T> = {
  query: UseQueryResult;
  Success: ComponentType<T>;
};

const ResultQuery = ({ query, Success }: ResultQuery<any>) => {
  const { isLoading, isError, isSuccess, data } = query;
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }
  if (isSuccess) {
    return <Success data={data} />;
  }
  return <></>;
};

export default ResultQuery;
