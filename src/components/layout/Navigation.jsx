import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
        <nav className="flex bg-white justify-around text-black items-center p-8 shadow-md">
            <div>
                <h1 className='font-bold text-2xl'>Blanca</h1>
            </div>
            <div className="">
            <Link to="/" className="text-base ml-10">
                Home
            </Link>
            <Link to="/lists" className="text-base ml-10">
                Products
            </Link>
            <Link to="/contact" className="text-base ml-10">
                Contacts
            </Link>
            <Link to="/login" className="text-base ml-10">
                Login
            </Link>
            <Link to="/register" className="text-base ml-10">
                Register
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
        </>)
}
export default Navigation;