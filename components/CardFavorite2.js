import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Animated from "react-native-reanimated";

const CardFavorite2 = ({ thumbnailUrl, park, itemName, itemAddress, nav }) => {
  return (
    <Pressable
      onPress={() =>
        nav.navigate("Detail", {
          thumbnailUrl,
          park,
          itemName,
          itemAddress,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Image
            source={{ uri: thumbnailUrl }}
            style={styles.thumbnail}
            // sharedTransitionTag={thumbnailUrl}
          />
          <View style={styles.textContainer}>
            <Text style={styles.itemNameText}>{itemName}</Text>
            <Text style={styles.parkText} numberOfLines={1}>
              {park}
            </Text>
            <Text style={styles.itemAddressText}>{itemAddress}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  cardContainer: {
    flexDirection: "row",
    // backgroundColor: "rgb(245 245 244)",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
    overflow: "hidden",
  },
  thumbnail: {
    width: 100,
    height: 80,
    borderRadius: 2,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  parkText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemNameText: {
    fontSize: 14,
    marginBottom: 2,
  },
  itemAddressText: {
    fontSize: 12,
    color: "#888888",
  },
  bottomLine: {
    height: 1,
    width: "90%",
    backgroundColor: "rgb(214 211 209)",
    opacity: 0.5,
    marginBottom: 10,
    display: "flex",
    marginLeft: 10,
    marginRight: 10,
  },
});

export default CardFavorite2;
