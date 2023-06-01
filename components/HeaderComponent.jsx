import React from "react";

import { HStack, Text, Box, StatusBar } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HeaderComponent({ navigation }) {
  // const goMain = () => {
  //   navigation.navigate("TabNavigator");
  // };
  const goMain = () => {
    navigation.navigate("TabNavigator", { screen: "홈" });
  };

  return (
    <>
      <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
      <Box safeAreaTop />
      <HStack
        pl="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <TouchableOpacity onPress={() => goMain()}>
          <HStack alignItems="center">
            <Text
              color={"#002F76"}
              fontSize={29}
              mr={1}
              style={{
                fontFamily: "DoHyeon-Regular",
              }}
            >
              경기도민
            </Text>
            <Text
              color={"#3787FF"}
              fontSize={29}
              style={{
                fontFamily: "DoHyeon-Regular",
              }}
            >
              재난안전키트
            </Text>
          </HStack>
        </TouchableOpacity>
        {/* <HStack>
          <Button backgroundColor={"transparent"}>
            <Text>지역설정</Text>
          </Button>
        </HStack> */}
      </HStack>
    </>
  );
}
