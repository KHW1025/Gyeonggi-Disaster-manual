import { Linking } from "react-native";

import { View, Text, HStack, ScrollView } from "native-base";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HeaderComponent from "../components/HeaderComponent";

export default function EmergencyPage({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <View mt={18}>
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={18} fontWeight={"bold"} ml={1}>
            긴급전화
          </Text>
          <Text
            style={{
              transform: [{ rotate: "15deg" }],
              fontSize: 16,
              color: "#000000",
              marginTop: 4,
            }}
          >
            Click!
          </Text>
        </HStack>
        <View mt={2}>
          <TouchableOpacity
            style={styles.emergency}
            onPress={() => {
              Linking.openURL(`tel: 112`);
            }}
          >
            <HStack
              h={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
              px={2}
            >
              <HStack alignItems={"center"}>
                <View
                  w={55}
                  h={55}
                  backgroundColor={"#f31f1f"}
                  borderRadius={50}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <MaterialCommunityIcons
                    name="police-badge-outline"
                    size={32}
                    color="#eeeeee"
                  />
                </View>
                <Text
                  ml={2}
                  fontSize={20}
                  fontWeight={"bold"}
                  color={"#292929"}
                >
                  긴급범죄 신고
                </Text>
              </HStack>
              <Text fontSize={28} fontWeight={"bold"} color={"#f31f1f"}>
                112
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.emergency}
            onPress={() => {
              Linking.openURL(`tel: 119`);
            }}
          >
            <HStack
              h={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
              px={2}
            >
              <HStack alignItems={"center"}>
                <View
                  w={55}
                  h={55}
                  backgroundColor={"#f31f1f"}
                  borderRadius={50}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <SimpleLineIcons name="fire" size={32} color="#eeeeee" />
                </View>
                <Text
                  ml={2}
                  fontSize={20}
                  fontWeight={"bold"}
                  color={"#292929"}
                >
                  화재 · 구조 · 구급 신고
                </Text>
              </HStack>
              <Text fontSize={28} fontWeight={"bold"} color={"#f31f1f"}>
                119
              </Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.emergency}
            onPress={() => {
              Linking.openURL(`tel: 110`);
            }}
          >
            <HStack
              h={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
              px={2}
            >
              <HStack alignItems={"center"}>
                <View
                  w={55}
                  h={55}
                  backgroundColor={"#24b410"}
                  borderRadius={50}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Ionicons name="ios-call-outline" size={32} color="#eeeeee" />
                </View>
                <Text
                  ml={2}
                  fontSize={20}
                  fontWeight={"bold"}
                  color={"#292929"}
                >
                  그 외 모든 민원상담
                </Text>
              </HStack>
              <Text fontSize={28} fontWeight={"bold"} color={"#24b410"}>
                110
              </Text>
            </HStack>
          </TouchableOpacity>
        </View>
        <View mt={3}>
          <Text fontSize={18} fontWeight={"bold"} ml={1}>
            추천어플
          </Text>
          <View
            mt={2}
            borderWidth={2}
            borderRadius={12}
            // borderColor={"#aaaaaa"}
            borderColor={"#BCBCBC"}
            p={4}
            backgroundColor={"#f7f7f7"}
          >
            <Text>[안전신문고]</Text>
            <Text color={"#4b4b4b"}>
              생활속의 안전 위험요인 제거를 위한 간편신고
            </Text>
            <Text mt={3}>[119 신고]</Text>
            <Text color={"#4b4b4b"}>
              신고자가 최소한의 동작으로 119신고 메세지를 전송
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  emergency: {
    borderWidth: 2,
    height: 90,
    marginBottom: 20,
    borderRadius: 12,
    padding: 4,
    // borderColor: "#b6b6b6",
    borderColor: "#BCBCBC",
    backgroundColor: "#f7f7f7",
  },
});
