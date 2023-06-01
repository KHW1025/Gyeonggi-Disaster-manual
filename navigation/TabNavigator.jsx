import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import MainPage from "../pages/MainPage";
import MapPage from "../pages/MapPage";
import MessagePage from "../pages/MessagePage";
import EmergencyPage from "../pages/EmergencyPage";
import ManualListPage from "../pages/ManualListPage";
import YouTubePage from "../pages/YouTubePage";
import YouTubeDetailPage from "../pages/YouTubeDetailPage";
import SearchResultPage from "../pages/SearchResultPage";
// import Intro from "../pages/Intro";

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {
  const renderTabBarIcon = (route, focused) => {
    let iconName = focused ? "#257CFF" : "#686868";
    let barComponent = null;

    if (route.name === "홈") {
      iconName = "home";
      barComponent = focused && (
        <View
          style={{
            position: "absolute",
            top: -10,
            width: "50%",
            height: 3,
            backgroundColor: "#257CFF",
          }}
        />
      );
    } else if (route.name === "안전지도") {
      iconName = "map";
      barComponent = focused && (
        <View
          style={{
            position: "absolute",
            top: -10,
            width: "50%",
            height: 3,
            backgroundColor: "#257CFF",
          }}
        />
      );
    } else if (route.name === "재난문자") {
      iconName = "mail-unread-sharp";
      barComponent = focused && (
        <View
          style={{
            position: "absolute",
            top: -10,
            width: "50%",
            height: 3,
            backgroundColor: "#257CFF",
          }}
        />
      );
    } else if (route.name === "긴급전화") {
      iconName = "md-call-sharp";
      barComponent = focused && (
        <View
          style={{
            position: "absolute",
            top: -10,
            width: "50%",
            height: 3,
            backgroundColor: "#257CFF",
          }}
        />
      );
    }

    return (
      <View alignItems="center">
        {barComponent}
        <Ionicons
          name={iconName}
          color={focused ? "#257CFF" : "#686868"}
          size={26}
        />
      </View>
    );
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => renderTabBarIcon(route, focused),
        headerShown: false,
        tabBarStyle: {
          display: "flex",
          borderTopColor: "#C3C3C3",
          borderTopWidth: 1,
          height: 70,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tabs.Screen name="홈" component={MainPage} />
      <Tabs.Screen name="안전지도" component={MapPage} />
      <Tabs.Screen name="재난문자" component={MessagePage} />
      <Tabs.Screen name="긴급전화" component={EmergencyPage} />
      <Tabs.Screen
        name="대응 메뉴얼"
        component={ManualListPage}
        options={{ tabBarButton: () => null, tabBarVisible: false }}
      />
      <Tabs.Screen
        name="추천 유튜브"
        component={YouTubePage}
        options={{ tabBarButton: () => null, tabBarVisible: false }}
      />
      <Tabs.Screen
        name="유튜브 상세"
        component={YouTubeDetailPage}
        options={{ tabBarButton: () => null, tabBarVisible: false }}
      />
      <Tabs.Screen
        name="검색결과"
        component={SearchResultPage}
        options={{ tabBarButton: () => null, tabBarVisible: false }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
