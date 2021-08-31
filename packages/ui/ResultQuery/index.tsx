import React, { ComponentType, Dispatch, SetStateAction } from "react";
import { View, ActivityIndicator } from "react-native";
import { UseInfiniteQueryResult, UseQueryResult } from "react-query";
import useStyles from "@jobsity/hooks/useStyles";
import classes from "./classes";

interface ResultQuery<T> {
  query: UseQueryResult | UseInfiniteQueryResult;
  isInfinite?: boolean;
  setPage?: Dispatch<SetStateAction<number>>;
  Success: ComponentType<T>;
  Loading?: ComponentType<T>;
  [propName: string]: any;
}

const ResultQuery = ({
  query,
  Success,
  Loading,
  isInfinite = false,
  ...rest
}: ResultQuery<any>) => {
  const { isLoading, isError, isSuccess, data, isFetching } = query;
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
      <Success
        data={data}
        isLoading={isLoading}
        isError={isError}
        isFetching={isFetching}
        isInfinite={isInfinite}
        {...rest}
      />
    );
  }
  return <></>;
};

export default ResultQuery;
