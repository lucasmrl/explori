import { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import HeaderSecondary from "../components/HeaderSecondary";
import CardFavorite from "../components/CardFavorite";
import sample from "../data/sample_favorites.json";
import { convertAndCapitalize } from "../utils/Utils";
import SwipeableFlatList from "react-native-swipeable-list";

export default function Favorites() {
  const [activeFilter, setActiveFilter] = useState(0);
  const [data, setData] = useState(sample);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (activeFilter == 1) {
      let visited = sample.filter((el) => el.visited && el.visible);
      setData(visited);
    } else {
      let pending = sample.filter((el) => el.visited == false && el.visible);
      setData(pending);
    }
  }, [refresh, activeFilter]);

  const extractItemKey = (item) => {
    return item.id.toString();
  };

  const deleteItem = (itemId) => {
    const newState = [...data];
    let objectToEdit = newState.find((obj) => obj.id === itemId);
    objectToEdit.visible = false;
    setData(newState);
    setRefresh(!refresh);
  };

  const markVisited = (itemId) => {
    const newState = [...data];
    let objectToEdit = newState.find((obj) => obj.id === itemId);
    objectToEdit.visited = true;
    setData(newState);
    setRefresh(!refresh);
  };

  const markPending = (itemId) => {
    const newState = [...data];
    let objectToEdit = newState.find((obj) => obj.id === itemId);
    objectToEdit.visited = false;
    setData(newState);
    setRefresh(!refresh);
  };

  const QuickActions = (index, qaItem) => {
    return (
      <View style={styles.qaContainer}>
        {qaItem.visited ? (
          <View style={[styles.button, styles.button1]}>
            <Pressable onPress={() => markPending(qaItem.id)}>
              <Text style={[styles.buttonText, styles.button1Text]}>
                Pending
              </Text>
            </Pressable>
          </View>
        ) : (
          <View style={[styles.button, styles.button2]}>
            <Pressable onPress={() => markVisited(qaItem.id)}>
              <Text style={[styles.buttonText, styles.button2Text]}>
                Visited
              </Text>
            </Pressable>
          </View>
        )}
        <View style={[styles.button, styles.button3]}>
          <Pressable onPress={() => deleteItem(qaItem.id)}>
            <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };

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

      {/* Container */}
      <View style={styles.container_content}>
        <SwipeableFlatList
          keyExtractor={extractItemKey}
          data={data}
          renderItem={({ item }) => (
            <CardFavorite
              key={item.id}
              thumbnailUrl={item.thumbnail}
              park={convertAndCapitalize(item.name)}
              itemName={convertAndCapitalize(item.category)}
              itemAddress={item.address}
            />
          )}
          maxSwipeDistance={150}
          renderQuickActions={({ index, item }) => QuickActions(index, item)}
          contentContainerStyle={styles.contentContainerStyle}
          shouldBounceOnMount={false}
        />
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
    paddingTop: 20,
    backgroundColor: "rgb(245 245 244)",
  },
  header_filters: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 16,
    borderColor: "#F0F0F0",
    borderBottomWidth: 0.5,
  },
  active_filter: {
    fontWeight: "bold",
    color: "black",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    padding: 5,
  },
  inactive_filter: {
    marginLeft: 12,
    fontWeight: "bold",
    color: "#6D6D6D",
    fontSize: 14,
    padding: 6,
  },
  qaContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  qaContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "500",
    opacity: 1,
  },
  button1Text: {
    color: "#007AFF",
  },
  button2Text: {
    color: "#007AFF",
  },
  button3Text: {
    color: "#FF3B30",
  },
});
