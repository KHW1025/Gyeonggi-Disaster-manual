import { View, Text, HStack, ScrollView } from "native-base";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { StyleSheet, Image } from "react-native";

export default function YouTubeList({ videoData, navigation }) {
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
  // const goYouTubePage = () => {
  //   navigation.navigate("YouTubePage", videoData);
  // };
  const goYouTubePage = () => {
    navigation.replace("TabNavigator", {
      screen: "추천 유튜브",
      params: {
        videoData: videoData,
      },
    });
  };

  // console.log(videoData[0].snippet.thumbnails.default.url);
  return (
    <View mt={10}>
      <HStack
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={2}
        mb={1}
      >
        <HStack alignItems={"center"}>
          <View w={22} h={22}>
            <Image
              source={require("../assets/youtube-icon.png")}
              resizeMode={"cover"}
              style={styles.YTIcon}
            />
          </View>
          <Text fontSize={18} fontWeight={"bold"} ml={1}>
            요즘뜨는 유튜브
          </Text>
        </HStack>
        <TouchableOpacity
          onPress={() => {
            goYouTubePage();
          }}
        >
          <Text fontWeight={"bold"} color={"#3787FF"}>
            모두보기
          </Text>
        </TouchableOpacity>
      </HStack>
      <ScrollView
        horizontal={true}
        px={2}
        py={2}
        // borderWidth={1}
        marginBottom={50}
      >
        {videoData.map((videoItem, i) => (
          <TouchableOpacity key={i} onPress={() => goVideo(i)}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  YTIcon: {
    width: "100%",
    height: "100%",
  },
});
