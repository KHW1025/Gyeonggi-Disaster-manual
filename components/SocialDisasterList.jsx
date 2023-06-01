import { View, ScrollView, HStack, Image } from "native-base";
import { Text } from "native-base";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useEffect } from "react";

export default function SocialDisasterList({ navigation, manual }) {
  // 모두보기를 누르면 재난메뉴얼 리스트 페이지로 이동
  // const goList = () => {
  //   navigation.navigate("ManualListPage", manual);
  // };
  const goList = () => {
    navigation.replace("TabNavigator", {
      screen: "대응 메뉴얼",
      params: {
        category: "사회재난",
      },
    });
  };

  // 카드를 누르면 디테일 페이지로 이동
  const goDetail = (Num) => {
    navigation.navigate("DetailPage", manual[Num]);
  };

  return (
    <View mt={10}>
      <HStack
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={2}
        mb={1}
      >
        <Text fontSize={18} fontWeight={"bold"}>
          사회재난
        </Text>
        <TouchableOpacity onPress={() => goList()}>
          <Text fontWeight={"bold"} color={"#3787FF"}>
            모두보기
          </Text>
        </TouchableOpacity>
      </HStack>

      <ScrollView horizontal={true} px={2} py={2}>
        {manual.map((item, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => goDetail(i)}>
              <View
                backgroundColor={"#FFEDE5"}
                w={125}
                h={125}
                mr={3}
                borderRadius={10}
                borderWidth={1}
                // borderWidth={2}
                borderColor={"#eed0c3"}
                alignItems={"center"}
                style={styles.card}
              >
                <View w={"58%"} h={"58%"} mt={3}>
                  <Image
                    // source={item.image}
                    source={{ uri: item.image }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    alt={item.title}
                  />
                </View>

                <Text mt={2} fontSize={16}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  naturalImg: {
    width: "100%",
    height: "100%",
  },
});
