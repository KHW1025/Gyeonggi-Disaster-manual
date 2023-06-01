import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";

// expo-font 라이브러리를 사용하여 폰트를 로드합니다.
import * as Font from "expo-font";

import { Ionicons } from "@expo/vector-icons";

import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
import Intro from "./pages/Intro";

export default function App() {
  const [ready, setReady] = useState(false);

  const loadFont = () => {
    setTimeout(async () => {
      await Font.loadAsync({
        "DoHyeon-Regular": require("./assets/font/DoHyeon-Regular.ttf"),
        "NotoSansKR-Regular": require("./assets/font/NotoSansKR-Regular.otf"),
        ...Ionicons.font,
      });
      setReady(true);
    }, 3000);
  };

  useEffect(() => {
    loadFont();
  }, []);

  return ready ? (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  ) : (
    // <Intro />
    <NativeBaseProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Intro />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
