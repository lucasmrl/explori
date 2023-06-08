import { StyleSheet, Text, View } from "react-native";

export default function Category({ route }) {
  return (
    <View style={styles.container}>
      <Text>{route.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(245 245 244)",
    padding: 20,
  },
});
