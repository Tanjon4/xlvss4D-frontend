import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLangStore = create(
  persist(
    (set, get) => ({
      lang: "fr",
      toggleLang: () => {
        const currentLang = get().lang;
        const newLang = currentLang === "fr" ? "en" : currentLang === "en" ? "mg" : "fr";

        set({ lang: newLang });

        document.documentElement.lang = newLang;
      },
      setLang: (newLang) => {
        set({ lang: newLang });
        document.documentElement.lang = newLang;
      },
    }),
    {
      name: "lang-storage", //nom du localStorage
    }
  )
);
export default useLangStore;