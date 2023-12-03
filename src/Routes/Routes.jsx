import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import About from "../Pages/About/About";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,

        children: [

            {
                path: 'about',
                element: <About></About>
            }
        ]
    },
]);

