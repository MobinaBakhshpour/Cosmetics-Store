import MainPage from "./MainPage";
import SingleProductPage from "./components/productsBox/SingleProductPage";
import AboutUs from "./components/extraPages/aboutUs/AboutUs";
let routes = [
    { path: "/", element: <MainPage /> },
    { path: "/product/:productId", element: <SingleProductPage /> },
    { path: "/aboutUs", element: <AboutUs /> },
]

export default routes;