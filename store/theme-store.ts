import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ThemePreference = "light" | "dark" | "system";

interface ThemeStore {
  themePreference: ThemePreference;
  setThemePreference: (theme: ThemePreference) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      themePreference: "system",
      setThemePreference: (theme) => {
        Appearance.setColorScheme(theme === "system" ? null : theme);
        set({ themePreference: theme });
      },
    }),
    {
      name: "app-theme",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        // Runs once on app start after AsyncStorage is read
        if (state) {
          const { themePreference } = state;
          Appearance.setColorScheme(
            themePreference === "system" ? null : themePreference,
          );
        }
      },
    },
  ),
);
