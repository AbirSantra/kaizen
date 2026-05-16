import "@/global.css";
import { Stack } from "expo-router";

import "@/store/theme-store";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="add-expense"
        options={{
          presentation: "formSheet",
          headerShown: false,
          animation: "fade_from_bottom",
          sheetGrabberVisible: true,
          sheetAllowedDetents: [0.5],
          sheetInitialDetentIndex: 0,
          sheetCornerRadius: 32,
        }}
      />
    </Stack>
  );
}
