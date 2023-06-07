import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import Ionicons from "@expo/vector-icons/Ionicons";

function HomeScreen({ navigation }) {
  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
  );

  // const renderScene = SceneMap({
  //   first: FirstRoute,
  //   second: SecondRoute,
  //   all: FirstRoute,
  //   playground: FirstRoute,
  //   parks: FirstRoute,
  //   splash_pads: FirstRoute,
  // });

  // const renderScene = ({ route }) => {
  //   return (
  //     <View style={styles.container}>
  //       <Text>{route.key}</Text>
  //     </View>
  //   );
  // };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "all":
        return (
          <View style={styles.container_view}>
            <Text>Main Screen</Text>
          </View>
        );
      default:
        return (
          <View style={styles.container_view}>
            <Text>{route.key}</Text>
          </View>
        );
    }
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "all", title: "All" },
    { key: "playground", title: "Playground" },
    { key: "park", title: "Park" },
    { key: "splash_pad", title: "Splash Pad" },
    { key: "zoo", title: "Zoo" },
    { key: "museum", title: "Museum" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container_view_r1}></View>
      <View style={styles.container_view_r2}>
        <Text style={styles.header_title}>Plano, TX</Text>
      </View>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: "#A53891",
            }} //469-600-1779
            // renderIndicator={() => <Text>!</Text>}
            // renderIcon={({ route, focused, color }) => (
            //   <Ionicons
            //     name="basketball"
            //     size={focused ? 15 : 15}
            //     color={color}
            //   />
            // )}
            tabStyle={{
              width: "auto",
            }}
            activeColor={"#A53891"}
            inactiveColor="#91959B"
            renderLabel={({ route, focused, color }) => (
              <Text
                style={
                  focused
                    ? {
                        color,
                        fontWeight: "bold",
                        width: 80,
                      }
                    : { color, margin: 0, paddingBottom: 2 }
                }
              >
                {route.title}
              </Text>
            )}
            scrollEnabled={true}
            style={{ backgroundColor: "transparent" }}
          />
        )}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function FavoritesScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Favorites</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
  },
  container_view: {
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
