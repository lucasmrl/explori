import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Animated from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import sampleData from "../data/sample.json";
import CardFavorite2 from "../components/CardFavorite2";

export default function Detail({ route, navigation }) {
  const [data, setData] = useState(sampleData[0].recommended[0]);
  const { height, width } = useWindowDimensions();
  const { thumbnailUrl, park, itemName, itemAddress } = route.params;
  const amn = [
    "Parking",
    "Restrooms",
    "Dog Park",
    "Trails",
    "Pavilions",
    "Picnic Tables",
  ];
  if (!data) {
    return <View></View>;
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <View style={styles.back_btn}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </View>
      </Pressable>
      <Image
        source={{ uri: thumbnailUrl }}
        style={{ width: width, height: height * 0.3, zIndex: -1 }}
        // sharedTransitionTag={thumbnailUrl}
      />
      <ScrollView style={styles.container_content}>
        <Text style={styles.categoryText}>{itemName}</Text>
        <Text style={styles.nameText}>{park}</Text>
        <View style={styles.icon_text}>
          <Ionicons name="ios-location-outline" size={20} color="black" />
          <Text style={styles.text_details}>{itemAddress}</Text>
        </View>
        <View style={styles.icon_text}>
          <Ionicons name="ios-time-outline" size={20} color="black" />
          <Text style={styles.text_details}>Everyday from 5AM to 11PM</Text>
        </View>
        <Text style={styles.short_description}>
          This park features many amenities and is located in the heart of the
          city. Greate for families and pets.
        </Text>
        <Text style={styles.category_title}>HIGHLIGHTS</Text>
        <View style={styles.section_highlight}>
          <View style={styles.icon_highlight}>
            <MaterialIcons name="park" size={42} color="black" />
          </View>
          <View style={styles.icon_highlight}>
            <MaterialIcons name="family-restroom" size={42} color="black" />
          </View>
          <View style={styles.icon_highlight}>
            <Ionicons name="water" size={42} color="black" />
          </View>
        </View>
        <Text style={styles.category_title}>IN THIS LOCATION</Text>
        <CardFavorite2
          thumbnailUrl={
            "https://lh3.googleusercontent.com/p/AF1QipMcIwBeOfzsX6qhq8egk-A-3YvdPQigEzNfaKK6=s1360-w1360-h1020"
          }
          park={"Oak Hills Splash Park"}
          itemName={"Park"}
          itemAddress={"1225 Royal Palm Ln"}
          nav={null}
        />
        <Text style={styles.category_title}>AMENITIES</Text>
        {data.amenities.map((el, index) => (
          <Text key={index} style={styles.amn}>
            {el}{" "}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Pressable onPress={() => console.log("hey")}>
          <View style={styles.button_fav}>
            <Text style={styles.btn_fav_text}>Add to Favorites</Text>
            <Ionicons name="ios-heart" size={24} style={styles.btn_fav_icon} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
  },
  container_content: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  back_btn: {
    zIndex: 1,
    position: "absolute",
    top: 10,
    left: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    opacity: 0.9,
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  nameText: {
    fontSize: 32,
    marginBottom: 8,
    fontWeight: "bold",
  },
  categoryText: {
    fontSize: 20,
    color: "rgb(234 88 12)",
    fontWeight: "600",
  },
  icon_text: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text_details: {
    color: "#555555",
    marginLeft: 2,
  },
  short_description: {
    marginTop: 16,
    fontSize: 16,
    color: "#555555",
    marginLeft: 2,
    textAlign: "justify",
  },
  category_title: {
    marginTop: 32,
    fontWeight: "600",
    color: "#007AFF",
    fontSize: 16,
    marginBottom: 16,
  },
  section_highlight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  icon_highlight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: "#FCF3CF",
  },
  footer: {
    display: "flex",
    alignItems: "flex-end",
    height: 80,
    borderTopWidth: 1,
    borderTopColor: "rgb(214 211 209)",
    opacity: 0.9,
    backgroundColor: "rgb(245 245 244)",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button_fav: {
    display: "flex",
    borderRadius: 6,
    padding: 10,
    flexDirection: "row",
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F64F02",
    // justifyContent: "center",
  },
  btn_fav_text: {
    fontWeight: "bold",
    color: "white",
  },
  btn_fav_icon: {
    marginLeft: 4,
    color: "white",
  },
  amn: {
    color: "black",
  },
});
