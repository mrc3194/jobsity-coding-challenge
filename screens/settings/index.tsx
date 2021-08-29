import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import Settings from "../../components/Settings";

// props navigation params
const SettingsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "pink" }}>
      <Settings />
    </SafeAreaView>
  );
};

export default SettingsScreen;
