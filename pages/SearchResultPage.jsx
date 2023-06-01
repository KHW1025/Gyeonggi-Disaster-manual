import { StyleSheet, TouchableOpacity } from "react-native";
import {
  IconButton,
  Icon,
  View,
  Input,
  Text,
  HStack,
  Image,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";

import HeaderComponent from "../components/HeaderComponent";
import { ScrollView } from "react-native-gesture-handler";

const noResult = require("../assets/no-result.png");

export default function SearchResultPage({ route, navigation }) {
  const searchValue = route.params.searchValue;
  const manual = route.params.manual;

  // 받아온 검색어를 문자열로 변경해 검색결과 변수에 담는다.
  const [searchResult, setSearchResult] = useState(searchValue.toString());

  // 결과 데이터는 빈배열로 시작
  const [resultData, setResultData] = useState([]);

  // console.log(searchValue);

  useEffect(() => {
    if (searchResult === "") {
      // 검색어가 "" 라면 결과 데이터는 빈배열
      setResultData([]);
    } else {
      // 검색어가 무언가가 있다면 검색어를 포함하는 데이터를 결과 데이터에 넣는다.
      setResultData(manual.filter((item) => item.title.includes(searchResult)));
    }
  }, [searchResult]);

  const goDetail = (Num) => {
    navigation.navigate("DetailPage", manual[Num]);
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <View position={"relative"} w={"100%"}>
        <IconButton
          icon={
            <Icon as={MaterialIcons} name="search" size="md" color={"#999"} />
          }
          position={"absolute"}
          left={1}
          top={1}
          zIndex={1}
        />
        <Input
          placeholder="궁금하신 대응 메뉴얼을 검색해주세요."
          fontSize={16}
          color={"#B0B0B0"}
          fontWeight={"bold"}
          backgroundColor={"#EFEFEF"}
          w={"100%"}
          borderRadius={10}
          borderColor={"#bebebe"}
          pl={9}
          onChangeText={(text) => {
            setSearchResult(text);
          }}
          value={searchResult}
        />
      </View>
      <HStack mt={10} pl={3} flexWrap={"wrap"}>
        {resultData.length === 0 ? (
          <View alignItems={"center"} mx={"auto"} mt={130}>
            <Image source={noResult} alt={"no result"} mb={5} />
            <Text fontSize={16}>검색 결과가 없습니다.</Text>
          </View>
        ) : (
          resultData.map((item, i) => (
            <TouchableOpacity key={i} onPress={() => goDetail(item.idx)}>
              <View
                width={100}
                height={100}
                borderWidth={1}
                borderRadius={10}
                mr={4}
                mb={5}
                alignItems={"center"}
                backgroundColor={
                  item.category === "자연재난"
                    ? "#EBF3FE"
                    : item.category === "사회재난"
                    ? "#FFEDE5"
                    : "#FFF7D8"
                }
                borderColor={
                  item.category === "자연재난"
                    ? "#b9d0f0"
                    : item.category === "사회재난"
                    ? "#f8cab7"
                    : "#f5e5a0"
                }
              >
                <View w={"60%"} h={"60%"} mt={2}>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    alt={item.title}
                  />
                </View>

                <Text mt={1}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </HStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
