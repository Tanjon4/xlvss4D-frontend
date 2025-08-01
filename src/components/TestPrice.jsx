import { usePriceStore } from "../store/price.store.js";

const CurrencyDisplay = () => {
  const currency = usePriceStore((state) => state.currency);
  const symbol = usePriceStore((state) => state.getCurrencySymbol());
  const toggleCurrency = usePriceStore((state) => state.toggleCurrency);

  return (
    <div>
      <p>Devise actuelle : {currency} ({symbol})</p>
      <button onClick={toggleCurrency}>Changer de devise</button>
    </div>
  );
};

export default CurrencyDisplay;