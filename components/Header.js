import { StyleSheet, Text, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.container_view_r1}></View>
      <View style={styles.container_view_r2}>
        <View style={styles.left}>
          <Text style={styles.header_subtitle}>Explori</Text>
          <Text style={styles.header_title}>{props.title}</Text>
        </View>
        <View style={styles.right}>
          <Pressable onPress={() => alert("Search!")}>
            <Ionicons name="ios-search-outline" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  container_header: {
    display: "flex",
  },
  container_view_r1: {
    height: 44,
    backgroundColor: "",
  },
  left: {},
  right: {
    display: "flex",
    justifyContent: "center",
  },
  container_view_r2: {
    paddingLeft: 20,
    paddingRight: 24,
    height: 74,
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
  },
  header_subtitle: {
    fontSize: 16,
    fontWeight: "300",
  },
  header_title: {
    fontSize: 34,
    fontWeight: "800",
  },
});
