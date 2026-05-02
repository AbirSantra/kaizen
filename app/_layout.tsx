import "@/global.css";
import { Stack } from "expo-router";

import "@/store/theme-store";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
