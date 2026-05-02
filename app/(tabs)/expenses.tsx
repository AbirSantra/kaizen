import { cn } from "@/lib/utils";
import { Text, View } from "react-native";

const Expenses = () => {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className={cn("text-2xl font-bold text-foreground")}>
        Expenses Screen
      </Text>
    </View>
  );
};
export default Expenses;
