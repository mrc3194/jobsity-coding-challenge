import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, LogBox } from "react-native";
import ThemeProvider from "@jobsity/common/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";
import NavigationStack from "./navigation";
import SavedSeriesProvider from "@jobsity/common/SavedSeriesContext";
import AuthProvider from "@jobsity/common/AuthContext";

const queryClient = new QueryClient();

LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SavedSeriesProvider>
          <ThemeProvider>
            <StatusBar style="light" translucent />
            <NavigationStack />
          </ThemeProvider>
        </SavedSeriesProvider>
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
