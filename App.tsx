import React, { useEffect, useState } from "react";
import { Button, StyleSheet, StatusBar, LogBox } from "react-native";
import ThemeProvider from "@jobsity/common/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";
import NavigationStack from "./navigation";
import SavedSeriesProvider from "@jobsity/common/SavedSeriesContext";
import AuthProvider from "@jobsity/common/AuthContext";
import InfiniteScrollSettingsProvider from "@jobsity/common/InfiniteSettingsContext";

const queryClient = new QueryClient();

LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <InfiniteScrollSettingsProvider>
          <SavedSeriesProvider>
            <ThemeProvider>
              <NavigationStack />
              <StatusBar barStyle="light-content" />
            </ThemeProvider>
          </SavedSeriesProvider>
        </InfiniteScrollSettingsProvider>
      </AuthProvider>
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
