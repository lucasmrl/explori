import { useState } from "react";
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
import sampleData from "../data/sample.json";

export default function Detail({ route, navigation }) {
  const [data, setData] = useState(sampleData[0].recommended);
  const { height, width } = useWindowDimensions();
  const { thumbnailUrl, park, itemName, itemAddress } = route.params;

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <View style={styles.back_btn}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </View>
      </Pressable>
      <Image
        source={{ uri: thumbnailUrl }}
        style={{ width: width, height: height * 0.3, zIndex: -1 }}
        // sharedTransitionTag={thumbnailUrl}
      />
      <View style={styles.container_content}>
        <Text style={styles.categoryText}>{itemName}</Text>
        <Text style={styles.nameText}>{park}</Text>
        <View style={styles.icon_text}>
          <Ionicons name="ios-location-outline" size={20} color="black" />
          <Text style={styles.text_details}>{itemAddress}</Text>
        </View>
        <View style={styles.icon_text}>
          <Ionicons name="ios-time-outline" size={20} color="black" />
          <Text style={styles.text_details}>Everyday from 5AM to 11PM</Text>
        </View>
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
  nameText: {
    fontSize: 32,
    marginBottom: 8,
    fontWeight: "bold",
  },
  categoryText: {
    fontSize: 20,
    color: "rgb(234 88 12)",
    fontWeight: "600",
  },
  icon_text: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text_details: {
    color: "#555555",
    marginLeft: 2,
  },
});
