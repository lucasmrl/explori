import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Animated from "react-native-reanimated";

const CardCategory = ({ thumbnailUrl, park, itemName, itemAddress, nav }) => {
  const { height, width } = useWindowDimensions();

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
        <View style={{ ...styles.cardContainer }}>
          <Image
            source={{ uri: thumbnailUrl }}
            style={{
              width: "100%",
              height: 180,
              borderRadius: 4,
            }}
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
  container: {
    display: "flex",
  },
  cardContainer: {
    display: "flex",
    height: "auto",
    width: "100%",
    backgroundColor: "white",
    borderColor: "#2E3B4C",
    borderWidth: 1.5,
    padding: 6,
    borderRadius: 10,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  textContainer: {
    padding: 5,
  },
  categoryText: {
    fontSize: 14,
  },
  nameText: {
    fontSize: 20,
    marginBottom: 2,
    fontWeight: "bold",
  },
  addressText: {
    fontSize: 14,
    color: "#888888",
  },
});

export default CardCategory;
