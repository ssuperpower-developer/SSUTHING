import "react-native-gesture-handler";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import IdTable from "./Table";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("SecurityList")}>
          <MaterialCommunityIcons name="shield" size={100} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("EducationList")}>
          <MaterialCommunityIcons name="calculator" size={100} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("FestivalList")}>
          <MaterialCommunityIcons
            name="microphone-variant"
            size={100}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("LeisureList")}>
          <MaterialCommunityIcons name="basketball" size={100} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
function SecurityList() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <IdTable></IdTable>
    </View>
  );
}
function EducationList() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>EducationList</Text>
    </View>
  );
}
function FestivalList() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>FestivalList</Text>
    </View>
  );
}
function LeisureList() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>LeisureList</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator initialRoutName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SecurityList" component={SecurityList} />
      <Stack.Screen name="EducationList" component={EducationList} />
      <Stack.Screen name="FestivalList" component={FestivalList} />
      <Stack.Screen name="LeisureList" component={LeisureList} />
    </Stack.Navigator>
  );
}

function Search() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search</Text>
    </View>
  );
}
function Notice() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notice!</Text>
    </View>
  );
}
function MyList() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>MyList!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function UnderTab() {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ tabBarIcon: makeIconRender("home") }}
        style={{ backgroundColor: "#68CDC1" }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ tabBarIcon: makeIconRender("magnify") }}
      />
      <Tab.Screen
        name="Notice"
        component={Notice}
        options={{ tabBarIcon: makeIconRender("account") }} // 아이콘 수정 필요
      />
      <Tab.Screen
        name="MyList"
        component={MyList}
        options={{ tabBarIcon: makeIconRender("history") }}
      />
    </Tab.Navigator>
  );
}

export default function Nav() {
  return (
    <NavigationContainer>
      <UnderTab></UnderTab>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#68CDC1",
  },
  headerTintColor: "white",
  headerBackTitle: "",
  tabBarStyle: [{ backgroundColor: "#68CDC1" }],
};
