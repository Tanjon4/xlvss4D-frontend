import { usePriceStore } from "../store/price.store.js";

const CurrencyDisplay = () => {
  const currency = usePriceStore((state) => state.currency);
  const symbol = usePriceStore((state) => state.getCurrencySymbol());
  const toggleCurrency = usePriceStore((state) => state.toggleCurrency);

  return (
    <div>
      <select name="" id="" onChange={toggleCurrency} className="bg-gray-800 rounded">
        <option value="AR">Ariary</option>
        <option value="EUR">Euro</option>
        <option value="DOL">Dollar</option>
      </select>
      
    </div>
  );
};

export default CurrencyDisplay;