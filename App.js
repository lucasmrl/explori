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
      <Text style={styles.header_title}>Plano, TX</Text>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: "#A83C95",
              marginLeft: 6,
            }}
            // renderIndicator={() => <Text>!</Text>}
            tabStyle={{ width: "auto", padding: 25 }}
            activeColor="#A83C95"
            inactiveColor="#91959B"
            renderLabel={({ route, focused, color }) => (
              <Text
                style={
                  focused
                    ? {
                        color,
                        padding: 0,
                        fontSize: 16,
                        fontWeight: "bold",
                        width: 200,
                        height: 100,
                      }
                    : { color, margin: 0 }
                }
              >
                {route.title}
              </Text>
            )}
            scrollEnabled={true}
            style={{ backgroundColor: "white" }}
          />
        )}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
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
    backgroundColor: "#fff",
  },
  container_view: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header_title: {
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 34,
    fontWeight: "bold",
  },
});
