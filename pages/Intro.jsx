import { StyleSheet, Image } from "react-native";
import { View } from "native-base";

const movingLogo = require("../assets/moving-logo.gif");

export default function Intro() {
  return (
    <View style={styles.container}>
      <Image
        source={movingLogo}
        style={{ width: 450, height: 450, marginBottom: 170 }}
      />
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
