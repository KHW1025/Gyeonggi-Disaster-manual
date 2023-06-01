import { StyleSheet, TouchableOpacity } from "react-native";
import {
  ScrollView,
  IconButton,
  Icon,
  Image,
  Text,
  View,
  Input,
  Center,
} from "native-base";
import HeaderComponent from "../components/HeaderComponent";
import SearchInputComponent from "../components/SearchInputComponent";

import { useEffect, useState } from "react";

export default function DetailPage({ navigation, route }) {
  // console.log(route.params);

  const list = route.params;
  // const [list, setList] = useState(route.params);
  const [tabNum, setTabNum] = useState(0);

  // console.log(list.manualTabs.length);
  useEffect(() => {
    navigation.setOptions({
      title: list.title,
      headerStyle: {
        height: 80,
        // backgroundColor: "#EBF3FE",
        backgroundColor: "#daf1ff",
        elevation: 0,
      },
      headerShown: true,
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Center mt={10} mb={16}>
        <Image source={{ uri: list.image }} w={150} h={150} alt={list.title} />
      </Center>

      <View
        style={[
          styles.tabBox,
          list.manualTabs.length === 2 ? styles.twoTab : "",
        ]}
      >
        {list.manualTabs.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={[styles.tabBtn, tabNum === i ? styles.tabBtnOn : ""]}
            onPress={() => setTabNum(i)}
          >
            <Text
              style={[styles.tabBtnTxt, tabNum === i ? styles.tabBtnTxtOn : ""]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={list.tabsTitle.length === 0 ? "" : styles.tabsTitleBox}>
        <Text style={list.tabsTitle.length === 0 ? "" : styles.tabsTitle}>
          {list.tabsTitle[tabNum]}
        </Text>
      </View>
      <View style={styles.detailBox}>
        {list.manualData[tabNum].step.map((item, i) => (
          <View key={i}>
            <Text
              style={[styles.stepTitle, i === 0 ? styles.firstStepTitle : ""]}
            >
              {item.stepTitle}
            </Text>
            <View style={styles.stepDetail}>
              {item.stepDetail.split(/[-∙]/).map((text, a) => (
                <View key={a} style={styles.stepTextCon}>
                  {a === 0 ? "" : <Text style={styles.stepLine}> - </Text>}
                  {a === 0 ? "" : <Text>{text.trim()}</Text>}
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  tabBox: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  twoTab: {
    justifyContent: "center",
  },
  tabBtn: {
    backgroundColor: "#EBF3FE",
    width: "30%",
    alignItems: "center",
    paddingVertical: 12,
    // padding: 12,
    marginHorizontal: 6,
    // borderRadius: 16,
    marginBottom: 8,
  },
  tabBtnOn: {
    backgroundColor: "#3787FF",
  },
  tabBtnTxt: {
    color: "#868D97",
  },
  tabBtnTxtOn: {
    color: "white",
    fontWeight: "bold",
  },
  tabsTitleBox: {
    // marginHorizontal: 10,
    // borderWidth: 1,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#d4d4d4",
    marginTop: 30,
    marginBottom: 10,
  },
  tabsTitle: {
    lineHeight: 24,
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: "bold",
    color: "#0C51B9",
  },
  detailBox: {
    borderWidth: 1,
    borderColor: "#d4d4d4",
    // borderStyle: "dotted",
    // borderRadius: 16,
    padding: 16,
    // margin: 10,
    paddingTop: 20,
    paddingBottom: 50,
  },
  stepTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 30,
  },
  firstStepTitle: {
    marginTop: 0,
  },
  stepDetail: {
    // textAlign: "justify",
    // flexWrap: "wrap",
  },
  stepTextCon: {
    // marginLeft: -10,
    marginRight: 10,
    // width: "95%",
    marginVertical: 4,
    // borderWidth: 1,
    // borderColor: "red",
    flexDirection: "row",
    // flexWrap: "wrap",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // marginVertical: -13,
    // position: "relative",
  },
  stepLine: {
    width: 12,
    // marginLeft: -12,
    // position: "absolute",
    // left: -10,
  },
  stepText: {
    flex: 1,
  },
});
