import Pressable from "#/components/PressableLink";
import Screen from "#/components/Screen";
import { Text } from "#/components/Themed";
import { Link, useSegments } from "expo-router";
import { ScrollView, View, ViewStyle } from "react-native";

type CardProps =
  | {
      height?: ViewStyle["width"];
      aspectRatio?: number;
      width?: never;
    }
  | {
      height?: never;
      aspectRatio?: number;
      width?: ViewStyle["width"];
    };

function Card({ width, height = 120, aspectRatio = 4 / 3 }: CardProps) {
  const dimensions = width ? { width, aspectRatio } : { height, aspectRatio };
  return (
    <View
      style={[
        {
          backgroundColor: "#aaa",
          borderRadius: 10,
        },
        dimensions,
      ]}
    />
  );
}

export default function Timeline() {
  const segments = useSegments();
  const isHome = segments.includes("(home)");

  const bleed = 10;

  return (
    <Screen>
      <View style={{ gap: 20 }}>
        {isHome ? (
          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 24 }}>Headline!</Text>

            <Link href="article/123" asChild>
              <Pressable>
                <Card width="100%" aspectRatio={16 / 9} />
              </Pressable>
            </Link>
          </View>
        ) : null}
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 20 }}>Interesting stuff</Text>
          <ScrollView
            horizontal
            style={{ marginHorizontal: -bleed }}
            contentContainerStyle={{ gap: 20 }}
            contentInset={{ left: bleed, right: bleed }}
            contentOffset={{ x: -bleed, y: 0 }}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 24 }}>Broken link!</Text>
          <Link href="broken" asChild>
            <Pressable>
              <Card width="100%" aspectRatio={16 / 11} />
            </Pressable>
          </Link>
        </View>
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 24 }}>More content!</Text>
          <ScrollView
            horizontal
            style={{ marginHorizontal: -bleed }}
            contentContainerStyle={{ gap: 20 }}
            contentInset={{ left: bleed, right: bleed }}
            contentOffset={{ x: -bleed, y: 0 }}
          >
            <Card aspectRatio={1} />
            <Card aspectRatio={1} />
            <Card aspectRatio={1} />
            <Card aspectRatio={1} />
            <Card aspectRatio={1} />
          </ScrollView>
        </View>
      </View>
    </Screen>
  );
}
