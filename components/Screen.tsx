import { PropsWithChildren } from "react";
import { ScrollView } from "react-native";
import { useThemeColor } from "./Themed";

export default function Screen({ children }: PropsWithChildren<{}>) {
  const contentBackground = useThemeColor(
    {
      dark: "#222",
    },
    "background"
  );
  return (
    <ScrollView
      contentInset={{ top: 10, bottom: 10 }}
      contentOffset={{ y: -10, x: 0 }}
      style={{
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: contentBackground,
      }}
    >
      {children}
    </ScrollView>
  );
}
