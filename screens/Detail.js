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
      <Text>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
