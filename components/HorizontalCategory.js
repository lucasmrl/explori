import { StyleSheet, Text, View } from "react-native";
import { convertAndCapitalize } from "../utils/Utils";
import { FlashList } from "@shopify/flash-list";
import CardMain from "./CardMain";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

export default function HorizontalCategory(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.category_title}>{props.title}</Text>
      <FlashList
        data={props.data}
        ItemSeparatorComponent={() => <View style={{ width: 6 }} />}
        renderItem={({ item }) => (
          <CardMain
            thumbnailUrl={item.thumbnail}
            park={convertAndCapitalize(item.name)}
            itemName={convertAndCapitalize(item.category)}
            itemAddress={item.address.street}
            nav={props.nav}
          />
        )}
        estimatedItemSize={20}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 0,
    marginBottom: 16,
  },
  category_title: {
    fontWeight: "600",
    color: "#219C23",
    fontSize: 16,
    paddingBottom: 4,
  },
});
