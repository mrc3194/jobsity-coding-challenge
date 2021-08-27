import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ThemeProvider from "@jobsity/common/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";
import RootComponent from "./RootComponent";
import SearchScreen from "./screens/search";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SearchScreen />
        {/* <RootComponent /> */}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
