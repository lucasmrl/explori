import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "../components/Header";

export default function Favorites() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Favorites" />
      <View style={styles.container_content}>
        <Text>Favorites</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
