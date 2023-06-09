import { StyleSheet, Text, View, ScrollView } from "react-native";
import HorizontalCategory from "../components/HorizontalCategory";
import data from "../data/sample.json";

export default function Main({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* <HorizontalCategory
        title="Recommended"
        nav={navigation}
        data={data[0].recommended}
      /> */}
      {/* <HorizontalCategory
        title="Get Wet"
        nav={navigation}
        data={data[0].recommended}
      />
      <HorizontalCategory
        title="Popular"
        nav={navigation}
        data={data[0].recommended}
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(245 245 244)",
    paddingTop: 20,
  },
});
