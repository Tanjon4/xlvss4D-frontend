import LanguageSwitcher from "../testLangue";
import CurrencyDisplay from "../TestPrice";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-gray-400 px-40">
       <div className="flex items-center space-x-4">
         <p className="">free shipping on all u.s orders over $50</p>
       </div>

       <div className="flex justify-around space-x-3 items-center">
            <CurrencyDisplay />
            <LanguageSwitcher/>
            <select name="" id="" className="bg-gray-800 text-gray-400">
              <option value="" defaultChecked>My Account</option>
              <option value="/login" className="text-base ml-10">
                <Link to="/login" className="text-gray-700">login</Link>
            </option>
            <option value="/register" className="text-base ml-10">
                <Link to="/register" className="text-gray-700">register</Link>
            </option>
            </select>
            
           
       </div>
    </header>
  );
}
export default Header;