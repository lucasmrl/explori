import { StyleSheet, Text, View } from "react-native";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(245 245 244)",
    alignItems: "center",
    justifyContent: "center",
  },
});
