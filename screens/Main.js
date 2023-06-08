import { StyleSheet, Text, View, Button } from "react-native";
import HorizontalCategory from "../components/HorizontalCategory";
import data from "../data/sample.json";

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <HorizontalCategory
        title="Recommended"
        nav={navigation}
        data={data[0].recommended}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(245 245 244)",
    paddingTop: 20,
    paddingLeft: 20,
  },
});
