import './App.css';
import React, { useContext, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import NavBar from './components/header/navBar/NavBar';
import Footer from './components/footer/Footer';
import ScrollToTop from './ScrollToTop';
import Toast from './components/toast/Toast'
import ProductsSlidebar from './components/productsSlidebar/ProductsSlidebar'
import { contextData } from './components/contextData/ContextData'
import products from './components/productsBox/data'

function App() {
  let router = useRoutes(routes);
  let [isShowToast, setIsShowToast] = useState(false)
  let [isShowSlidebarProduct, setIsShowSlidebarProduct] = useState(false)
  const [newProductCart, setNewProductCart] = useState([])
  return (
    <div className="App">
      <contextData.Provider value={{ isShowToast, setIsShowToast, isShowSlidebarProduct, setIsShowSlidebarProduct, products, newProductCart, setNewProductCart }}>
        <ScrollToTop />
        <NavBar />
        {router}
        <ProductsSlidebar />
        <Toast />
        <Footer />
      </contextData.Provider>
    </div>
  );
}

export default App;
