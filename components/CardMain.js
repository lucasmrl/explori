import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const CardMain = ({ thumbnailUrl, park, itemName, itemAddress, nav }) => {
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
          <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
          <View style={styles.textContainer}>
            <Text style={styles.categoryText}>{itemName}</Text>
            <Text style={styles.nameText} numberOfLines={1}>
              {park}
            </Text>
            <Text style={styles.addressText}>{itemAddress}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  cardContainer: {
    display: "flex",
    width: 220,
    height: "auto",
    paddingLeft: 0,
    paddingTop: 12,
    paddingBottom: 6,
    backgroundColor: "",
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  thumbnail: {
    width: 220,
    height: 140,
    borderRadius: 10,
  },
  textContainer: {
    padding: 5,
  },
  categoryText: {
    fontSize: 12,
  },
  nameText: {
    fontSize: 16,
    marginBottom: 2,
    fontWeight: "bold",
  },
  addressText: {
    fontSize: 12,
    color: "#888888",
  },
});

export default CardMain;
