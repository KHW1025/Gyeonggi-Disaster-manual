import axios from "axios";

import { ScrollView, View } from "native-base";
import { StyleSheet } from "react-native";

import { useEffect, useState } from "react";

import Loading from "./Loading";

import HeaderComponent from "../components/HeaderComponent";
import SearchInputComponent from "../components/SearchInputComponent";
import BannerComponent from "../components/BannerComponent";

import NaturalDisasterList from "../components/NaturalDisasterList";
import SocialDisasterList from "../components/SocialDisasterList";
import SafetyInLifeList from "../components/SafetyInLifeList";
import YouTubeList from "../components/YoutubeList";

const data = require("../data/DisasterManual.json");

export default function MainPage({ navigation }) {
  const manual = data.manual;

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
        q: "재난 대응 대처 대비 대피",
        // q: "재난 대처 대비 대피",
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

  // 1월은 0으로 표현되기 때문에 1을 더해준다.
  // console.log(new Date().getMonth() + 1 === 6);

  return ready ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      <View style={styles.topBox}>
        <HeaderComponent safeAreaTop navigation={navigation} />
        <SearchInputComponent navigation={navigation} manual={manual} />
        <BannerComponent navigation={navigation} manual={manual} />
      </View>

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
    // paddingHorizontal: 16,
    backgroundColor: "#fff",
    // borderWidth: 1,
  },
  topBox: {
    paddingHorizontal: 16,
  },
  banner: {
    marginTop: 25,
    marginBottom: 25,
    height: 120,
    position: "relative",
  },
});
