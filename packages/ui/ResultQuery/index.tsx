import React, { ComponentType } from "react";
import { View, ActivityIndicator } from "react-native";
import { UseQueryResult } from "react-query";

type ResultQuery<T> = {
  query: UseQueryResult;
  Success: ComponentType<T>;
  Loading?: ComponentType<T>;
};

const ResultQuery = ({ query, Success, Loading }: ResultQuery<any>) => {
  const { isLoading, isError, isSuccess, data } = query;
  if (isLoading) {
    if (Loading) {
      return <Loading data={data} isLoading={isLoading} isError={isError} />;
    }
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }
  if (isSuccess) {
    return <Success data={data} isLoading={isLoading} isError={isError} />;
  }
  return <></>;
};

export default ResultQuery;
