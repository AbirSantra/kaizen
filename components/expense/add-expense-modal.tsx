import { cn } from "@/lib/utils";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AddExpenseModal = () => {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-muted" style={{ paddingBottom: insets.bottom }}>
      <View className="flex-1 items-center justify-center">
        <Text className={cn("text-2xl font-bold text-foreground")}>
          Add Expense formSheet
        </Text>
      </View>
    </View>
  );
};

export default AddExpenseModal;