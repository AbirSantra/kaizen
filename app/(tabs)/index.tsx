import { cn } from "@/lib/utils";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className={cn("text-2xl font-bold text-foreground")}>
        Welcome to Kaizen!
      </Text>
    </View>
  );
}
