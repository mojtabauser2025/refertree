import { create } from "zustand";
import { setTheme } from "@/lib/theme";

type UIState = {
  dark: boolean;
  toggleDark: () => void;
};

export const useUIStore = create<UIState>((set, get) => ({
  dark: false,

  toggleDark: () => {
    const next = !get().dark;

    set({ dark: next });
    setTheme(next);
  },
}));