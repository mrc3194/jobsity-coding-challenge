import React, { useState } from "react";
import useInfiniteScrollSettings from "@jobsity/hooks/useInfiniteScrollSettings";
import InfiniteScroll from "./InfiniteScroll";
import Pagination from "./Pagination";

const HomeScreen = () => {
  const { infiniteScrollActive } = useInfiniteScrollSettings();
  if (infiniteScrollActive) {
    return <InfiniteScroll />;
  }
  return <Pagination />;
};

export default HomeScreen;
