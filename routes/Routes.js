import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Main from "../screens/Main";
import Category from "../screens/Category";
import Favorites from "../screens/Favorites";
import Header from "../components/Header";

const TabTop = createMaterialTopTabNavigator();

function HomeScreen({ navigation }) {
  const layout = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Plano,TX" />
      <TabTop.Navigator
        initialLayout={{ width: layout.width }}
        screenOptions={{
          tabBarLabel: ({ focused, children }) => {
            return focused ? (
              <Text style={{ fontWeight: "bold", color: "black" }}>
                {children}
              </Text>
            ) : (
              <Text
                style={{ fontWeight: "normal", color: "#6D6D6D", fontSize: 15 }}
              >
                {children}
              </Text>
            );
          },
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIndicatorStyle: { backgroundColor: "black", height: 4 },
          tabBarItemStyle: { width: "auto" },
          tabBarStyle: { backgroundColor: "white" },
          tabBarScrollEnabled: true,
          // tabBarInactiveTintColor: "#91959B",
          // tabBarActiveTintColor: "#A53891",
        }}
      >
        <TabTop.Screen name="All" component={Main} />
        <TabTop.Screen name="Playground" component={Category} />
        <TabTop.Screen name="Parks" component={Category} />
        <TabTop.Screen name="Splash pads" component={Category} />
        <TabTop.Screen name="Zoos" component={Category} />
        <TabTop.Screen name="Indoor" component={Category} />
        <TabTop.Screen name="Museums" component={Category} />
      </TabTop.Navigator>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "rgb(234 88 12)",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Explori",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "ios-compass" : "ios-compass-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: "Plan",
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "ios-heart" : "ios-heart-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
