import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ThemeProvider from "@jobsity/common/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";
import NavigationStack from "./navigation";
import SavedSeriesProvider from "@jobsity/common/SavedSeriesContext";
import AuthProvider from "@jobsity/common/AuthContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SavedSeriesProvider>
          <ThemeProvider>
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
