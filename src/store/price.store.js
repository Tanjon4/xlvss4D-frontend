import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePriceStore = create((
    persist(
        (set,get) => ({
            currency:"Ariary",
            toggleCurrency:() =>{
                const newCurrency = get().currency === "Ariary" ? "Euro" : "Ariary";
                set({ currency: newCurrency });
            },
            getCurrency: () => get().currency,
            getCurrencySymbol: () => {
                const currency = get().currency;
                if (currency === "Ariary") {
                    return "Ar";
                } else if (currency === "Euro") {
                    return "€";
                }
                return "";
            }
        }),
        {
            name: "price-storage", // unique name
            getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
            partialize: (state) => ({ currency: state.currency }) // only persist the currency
    }
    )

)
    )
