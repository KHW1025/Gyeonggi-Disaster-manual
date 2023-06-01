import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";
import SearchResultPage from "../pages/SearchResultPage";
import DetailPage from "../pages/DetailPage";
import ManualListPage from "../pages/ManualListPage";
import YouTubePage from "../pages/YouTubePage";
import YouTubeDetailPage from "../pages/YouTubeDetailPage";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 80,
          backgroundColor: "transparent",
          elevation: 0,
        },
        headerTintColor: "#333",
        headerBackTitleVisible: false,
        // 헤더숨기기
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="ManualListPage" component={ManualListPage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name="YouTubePage" component={YouTubePage} />
      <Stack.Screen name="YouTubeDetailPage" component={YouTubeDetailPage} />
      <Stack.Screen name="SearchResultPage" component={SearchResultPage} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
