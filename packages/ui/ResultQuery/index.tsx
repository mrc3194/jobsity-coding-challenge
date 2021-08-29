import React, { ComponentType } from "react";
import { View, ActivityIndicator } from "react-native";
import { UseQueryResult } from "react-query";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

interface ResultQuery<T> {
  query: UseQueryResult;
  Success: ComponentType<T>;
  Loading?: ComponentType<T>;
  [propName: string]: any;
}

const ResultQuery = ({
  query,
  Success,
  Loading,
  ...rest
}: ResultQuery<any>) => {
  const { isLoading, isError, isSuccess, data } = query;
  const styles = useStyles(classes);
  if (isLoading) {
    if (Loading) {
      return <Loading data={data} isLoading={isLoading} isError={isError} />;
    }
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="white" size="large" />
      </View>
    );
  }
  if (isSuccess) {
    return (
      <Success data={data} isLoading={isLoading} isError={isError} {...rest} />
    );
  }
  return <></>;
};

export default ResultQuery;
