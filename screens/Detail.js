import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Pressable,
  SafeAreaView,
} from "react-native";
import Animated from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Detail({ route, navigation }) {
  const { height, width } = useWindowDimensions();
  const { thumbnailUrl, park, itemName, itemAddress } = route.params;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Fav")}>
        <View style={styles.back_btn}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </View>
      </Pressable>
      <Animated.Image
        source={{ uri: thumbnailUrl }}
        style={{ width: width, height: height * 0.3, zIndex: -1 }}
        sharedTransitionTag={thumbnailUrl}
      />
      <View style={styles.container_content}>
        <Text>Park info</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
  },
  container_content: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  back_btn: {
    zIndex: 1,
    position: "absolute",
    top: 10,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    opacity: 0.9,
    width: 32,
    height: 32,
    borderRadius: 100,
  },
});
