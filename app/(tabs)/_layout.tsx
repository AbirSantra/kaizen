import TabBarIcon from "@/components/common/tab-bar-icon";
import { useIsDark } from "@/hooks/useIsDark";
import { Tabs } from "expo-router";
import {
  BadgeIndianRupeeIcon,
  ChartLineIcon,
  HomeIcon,
  SettingsIcon,
} from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const TAB_ICON_CONSTANTS = {
  tabHeight: 64,
  iconSize: 48,
  horizontalInset: 20,
  colors: {
    light: {
      active: "#18181b",
      inactive: "#a1a1aa",
      background: "#fafafa",
    },
    dark: {
      active: "#f4f4f5",
      inactive: "#a1a1aa",
      background: "#18181b",
    },
  },
};

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const isDark = useIsDark();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(
            insets.bottom + 16,
            TAB_ICON_CONSTANTS.horizontalInset,
          ),
          borderRadius: 32,
          height: TAB_ICON_CONSTANTS.tabHeight,
          marginHorizontal: TAB_ICON_CONSTANTS.horizontalInset,
          paddingBottom: 0,
          alignItems: "center",
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: isDark
            ? TAB_ICON_CONSTANTS.colors.dark.background
            : TAB_ICON_CONSTANTS.colors.light.background,
        },
        tabBarIconStyle: {
          borderRadius: 999,
          flex: 1,
          width: "100%",
          alignItems: "center",
        },
        tabBarActiveTintColor: isDark
          ? TAB_ICON_CONSTANTS.colors.dark.active
          : TAB_ICON_CONSTANTS.colors.light.active,
        tabBarInactiveTintColor: isDark
          ? TAB_ICON_CONSTANTS.colors.dark.inactive
          : TAB_ICON_CONSTANTS.colors.light.inactive,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (props) => <TabBarIcon icon={HomeIcon} {...props} />,
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: "Expenses",
          tabBarIcon: (props) => (
            <TabBarIcon icon={BadgeIndianRupeeIcon} {...props} />
          ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: (props) => <TabBarIcon icon={ChartLineIcon} {...props} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: (props) => <TabBarIcon icon={SettingsIcon} {...props} />,
        }}
      />
    </Tabs>
  );
}
