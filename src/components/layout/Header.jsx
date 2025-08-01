import LanguageSwitcher from "../testLangue";
import CurrencyDisplay from "../TestPrice";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate()

  const handleChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
    }

  return (
    <header className="flex justify-between items-center bg-gray-800 text-gray-400 px-40">
       <div className="flex items-center space-x-4">
         <p className="">free shipping on all u.s orders over $50</p>
       </div>

       <div className="flex justify-around space-x-3 items-center">
            <CurrencyDisplay />
            <LanguageSwitcher/>
            <select name="" id="" className="bg-gray-800 text-gray-400" onChange={handleChange}>
              <option value="" className="relative group cursor-pointer">My Account</option>
              <option value="/login"  className="block px-3 py-2 hover:bg-gray-100">login</option>
              <option value="/register" className="block px-3 py-2 hover:bg-gray-100">Register</option>
            </select>
            
           
       </div>
    </header>
  );
}
export default Header;