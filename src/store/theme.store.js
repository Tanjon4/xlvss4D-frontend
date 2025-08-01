import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useThemeStore = create((
    persist(
        (set,get) => ({
            theme:"light",
            toggleTheme: () => {
                const newTheme = get().theme === "light" ? "dark" : "light";
                document.documentElement.classList
            }
        })
    )
))