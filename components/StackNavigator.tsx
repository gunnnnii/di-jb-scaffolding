import { Pressable } from "react-native";
import {
  NativeStackNavigationOptions,
  NativeStackHeaderProps,
} from "@react-navigation/native-stack";

import { usePathname, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, useThemeColor } from "./Themed";

type StackNavigationOptions = Pick<NativeStackNavigationOptions, "title">;

type StackNavigationScreenProps = {
  header?: (options: NativeStackHeaderProps) => React.ReactNode;
  screenOptions?: StackNavigationOptions;
};
export default function StackNavigationScreen({
  header = (props) => <DefaultHeader {...props} />,
  screenOptions = {},
}: StackNavigationScreenProps) {
  return <Stack screenOptions={{ ...screenOptions, header }} />;
}

export function DefaultHeader({
  navigation,
  options: { title },
  back,
}: NativeStackHeaderProps) {
  const pathname = usePathname();
  const backgroundColor = useThemeColor({}, "background");
  const canGoBack = back != null;

  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        paddingVertical: 16,
        paddingHorizontal: 10,
        backgroundColor,
      }}
    >
      <Pressable onPress={navigation.goBack} disabled={!canGoBack}>
        <Text style={{ fontSize: 16 }}>
          {canGoBack ? "<" + back.title + " | " : ""} {title ?? pathname}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
