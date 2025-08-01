import CurrencyDisplay from "../TestPrice";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white px-40">
       <div className="flex items-center space-x-4">
         <p className="">free shipping on all u.s orders over $50</p>
       </div>

       <div className="flex justify-around space-x-3 items-center">
            <CurrencyDisplay />
            <p className="border-x border-white py-3 px-3">French</p>
            <p>My account</p>
       </div>
    </header>
  );
}
export default Header;