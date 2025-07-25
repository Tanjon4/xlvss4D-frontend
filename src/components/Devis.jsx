import { usePriceStore } from "../store/price.store";
const Devis = ({ amount }) => {
  const { getCurrency, getCurrencySymbol } = usePriceStore();
  const currency = getCurrency();
  const symbol = getCurrencySymbol(currency);

  return (
    <div>
      <span>Montant : </span>
      <strong>
        {symbol}
        {amount}
      </strong>
      <span> ({currency})</span>
    </div>
  );
};

export default Devis;