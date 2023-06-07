import { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import HeaderSecondary from "../components/HeaderSecondary";
import CardFavorite from "../components/CardFavorite";
import sample from "../data/sample_favorites.json";
import { convertAndCapitalize } from "../utils/Utils";

export default function Favorites() {
  const [activeFilter, setActiveFilter] = useState(0);
  const [data, setData] = useState(sample);

  useEffect(() => {
    if (activeFilter == 1) {
      let visited = sample.filter((el) => el.visited);
      setData(visited);
    } else {
      let pending = sample.filter((el) => el.visited == false);
      setData(pending);
    }
  }, [activeFilter]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderSecondary title="Favorites" />
      <View style={styles.header_filters}>
        <Pressable
          onPress={() => {
            setActiveFilter(0);
          }}
        >
          <Text
            style={
              activeFilter == 0
                ? styles.active_filter
                : { ...styles.inactive_filter, marginLeft: 0 }
            }
          >
            Pending
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setActiveFilter(1);
          }}
        >
          <Text
            style={
              activeFilter == 1
                ? { ...styles.active_filter, marginLeft: 12 }
                : styles.inactive_filter
            }
          >
            Visited
          </Text>
        </Pressable>
      </View>
      <View style={styles.container_content}>
        {data.map((el, index) => (
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
  header_filters: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  active_filter: {
    fontWeight: "bold",
    color: "#A53891",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#A53891",
    borderRadius: 4,
    padding: 5,
  },
  inactive_filter: {
    marginLeft: 12,
    fontWeight: "bold",
    color: "#91959B",
    fontSize: 14,
    padding: 6,
  },
});
