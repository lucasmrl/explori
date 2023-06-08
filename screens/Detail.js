import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";

export default function Detail({ route }) {
  const { height, width } = useWindowDimensions();
  const { thumbnailUrl, park, itemName, itemAddress } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: thumbnailUrl }}
        style={{ width: width, height: height * 0.3 }}
      />
      <View style={styles.container_content}>
        <Text>Hi</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container_content: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgb(245 245 244)",
  },
});
