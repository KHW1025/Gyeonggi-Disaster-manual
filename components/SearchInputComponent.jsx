import { StyleSheet, TouchableOpacity } from "react-native";
import { IconButton, Icon, View, Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function SearchInputComponent({ navigation, manual }) {
  const [searchValue, setSearchValue] = useState("");

  const goSearchResult = () => {
    navigation.replace("TabNavigator", {
      screen: "검색결과",
      params: {
        searchValue: searchValue,
        manual: manual,
      },
    });
  };

  return (
    <View position={"relative"} w={"100%"}>
      <IconButton
        icon={
          <Icon as={MaterialIcons} name="search" size="md" color={"#999"} />
        }
        position={"absolute"}
        left={1}
        top={1}
        zIndex={1}
        onPress={() => goSearchResult()}
      />
      <Input
        placeholder="궁금하신 대응 메뉴얼을 검색해주세요."
        fontSize={16}
        color={"#B0B0B0"}
        fontWeight={"bold"}
        // color={"#8f8f8f"}
        backgroundColor={"#EFEFEF"}
        w={"100%"}
        borderRadius={10}
        borderColor={"#bebebe"}
        pl={9}
        onChangeText={(text) => setSearchValue(text)}
        onSubmitEditing={() => goSearchResult()}
      />
    </View>
  );
}
