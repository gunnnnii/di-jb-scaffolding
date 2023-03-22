import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" color={focused ? "red" : "blue"} />
          ),
        }}
      />
      <Tabs.Screen
        name="(explore)"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="search" color={focused ? "red" : "blue"} />
          ),
        }}
      />
      <Tabs.Screen
        name="members"
        options={{
          title: "Members",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="user" color={focused ? "red" : "blue"} />
          ),
        }}
      />
    </Tabs>
  );
}
