import axios from "axios";

import { ScrollView, View, IconButton, Text } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";

import ImageBlurLoading from "react-native-image-blur-loading";

import { useEffect, useState } from "react";

import { Entypo } from "@expo/vector-icons";

import Loading from "./Loading";

import HeaderComponent from "../components/HeaderComponent";
import SearchInputComponent from "../components/SearchInputComponent";

import NaturalDisasterList from "../components/NaturalDisasterList";
import SocialDisasterList from "../components/SocialDisasterList";
import SafetyInLifeList from "../components/SafetyInLifeList";
import YouTubeList from "../components/YoutubeList";

const data = require("../data/DisasterManual.json");

const bannerBg = require("../assets/bannerBg.png");

export default function MainPage({ navigation }) {
  const [manual, setManual] = useState(data.manual);
  const [videoData, setVideoData] = useState([]);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    // 유튜브 영상 정보 불러오기
    const fetchVideoData = async () => {
      const apiKey = "AIzaSyDoP61weM6Q0GB60668f03w6lglCb_Btfc";

      const url = "https://www.googleapis.com/youtube/v3/search";
      const params = {
        key: apiKey,
        part: "snippet",
        maxResults: 8,
        q: "재난 대처 대비 대피",
        type: "video",
      };
      try {
        const response = await axios.get(url, { params });
        const videoItems = response.data.items;
        setVideoData(videoItems);
      } catch (error) {
        console.log(error);
      } finally {
        setReady(false);
      }
    };
    // setManual(data.manual);

    setTimeout(() => {
      fetchVideoData(videoData);
    }, 1000);
  }, []);

  // console.log(videoData);

  //배너 정보
  const banner = manual.filter((item) => item.title === "폭염");
  // console.log(banner[0]);

  goBannerDetail = () => {
    navigation.navigate("DetailPage", banner[0]);
  };

  return ready ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      <HeaderComponent safeAreaTop navigation={navigation} />

      <SearchInputComponent navigation={navigation} manual={manual} />

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
          <View justifyContent={"center"}>
            <View
              flexDirection={"row"}
              justifyContent={"space-between"}
              w={"94%"}
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
                올해 무더위 어떻게 대처해야할까요?
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
              폭염에 대비해보세요.
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <NaturalDisasterList
        manual={manual.filter((item) => item.category === "자연재난")}
        navigation={navigation}
      />

      <SocialDisasterList
        manual={manual.filter((item) => item.category === "사회재난")}
        navigation={navigation}
      />

      <SafetyInLifeList
        manual={manual.filter((item) => item.category === "생활안전")}
        navigation={navigation}
      />

      <YouTubeList videoData={videoData} navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 26,
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    // borderWidth: 1,
  },
  banner: {
    marginTop: 25,
    marginBottom: 25,
    height: 120,
    position: "relative",
  },
});
