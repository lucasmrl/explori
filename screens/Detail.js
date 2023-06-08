import { StyleSheet, Text, View } from "react-native";

export default function Detail({ route }) {
  const { thumbnailUrl, park, itemName, itemAddress } = route.params;
  console.log(thumbnailUrl, park, itemName, itemAddress);
  return (
    <View style={styles.container}>
      <Text>{route.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
