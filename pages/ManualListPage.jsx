import { StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView, Image, Text, View } from "native-base";

import HeaderComponent from "../components/HeaderComponent";
import SearchInputComponent from "../components/SearchInputComponent";
import Loading from "./Loading";

// import data from "../data/DisasterManual";

const data = require("../data/DisasterManual.json");

import { useState } from "react";
import { useEffect } from "react";
// import { set } from "react-native-reanimated";

export default function ManualListPage({ navigation, route }) {
  const [cate, setCate] = useState("자연재난");
  const [manual, setManual] = useState(
    data.manual.filter((item) => item.category === "자연재난")
  );
  const [ready, setReady] = useState(true);

  // 각 사고 카테고리별 데이터
  const NaturalDisasterList = data.manual.filter(
    (item) => item.category === "자연재난"
  );
  const SocialDisasterList = data.manual.filter(
    (item) => item.category === "사회재난"
  );
  const SafetyInLifeList = data.manual.filter(
    (item) => item.category === "생활안전"
  );

  // console.log(route.params === undefined);

  useEffect(() => {
    if (route.params === undefined) {
      setCate("자연재난");
      setManual(NaturalDisasterList);
    } else {
      setCate(route.params.category);
      setManual(
        data.manual.filter((item) => item.category === route.params.category)
      );
    }

    setReady(false);
  }, [setCate]);

  // 카드를 누르면 디테일 페이지로 이동
  const goDetail = (Num) => {
    navigation.navigate("DetailPage", manual[Num]);
  };

  return ready ? (
    <Loading />
  ) : (
    <ScrollView backgroundColor={"#ffffff"}>
      <View style={styles.container}>
        <HeaderComponent navigation={navigation} />
        <SearchInputComponent navigation={navigation} manual={data.manual} />

        <View mt={30} flexDirection={"row"} justifyContent={"center"}>
          <TouchableOpacity
            style={[styles.tabBtn, cate === "자연재난" ? styles.tabBtnOn1 : ""]}
            onPress={() => {
              setCate("자연재난");
              setManual(NaturalDisasterList);
            }}
            // onPress={() => handleTabPress("자연재난")}
          >
            <Text
              style={[
                styles.tabTxt,
                cate === "자연재난" ? styles.tabTxtOn : "",
              ]}
            >
              자연재난
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, cate === "사회재난" ? styles.tabBtnOn2 : ""]}
            onPress={() => {
              setCate("사회재난");
              setManual(SocialDisasterList);
            }}
          >
            <Text
              style={[
                styles.tabTxt,
                cate === "사회재난" ? styles.tabTxtOn : "",
              ]}
            >
              사회재난
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, cate === "생활안전" ? styles.tabBtnOn3 : ""]}
            onPress={() => {
              setCate("생활안전");
              setManual(SafetyInLifeList);
            }}
          >
            <Text
              style={[
                styles.tabTxt,
                cate === "생활안전" ? styles.tabTxtOn : "",
              ]}
            >
              생활안전
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        // borderWidth={1}
        mt={8}
        flexDirection={"row"}
        flexWrap={"wrap"}
        pl={7}
        backgroundColor={"#ffffff"}
        height={"100%"}
      >
        {manual.map((item, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => goDetail(i)}>
              <View
                backgroundColor={
                  cate === "자연재난"
                    ? "#EBF3FE"
                    : cate === "사회재난"
                    ? "#FFEDE5"
                    : "#FFF7D8"
                }
                w={100}
                h={100}
                mr={5}
                mb={5}
                borderRadius={10}
                borderWidth={1}
                borderColor={
                  cate === "자연재난"
                    ? "#b9d0f0"
                    : cate === "사회재난"
                    ? "#f8cab7"
                    : "#f5e5a0"
                }
                alignItems={"center"}
                style={styles.card}
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
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  tabBtn: {
    // borderWidth: 1,
    width: "30%",
    alignItems: "center",
    marginHorizontal: 8,
    borderRadius: 16,
    paddingVertical: 10,
  },
  tabBtnOn1: {
    backgroundColor: "#3781EF",
  },
  tabBtnOn2: {
    backgroundColor: "#EA6B33",
  },
  tabBtnOn3: {
    backgroundColor: "#E9C841",
  },
  tabTxt: {
    color: "#B7B7B7",
    fontWeight: "bold",
  },
  tabTxtOn: {
    color: "#ffffff",
  },
});
