import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Animated from "react-native-reanimated";

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
          <Image
            source={{ uri: thumbnailUrl }}
            style={styles.thumbnail}
            // sharedTransitionTag={thumbnailUrl}
          />
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
    height: "auto",
    width: "100%",
    backgroundColor: "white",
    // borderColor: "#2E3B4C",
    // borderWidth: 1.5,
    padding: 6,
    borderRadius: 8,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  thumbnail: {
    width: 220,
    height: 140,
    borderRadius: 4,
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
