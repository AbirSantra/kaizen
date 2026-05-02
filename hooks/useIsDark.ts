import { useColorScheme } from "react-native";

export function useIsDark() {
  const colorScheme = useColorScheme();
  return colorScheme === "dark";
}
