import { View, Text } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";

import ImageBlurLoading from "react-native-image-blur-loading";

import { useEffect, useState } from "react";

import { Entypo } from "@expo/vector-icons";

const bannerBg1 = require("../assets/bannerBg1.png");
const bannerBg2 = require("../assets/bannerBg2.png");
const bannerBg3 = require("../assets/bannerBg3.png");

export default function BannerComponent({ navigation, manual }) {
  const currentMonth = new Date().getMonth() + 1;
  // const currentMonth = 1;
  const [bannerBg, setBannerBg] = useState();
  const [bannerText, setBannerText] = useState([]);
  const [bannerData, setBannerData] = useState();

  // console.log(currentMonth);

  // 계절에 따라 바뀌는 배너
  // 2~3월에는 황사, 4~8월에는 폭염, 10~1월에는 한파
  useEffect(() => {
    if (currentMonth === 2 || currentMonth === 3) {
      // console.log("황사");
      setBannerBg(bannerBg1);
      setBannerText(["미세먼지가 다가오고 있어요!", "대비책을 알아두세요"]);
      setBannerData(manual.filter((item) => item.title === "미세먼지"));
    } else if (
      currentMonth === 4 ||
      currentMonth === 5 ||
      currentMonth === 6 ||
      currentMonth === 7 ||
      currentMonth === 8
    ) {
      // console.log("폭염");
      setBannerBg(bannerBg2);
      setBannerText([
        "올해 무더위 어떻게 대처해야할까요?",
        "폭염에 대비해보세요.",
      ]);
      setBannerData(manual.filter((item) => item.title === "폭염"));
    } else if (
      currentMonth === 10 ||
      currentMonth === 11 ||
      currentMonth === 12 ||
      currentMonth === 1
    ) {
      // console.log("한파");
      setBannerBg(bannerBg3);
      setBannerText([
        "올 겨울 한파와 추위!",
        "겨울철 생활 안전하게 준비하세요.",
      ]);
      setBannerData(manual.filter((item) => item.title === "한파"));
    }
  }, []);

  goBannerDetail = () => {
    navigation.navigate("DetailPage", bannerData[0]);
  };

  // console.log(bannerText);

  return (
    <TouchableOpacity style={styles.banner} onPress={() => goBannerDetail()}>
      <ImageBlurLoading
        source={bannerBg}
        thumbnailSource={bannerBg}
        style={{ width: "100%", height: "100%", borderRadius: 12 }}
      ></ImageBlurLoading>
      <View
        position={"absolute"}
        p={25}
        flexDirection={"row"}
        justifyContent={"space-between"}
        style={{ width: "100%", height: "100%", borderRadius: 12 }}
      >
        <View justifyContent={"center"} alignItems={"flex-start"} w={"100%"}>
          <View
            flexDirection={"row"}
            justifyContent={"space-between"}
            w={"100%"}
          >
            <Text
              mb={1}
              color={"#f5f5f5"}
              alignSelf={"center"}
              fontSize={16}
              fontWeight={"bold"}
              // style={{
              //   fontFamily: "NotoSansKR-Regular",
              // }}
            >
              {bannerText[0]}
            </Text>
            <View pt={1}>
              <Entypo name="chevron-thin-right" size={20} color="white" />
            </View>
          </View>
          <Text
            color={"#f5f5f5"}
            fontSize={16}
            fontWeight={"bold"}
            // style={{
            //   fontFamily: "NotoSansKR-Regular",
            // }}
          >
            {bannerText[1]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginTop: 25,
    marginBottom: 25,
    height: 120,
    position: "relative",
  },
});
