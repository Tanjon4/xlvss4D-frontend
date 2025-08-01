import { usePriceStore } from "../store/price.store.js";

const CurrencyDisplay = () => {
  const { currency, setCurrency } = usePriceStore();

  const toggleCurrency = (event) => { 
    const newCurrency = event.target.value;
    setCurrency(newCurrency);
  }
  
  return (
    <div>
      <select onChange={toggleCurrency} className="bg-gray-800 rounded ">
        <option value="Ariary">Ariary</option>
        <option value="Euro">Euro</option>
        <option value="Dollar">Dollar</option>
      </select>
      
    </div>
  );
};

export default CurrencyDisplay;