import axios from "axios";

import { View, Text, HStack, ScrollView } from "native-base";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { StyleSheet, Image } from "react-native";

import Loading from "./Loading";
import HeaderComponent from "../components/HeaderComponent";

export default function MessagePage({ navigation }) {
  const [messageData, setMessageData] = useState([]);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://apis.data.go.kr/1741000/DisasterMsg3/getDisasterMsg1List";
      const serviceKey =
        "ryp/M+lh98bgYfqq4n3cGcMSYHyEHXtPY9JePWZ8z0dr5A/MJe7I00ybr85YDG88VCw7Lq1f+ZIGZLxnq86EWg==";
      const params = {
        serviceKey,
        type: "json",
        pageNo: "1",
        numOfRows: "50",
      };

      try {
        const response = await axios.get(url, { params });
        const responseData = response.data;
        // 데이터 가공 또는 필요한 처리 수행
        setMessageData(responseData.DisasterMsg[1].row);
      } catch (error) {
        console.log(error);
      } finally {
        setReady(false);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  // 이제 여기서 location_name이 경기를 포함하는 데이터만을 가공 -> 출력
  const messageFiltering = messageData.filter((item) =>
    item.location_name.includes("경기")
  );
  // console.log(messageFiltering[1]);

  return ready ? (
    <Loading />
  ) : (
    <ScrollView style={styles.container}>
      <HeaderComponent navigation={navigation} />

      <HStack mt={18} mb={3} pr={4} alignItems={"center"}>
        <View w={82} h={82} mb={6}>
          <Image
            source={require("../assets/message.png")}
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
            <Text fontWeight={"bold"} color={"#404452"} fontSize={16}>
              최근 경기 지역 기반으로
            </Text>
            <Text fontWeight={"bold"} color={"#404452"} fontSize={16}>
              송출된 재난문자 현황입니다.
            </Text>
          </View>
        </View>
      </HStack>
      <View>
        {messageFiltering.map((item, i) => (
          <View
            borderWidth={2}
            key={i}
            px={5}
            h={125}
            justifyContent={"center"}
            // borderColor={"#aaaaaa"}
            borderColor={"#BCBCBC"}
            borderRadius={16}
            // backgroundColor={"#f0f0f0"}
            backgroundColor={"#f7f7f7"}
            mb={4}
          >
            <HStack
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={1}
            >
              <Text fontSize={16}>[{item.msg.split("]")[0].slice(1)}]</Text>
              <Text color={"#646464"} mr={1}>
                {item.create_date}
              </Text>
            </HStack>
            <Text numberOfLines={3}>{item.msg.split("]")[1].trim()}</Text>
          </View>
        ))}
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
  speechBubble: {
    marginLeft: 20,
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
    bottom: 55,
    left: -15,
  },
  content: {
    backgroundColor: "#C7EBFF", // 말풍선의 색상 설정
    padding: 20,
    width: 255,
    height: 90,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "center",
  },
});
