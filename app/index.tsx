import { cn } from "@/lib/utils";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-slate-900">
      <Text className={cn("text-2xl font-bold text-gray-900 dark:text-white")}>
        Welcome to Kaizen!
      </Text>
    </View>
  );
}
