import { ScrollView, View } from "react-native";
import { StackRouter } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { Navigator, usePathname, Slot, Link, Stack } from "expo-router";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Text, useThemeColor } from "./Themed";

type StackNavigationOptions = Pick<NativeStackNavigationOptions, "title">;

type StackNavigationScreenProps = {
  header?: (options: StackNavigationOptions) => React.ReactNode;
  screenOptions?: StackNavigationOptions;
};
export default function StackNavigationScreen({
  header = (options) => <DefaultHeader title={options.title} />,
  screenOptions = {},
}: StackNavigationScreenProps) {
  const { top } = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, "background");
  return (
    <Navigator router={StackRouter}>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "white" }}
      >
        {header(screenOptions)}
        <ScrollView
          contentInset={{ top: 10, bottom: 10 }}
          contentOffset={{ y: -10, x: 0 }}
          style={{ paddingHorizontal: 10, flex: 1, backgroundColor }}
        >
          <Slot />
        </ScrollView>
      </SafeAreaView>
    </Navigator>
  );
}

type DefaultHeaderProps = {
  title?: string;
};
function DefaultHeader({ title }: DefaultHeaderProps) {
  const { navigation, state, descriptors, router } = Navigator.useContext();
  const pathname = usePathname();
  return (
    <View
      style={{
        paddingVertical: 16,
        paddingHorizontal: 10,
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 16 }}>{title ?? pathname}</Text>
    </View>
  );
}
