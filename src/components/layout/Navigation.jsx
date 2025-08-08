import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Navigation = () => {
const { t } = useTranslation();

    return (
        <>
        <nav className="flex bg-white justify-around text-black items-center p-8 shadow-md">
            <div>
                <h1 className='font-bold text-2xl'>Blanca</h1>
            </div>
            <div className="">
            <Link to="/" className="text-base ml-10">
                {t("home")}
            </Link>
            <Link to="/lists" className="text-base ml-10">
                Products
            </Link>
            <Link to="/contact" className="text-base ml-10">
                {t("contacts")}
            </Link>
            <Link to="/produit" className="text-base ml-10">
                {t("products")}
            </Link>
            
            <Link to="/lists" className="text-base ml-10">
                {t("products_list")}
            </Link>
            </div>
        <div>
            <Link to="/serch" className="text-base text-black">
            <i class="fa-solid fa-magnifying-glass"></i>
            </Link>
            <Link to="/serch" className="text-base text-black ml-5">
            <i class="fa-solid fa-cart-shopping"></i>
            </Link>
        </div>   
        </nav>
        </>
)}
export default Navigation;