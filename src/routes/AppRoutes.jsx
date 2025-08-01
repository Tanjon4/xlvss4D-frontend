import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/loaders/Loaders";
import NotFound from "../pages/NotFound";
import ProductList from "../pages/ProductList";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Produits from "../pages/Produits";



const fallback = <Loader/>
const Home = lazy(() => import("../pages/Home"));
const Contacts = lazy(() => import("../pages/Contacts"));


const router = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={fallback}><Home/></Suspense>,
    },
    {
        path: "/contact",
        element: <Suspense fallback={fallback}><Contacts/></Suspense>
    },
    {
        path: "/produit",
        element: <Suspense fallback={fallback}><Produits/></Suspense>
    },
    {
        path: "/login",
        element: <Suspense fallback={fallback}><Login/></Suspense>
    },
    {
        path: "/register",
        element: <Suspense fallback={fallback}><Register/></Suspense>
    },
    {
        path: "/list",
        element: <Suspense fallback={fallback}><ProductList/></Suspense>
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);
export default router;
    