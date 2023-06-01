import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { View, Text, HStack, ScrollView } from "native-base";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapView from "react-native-maps";
import * as Location from "expo-location";

import HeaderComponent from "../components/HeaderComponent";
import Loading from "./Loading";

export default function MapPage({ navigation }) {
  const [ready, setReady] = useState(false);
  const [policeData, setPoliceData] = useState([]);
  const [fireStationData, setFireStationData] = useState([]);
  const [medicalData, setMedicalData] = useState([]);

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const API_Key = "2909988985744347930cb1157a515f73";
      const urls = [
        "https://openapi.gg.go.kr/Polcsttnstus",
        "https://openapi.gg.go.kr/GyeonggiFireStation",
        "https://openapi.gg.go.kr/EmgncyMedcareInstStus",
      ];

      const params = {
        Key: API_Key,
        pIndex: "1",
        pSize: "100",
        type: "json",
      };

      try {
        const requests = urls.map((url) => axios.get(url, { params }));
        const responses = await axios.all(requests);

        const responseData1 = responses[0].data.Polcsttnstus[1].row;
        const responseData2 = responses[1].data.GyeonggiFireStation[1].row;
        const responseData3 = responses[2].data.EmgncyMedcareInstStus[1].row;

        setPoliceData(responseData1);
        setFireStationData(responseData2);
        setMedicalData(responseData3);
      } catch (error) {
        console.log(error);
      } finally {
        setReady(true);
      }
    };

    fetchData();
  }, []);

  // 현재위치 받아오기
  const myLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("위치 권한이 허용되지 않았습니다.");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation.coords);
  };

  // 현재위치 버튼을 누르면 지도에 보여지는 위치값 업데이트
  useEffect(() => {
    if (location) {
      mapRef.current.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [location]);

  const mapRef = React.useRef(null);

  return !ready ? (
    <Loading />
  ) : (
    <>
      <View style={styles.container}>
        <HeaderComponent navigation={navigation} />
      </View>
      <HStack
        padding={2}
        backgroundColor={"#ffffff"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={4}
        pb={3}
      >
        <TouchableOpacity style={styles.myLocationBtn} onPress={myLocation}>
          <Text color={"#f7f7f7"} fontWeight={"bold"} fontSize={14}>
            현재 위치
          </Text>
          <Image
            source={require("../assets/location-point.png")}
            alt={"location Point"}
            style={{ width: 20, height: 20, marginLeft: 5 }}
          />
        </TouchableOpacity>
        <HStack>
          <HStack mx={2} alignItems={"center"}>
            <View
              w={3}
              h={3}
              backgroundColor={"#2D63E2"}
              borderRadius={50}
              mr={1}
            ></View>
            <Text>경찰서</Text>
          </HStack>
          <HStack mx={2} alignItems={"center"}>
            <View
              w={3}
              h={3}
              backgroundColor={"#e41e17"}
              borderRadius={50}
              mr={1}
            ></View>
            <Text>소방서</Text>
          </HStack>
          <HStack mx={2} alignItems={"center"}>
            <View
              w={3}
              h={3}
              backgroundColor={"#00cf23"}
              borderRadius={50}
              mr={1}
            ></View>
            <Text>의료기관</Text>
          </HStack>
        </HStack>
      </HStack>
      <View alignItems={"center"}>
        <Text p={2}>마커를 클릭하면 주소를 나타냅니다.</Text>
      </View>
      <View flex={1}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            // latitude: 37.2893309929,
            // longitude: 127.0534874583,
            latitude: 37.2843,
            longitude: 127.0171,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
          }}
          provider={PROVIDER_GOOGLE}
        >
          {policeData.map((item, i) =>
            item.REFINE_WGS84_LAT === null ||
            item.REFINE_WGS84_LOGT === null ? null : (
              <Marker
                key={i}
                coordinate={{
                  latitude: parseFloat(item.REFINE_WGS84_LAT),
                  longitude: parseFloat(item.REFINE_WGS84_LOGT),
                }}
                pinColor="#2D63E2"
                title={item.POLCSTTN_NM}
                description={item.REFINE_ROADNM_ADDR}
              />
            )
          )}
          {fireStationData.map((item, i) =>
            item.REFINE_WGS84_LAT === null ||
            item.REFINE_WGS84_LOGT === null ? null : (
              <Marker
                key={i}
                coordinate={{
                  latitude: parseFloat(item.REFINE_WGS84_LAT),
                  longitude: parseFloat(item.REFINE_WGS84_LOGT),
                }}
                pinColor="#e41e17"
                title={item.ALL_INST_NM}
                description={item.REFINE_ROADNM_ADDR}
              />
            )
          )}
          {medicalData.map((item, i) =>
            item.REFINE_WGS84_LAT === null ||
            item.REFINE_WGS84_LOGT === null ? null : (
              <Marker
                key={i}
                coordinate={{
                  latitude: parseFloat(item.REFINE_WGS84_LAT),
                  longitude: parseFloat(item.REFINE_WGS84_LOGT),
                }}
                pinColor="#02a01d"
                title={item.HOSPTL_CENTER_NM}
                description={item.REFINE_ROADNM_ADDR}
              />
            )
          )}
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  myLocationBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#75b1ff",
  },
});
