import { usePriceStore } from "./src/store/price.store.js";

const price = usePriceStore.getState().price;
const currency = usePriceStore.getState().currency;

console.log(formatPrice(price, currency));
