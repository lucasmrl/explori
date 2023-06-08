import { StyleSheet, Text, View } from "react-native";

export default function HorizontalCategory(props) {
  return (
    <View style={styles.container}>
      <Text>Title</Text>
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
