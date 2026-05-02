import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react-native";
import { View } from "react-native";

interface TabBarIconProps {
  icon: LucideIcon;
  color: string;
  size: number;
  focused: boolean;
}

const TabBarIcon = ({ icon: Icon, color, size, focused }: TabBarIconProps) => {
  return (
    <View
      className={cn(
        "rounded-full items-center justify-center w-full h-full",
        focused ? "bg-muted" : "",
      )}
    >
      <Icon size={24} color={color} strokeWidth={2.2} />
    </View>
  );
};
export default TabBarIcon;
