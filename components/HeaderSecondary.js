import { StyleSheet, Text, View } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.container}>
      <View style={styles.container_view_r1}></View>
      <View style={styles.container_view_r2}>
        <View>
          <Text style={styles.header_title}>{props.title}</Text>
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
  container_view_r2: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 54,
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
    fontWeight: "bold",
  },
});
