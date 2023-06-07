import { StyleSheet, Text, View } from "react-native";

export default function Header(props) {
  return (
    <View>
      <View style={styles.container_view_r1}></View>
      <View style={styles.container_view_r2}>
        <Text style={styles.header_title}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
  container_view_r1: {
    height: 44,
    backgroundColor: "",
  },
  container_view_r2: {
    height: 54,
    display: "flex",
    justifyContent: "center",
  },
  header_title: {
    paddingLeft: 20,
    fontSize: 34,
    fontWeight: "bold",
  },
});
