import Screen from "#/components/Screen";
import { Text } from "#/components/Themed";
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

export default function Article() {
  const bleed = 10;
  return (
    <Screen>
      <View style={{ gap: 20 }}>
        <Text style={{ fontSize: 24 }}>Headline!</Text>
        <Card width="100%" aspectRatio={16 / 9} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
          aliquam quam. Pellentesque ut neque id risus dapibus finibus ac sed
          enim. Morbi nec neque et eros condimentum viverra sed nec mi. Integer
          accumsan viverra lorem, quis aliquet nisl dignissim eu. Cras et
          imperdiet arcu, bibendum malesuada tellus. Aenean libero ex, egestas
          sit amet rhoncus eu, tincidunt eget turpis. Fusce egestas consequat
          molestie. Maecenas eget turpis id ligula pulvinar consectetur a vitae
          ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          vitae orci vel nunc faucibus rhoncus. Cras sed laoreet enim, quis
          rhoncus purus. Duis eleifend nisi sed nunc scelerisque, vel facilisis
          est vestibulum. Donec at orci a nisl placerat pulvinar in eget ligula.
          Nunc mattis imperdiet ipsum, ac tincidunt arcu vestibulum et.
          Pellentesque dui tellus, luctus in mi sit amet, cursus scelerisque mi.
          Sed dictum diam in turpis elementum lacinia.
        </Text>
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
        <Text>
          Etiam aliquam neque lectus, et elementum quam fringilla quis. Ut
          eleifend mi et tempor ultrices. Nullam eu diam scelerisque elit varius
          laoreet et id turpis. Pellentesque urna lacus, vehicula in dui at,
          suscipit sagittis sem. Integer et risus ut sapien maximus congue eu id
          lacus. Ut leo neque, vulputate semper tortor quis, ornare ullamcorper
          turpis. Proin ligula orci, varius at feugiat non, egestas sed arcu.
          Morbi auctor nibh in tortor pulvinar, id vulputate nisl pulvinar.
          Donec sed orci at felis elementum viverra. Suspendisse potenti. Duis
          fringilla metus eu scelerisque blandit. Phasellus id massa velit.
          Etiam enim velit, ultrices ut augue non, tincidunt suscipit metus.
          Aliquam varius molestie turpis sit amet sagittis. Morbi egestas
          finibus scelerisque. Sed varius pulvinar elementum.{"\n\n"}
          Pellentesque sed arcu imperdiet, rutrum ex non, tincidunt metus.
          Phasellus rutrum efficitur urna, vitae sagittis tellus pulvinar eget.
          Cras molestie et tortor eu pulvinar. Duis vitae semper lectus, eget
          blandit nisi. Maecenas placerat egestas arcu, ac semper odio aliquet
          nec. Nunc eleifend at ligula in bibendum. In turpis lectus, pulvinar
          nec suscipit id, posuere at lorem. Curabitur eros lacus, consectetur
          sit amet nulla eget, sagittis tempor odio. Pellentesque a congue sem.
          Nullam eleifend, justo et dictum cursus, dui est facilisis nisi, vel
          ornare quam lectus at purus. Vivamus tempus pretium nisi in sodales.
          Vestibulum vestibulum enim tellus, at suscipit enim luctus ac. Nullam
          venenatis libero lectus, luctus consectetur lectus semper a. Nam
          elementum pretium mollis. Sed consequat nec metus id luctus.
        </Text>
        <Card width="100%" aspectRatio={16 / 11} />
        <Text>
          Nunc consequat turpis sodales, eleifend ex ac, sodales quam. Maecenas
          molestie at lectus at rutrum. Quisque faucibus posuere lobortis. Fusce
          bibendum accumsan turpis sit amet sollicitudin. Curabitur ut turpis
          eget dui ullamcorper pretium. Mauris posuere nisl at turpis placerat
          faucibus. Quisque efficitur est ut arcu eleifend convallis. Nullam nec
          suscipit arcu, id eleifend nibh. Suspendisse porta mauris mauris, et
          posuere quam tincidunt id. In tincidunt lacus sed velit vehicula
          dapibus. Mauris feugiat dapibus erat. Curabitur bibendum finibus metus
          at efficitur. Suspendisse eu congue nunc. Cras non elit ultrices,
          eleifend neque eget, aliquam felis. Nam consequat tempus suscipit.
          {"\n\n"}
          Nunc rutrum nunc massa. Phasellus viverra vehicula magna nec
          hendrerit. Donec accumsan et massa vitae porta. Phasellus metus purus,
          bibendum ut sem mattis, consectetur egestas eros. Suspendisse aliquam
          eu sem ac malesuada. Sed dapibus posuere tempus. Donec lacus nulla,
          egestas eu tortor sed, luctus tristique tortor. Cras congue sem justo,
          non aliquam elit imperdiet in. Duis molestie finibus sem. Aenean
          posuere mattis porta.
        </Text>
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 24 }}>Related content!</Text>
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
