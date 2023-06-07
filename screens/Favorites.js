import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HeaderSecondary from "../components/HeaderSecondary";
import CardFavorite from "../components/CardFavorite";
import sample from "../data/sample_favorites.json";
import { convertAndCapitalize } from "../utils/Utils";

export default function Favorites() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderSecondary title="Favorites" />
      <View style={styles.container_content}>
        {sample.map((el, index) => (
          <CardFavorite
            key={index}
            thumbnailUrl={el.thumbnail}
            park={convertAndCapitalize(el.name)}
            itemName={convertAndCapitalize(el.category)}
            itemAddress={el.address}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container_content: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
