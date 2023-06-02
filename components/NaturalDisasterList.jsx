import { View, ScrollView, HStack, Image } from "native-base";
import { Text } from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NaturalDisasterList({ navigation, manual }) {
  // 모두보기를 누르면 재난메뉴얼 리스트 페이지로 이동
  // const goList = () => {
  //   navigation.replace("ManualListPage", manual);
  // };
  const goList = () => {
    navigation.replace("TabNavigator", {
      screen: "대응 메뉴얼",
      params: {
        category: "자연재난",
      },
    });
  };

  // 카드를 누르면 디테일 페이지로 이동
  const goDetail = (Num) => {
    navigation.navigate("DetailPage", manual[Num]);
  };

  return (
    <View mt={6}>
      <HStack
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={5}
        mb={1}
      >
        <Text fontSize={18} fontWeight={"bold"}>
          자연재난
        </Text>
        <TouchableOpacity onPress={() => goList()}>
          <Text fontWeight={"bold"} color={"#3787FF"}>
            모두보기
          </Text>
        </TouchableOpacity>
      </HStack>

      <ScrollView horizontal={true} px={4} py={2}>
        {manual.map((item, i) => {
          return (
            <TouchableOpacity key={i} onPress={() => goDetail(i)}>
              <View
                backgroundColor={"#EBF3FE"}
                w={125}
                h={125}
                marginRight={3}
                borderRadius={10}
                borderWidth={1}
                // borderWidth={2}
                borderColor={"#d0dcee"}
                alignItems={"center"}
                style={styles.card}
              >
                <View w={"58%"} h={"58%"} mt={3}>
                  <Image
                    // source={item.image}
                    source={{ uri: item.image }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    alt={item.title}
                  />
                </View>

                <Text mt={2} fontSize={16}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  naturalImg: {
    width: "100%",
    height: "100%",
  },
});
