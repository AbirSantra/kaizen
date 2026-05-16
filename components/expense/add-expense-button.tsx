import { TAB_COLORS } from "@/constants/tabs-constants";
import { useIsDark } from "@/hooks/useIsDark";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { PlusIcon } from "lucide-react-native";
import { Platform, Pressable } from "react-native";

const AddExpenseButton = () => {
  const router = useRouter();
  const isDark = useIsDark();

  return (
    <Pressable
      className="size-14 bg-primary rounded-full items-center justify-center"
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
        router.push("/add-expense");
      }}
    >
      <PlusIcon
        size={Platform.OS === "ios" ? 28 : 24}
        color={
          !isDark
            ? TAB_COLORS.colors.dark.active
            : TAB_COLORS.colors.light.active
        }
        strokeWidth={2.5}
      />
    </Pressable>
  );
};

export default AddExpenseButton;
