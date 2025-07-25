import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/loaders/Loaders";
import NotFound from "../pages/NotFound";



const fallback = <Loader/>
const Home = lazy(() => import("../pages/Home"));
const Contacts = lazy(() => import("../pages/Contacts"));


const router = createBrowserRouter([
    {
        path: "/",
        elemment: <Suspense fallback={fallback}><Home/></Suspense>,
    },
    {
        path: "/contact",
        element: <Suspense fallback={fallback}><Contacts/></Suspense>
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);
export default router;
    