import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/home'
import ProductsPage from '../pages/products'

export const routes = createBrowserRouter([
    {
        index: true,
        element: <HomePage/>
    },
    {
        path: '/products',
        element: <ProductsPage/>
    }
])