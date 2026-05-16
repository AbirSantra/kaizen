import CustomTabs from "@/components/common/bottom-tabs";
import { Tabs } from "expo-router";
import type { LucideIcon } from "lucide-react-native";
import {
  BadgeIndianRupeeIcon,
  ChartLineIcon,
  HomeIcon,
  SettingsIcon,
} from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabs {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: HomeIcon as LucideIcon,
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: "Expenses",
          tabBarIcon: BadgeIndianRupeeIcon as LucideIcon,
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: ChartLineIcon as LucideIcon,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: SettingsIcon as LucideIcon,
        }}
      />
    </Tabs>
  );
}
