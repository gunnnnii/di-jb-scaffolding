import { Stack } from "expo-router";
import ExploreStack from "./components/exploreStack";
import HomeStack from "./components/homeStack";

type TimelineLayoutProps = {
  segment: "(home)" | "(explore)" | (string & {});
};
// sadly expo-router doesn't quite have all the typings figured out yet
export default function TimelineLayout({
  segment,
  ...rest
}: TimelineLayoutProps) {
  if (segment === "(explore)") return <ExploreStack />;
  return <HomeStack />;
}
