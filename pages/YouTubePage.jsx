import { View, Text, HStack, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

import { StyleSheet, Image } from "react-native";

import HeaderComponent from "../components/HeaderComponent";

export default function YouTubePage({ navigation, route }) {
  const videoData = route.params.videoData;
  // console.log(videoData);

  // const goVideo = (Num) => {
  //   navigation.navigate("YouTubeDetailPage", videoData[Num]);
  // };
  const goVideo = (Num) => {
    navigation.replace("TabNavigator", {
      screen: "유튜브 상세",
      params: {
        videoData: videoData[Num],
      },
    });
  };

  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      <HStack mt={18} px={4} alignItems={"center"}>
        <View w={82} h={82} mb={4}>
          <Image
            source={require("../assets/talking-man.png")}
            style={{
              width: "100%",
              height: "100%",
            }}
            alt={"talking man"}
          />
        </View>
        <View style={styles.speechBubble}>
          <View style={styles.triangle} />
          <View style={styles.content}>
            <Text fontWeight={"bold"} color={"#404452"}>
              실시간 재난 관련하여 조회수가 높은 영상들입니다. 영상으로 보다
              쉽고 정확하게 알아보세요!
            </Text>
          </View>
        </View>
      </HStack>

      <HStack flexWrap={"wrap"} mt={2} paddingLeft={3}>
        {videoData.map((videoItem, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => goVideo(i)}
            style={styles.videoItem}
          >
            <View w={160} h={90} mr={3} borderRadius={10} overflow={"hidden"}>
              <Image
                source={{ uri: videoItem.snippet.thumbnails.default.url }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                alt={videoItem.snippet.title}
              />
            </View>
          </TouchableOpacity>
        ))}
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 26,
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    // borderWidth: 1,
  },
  speechBubble: {
    marginLeft: 30,
    marginTop: -8,
    // borderWidth: 1,
    position: "relative",
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#C7EBFF", // 말풍선의 색상 설정
    transform: [{ rotate: "-90deg" }],
    position: "absolute",
    bottom: 65,
    left: -15,
  },
  content: {
    backgroundColor: "#C7EBFF", // 말풍선의 색상 설정
    padding: 12,
    width: 220,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  videoItem: {
    marginBottom: 18,
  },
});
