import { StatusBar } from "expo-status-bar";
import { Text } from "native-base";
import { StyleSheet, View, Image } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Image
        // source={require("../assets/Loading-img.png")}
        source={require("../assets/Loading.gif")}
        style={{ width: 65, height: 65 }}
      />
      <Text
        fontSize={20}
        mt={25}
        style={{
          fontFamily: "DoHyeon-Regular",
        }}
      >
        데이터 로드 중입니다...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
