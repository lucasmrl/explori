import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HeaderSecondary from "../components/HeaderSecondary";

export default function Favorites() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderSecondary title="Favorites" />
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
