import YoutubePlayer from "react-native-youtube-iframe";
import React, { useState, useCallback, useRef } from "react";
import { Button, Alert } from "react-native";

import { StyleSheet, TouchableOpacity } from "react-native";
import { Image, Text, View, HStack } from "native-base";

import HeaderComponent from "../components/HeaderComponent";

export default function YouTubeDetailPage({ navigation, route }) {
  // console.log(route.params.videoData.snippet.title);
  const videoId = route.params.videoData.id.videoId;

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <HeaderComponent navigation={navigation} />
      {/* <SearchInputComponent /> */}
      <HStack mt={22} px={1} alignItems={"center"}>
        <View w={82} h={82} mb={3}>
          <Image
            source={require("../assets/watching-video.png")}
            style={{
              width: "100%",
              height: "100%",
            }}
            alt={"watching"}
          />
        </View>
        <View style={styles.speechBubble}>
          <View style={styles.triangle} />
          <View style={styles.content}>
            <Text
              fontWeight={"bold"}
              // fontSize={16}
              color={"#404452"}
              numberOfLines={3}
            >
              {route.params.videoData.snippet.title}
            </Text>
          </View>
        </View>
      </HStack>
      <View mt={22}>
        <YoutubePlayer
          height={240}
          play={playing}
          videoId={videoId}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "정지" : "재생"} onPress={togglePlaying} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
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
    bottom: 60,
    left: -15,
  },
  content: {
    backgroundColor: "#C7EBFF", // 말풍선의 색상 설정
    padding: 18,
    width: 240,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
