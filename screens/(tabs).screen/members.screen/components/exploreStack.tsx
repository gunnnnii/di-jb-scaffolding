import { ScrollView, View } from "react-native";
import { StackRouter } from "@react-navigation/native";

import { Navigator, usePathname, Slot, Link, Stack } from "expo-router";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import StackNavigationScreen from "#/components/StackNavigator";

export default function ExploreStack() {
  return <StackNavigationScreen screenOptions={{ title: "Explore" }} />;
}
