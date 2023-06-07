import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CardFavorite = ({ thumbnailUrl, park, itemName, itemAddress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
        <View style={styles.textContainer}>
          <Text style={styles.itemNameText}>{itemName}</Text>
          <Text style={styles.parkText} numberOfLines={1}>
            {park}
          </Text>
          <Text style={styles.itemAddressText}>{itemAddress}</Text>
        </View>
      </View>
      <View style={styles.bottomLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  cardContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
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
    height: 0.5,
    width: "90%",
    backgroundColor: "#DDEAF3",
    marginBottom: 10,
    display: "flex",
    marginLeft: 10,
    marginRight: 10,
  },
});

export default CardFavorite;
