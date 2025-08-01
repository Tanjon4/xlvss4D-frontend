import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
        <nav className="flex flex-col">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white mr-2">
                Home
            </Link>
            <Link to="/contact" className="text-2xl font-bold text-gray-900 dark:text-white mr-2">
                Contacts
            </Link>
            <Link to="/produit" className="text-2xl font-bold text-gray-900 dark:text-white mr-2">
                Produits
            </Link>
            <Link to="/login" className="text-2xl font-bold text-gray-900 dark:text-white mr-2">
                Login
            </Link>
            <Link to="/register" className="text-2xl font-bold text-gray-900 dark:text-white mr-2">
                Register
            </Link>
            <Link to="/lists" className="text-2xl font-bold text-gray-900 dark:text-white mr-2">
                products list
            </Link>
        </nav>
        </>)
}
export default Navigation;