import { StyleSheet, Text, View } from "react-native";
import CardCategory from "../components/CardCategory";

export default function Category({ route, navigation }) {
  return (
    <View style={styles.container}>
      <CardCategory
        thumbnailUrl={
          "https://lh3.googleusercontent.com/p/AF1QipMcIwBeOfzsX6qhq8egk-A-3YvdPQigEzNfaKK6=s1360-w1360-h1020"
        }
        park={"Oak Hills Splash Park"}
        itemName={"Park"}
        itemAddress={"1225 Royal Palm Ln"}
        nav={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgb(245 245 244)",
  },
});
