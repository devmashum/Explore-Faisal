import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

