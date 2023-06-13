import { StyleSheet, Text, View, ScrollView } from "react-native";
import CardCategory from "../components/CardCategory";

export default function Category({ route, navigation }) {
  return (
    <ScrollView style={styles.container}>
      <CardCategory
        thumbnailUrl={
          "https://lh3.googleusercontent.com/p/AF1QipMcIwBeOfzsX6qhq8egk-A-3YvdPQigEzNfaKK6=s1360-w1360-h1020"
        }
        park={"Oak Hills Splash Park"}
        itemName={"Park"}
        itemAddress={"1225 Royal Palm Ln"}
        nav={navigation}
      />
      <CardCategory
        thumbnailUrl={
          "https://lh3.googleusercontent.com/p/AF1QipPsJ4XmAZIXzIbKhygPjM8VsoFiKHBQUGaG0Ayn=s1360-w1360-h1020"
        }
        park={"Liberty Plauyground"}
        itemName={"Playground"}
        itemAddress={"98 Drive Way"}
        nav={navigation}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    // backgroundColor: "rgb(245 245 244)",
    backgroundColor: "white",
  },
});
