import { TAB_COLORS } from "@/constants/tabs-constants";
import { useIsDark } from "@/hooks/useIsDark";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import type { LucideIcon } from "lucide-react-native";
import React, { useEffect } from "react";
import { Platform, Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AddExpenseButton from "../expense/add-expense-button";

const CustomTabs: React.FC<BottomTabBarProps> = ({
  navigation,
  state,
  descriptors,
}) => {
  const insets = useSafeAreaInsets();
  const isDark = useIsDark();
  const slidePosition = useSharedValue(0);
  const containerWidth = useSharedValue(0);
  const bottomInset = Math.max(insets.bottom, 20);

  // Use state.index to track active tab
  const activeIndex = state.index;

  // Animate slide position when active tab changes
  useEffect(() => {
    slidePosition.value = withSpring(activeIndex, {
      damping: 55,
      stiffness: 150,
      mass: 0.25,
    });
  }, [activeIndex, slidePosition]);

  const slidingBackgroundStyle = useAnimatedStyle(() => {
    const padding = 12; // 6px on each side
    const availableWidth = containerWidth.value - padding;
    const tabWidth = availableWidth / state.routes.length;
    return {
      width: tabWidth,
      transform: [
        {
          translateX: slidePosition.value * tabWidth,
        },
      ],
    };
  });

  return (
    <View
      className="absolute inset-x-5 flex-row items-center h-16 gap-2"
      style={{
        bottom: bottomInset,
      }}
    >
      {/* Main 4 Tabs Group */}
      <View
        className="flex-1 flex-row items-center justify-center bg-zinc-50 dark:bg-zinc-900 h-full relative rounded-4xl p-1.5"
        onLayout={(e) => {
          containerWidth.value = e.nativeEvent.layout.width;
        }}
      >
        {/* Sliding Background */}
        <Animated.View
          className="absolute inset-y-1.5 rounded-4xl bg-muted left-1.5"
          style={slidingBackgroundStyle}
        />

        {state.routes.map((route, index) => {
          // Get options from descriptors
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          // Get icon from options (standard React Navigation approach)
          const Icon = options.tabBarIcon as LucideIcon;
          if (!Icon) return null;

          const color = isDark
            ? isFocused
              ? TAB_COLORS.colors.dark.active
              : TAB_COLORS.colors.dark.inactive
            : isFocused
              ? TAB_COLORS.colors.light.active
              : TAB_COLORS.colors.light.inactive;

          const onPress = () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);

            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              className="flex-1 h-full items-center justify-center z-10"
            >
              <Icon
                size={Platform.OS === "ios" ? 22 : 22}
                color={color}
                strokeWidth={2.2}
              />
            </Pressable>
          );
        })}
      </View>

      {/* Add Expense Button */}
      <AddExpenseButton />
    </View>
  );
};

export default CustomTabs;
