import { StyleSheet, Text, View, Button } from "react-native";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Detail")}
      />
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
