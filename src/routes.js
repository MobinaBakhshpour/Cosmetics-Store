import MainPage from "./MainPage";
import SingleProductPage from "./components/productsBox/SingleProductPage";
let routes = [
    { path: "/", element: <MainPage /> },
    { path: "/product/:productId", element: <SingleProductPage /> },
]

export default routes;