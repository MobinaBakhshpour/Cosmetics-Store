import './App.css';
import React, { useContext, useState, useEffect, useRef } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import NavBar from './components/header/navBar/NavBar';
import Footer from './components/footer/Footer';
import ScrollToTop from './ScrollToTop';
import Toast from './components/toast/Toast'
import ProductsSlidebar from './components/productsSlidebar/ProductsSlidebar'
import { contextData } from './components/contextData/ContextData'
import products from './components/productsBox/data'
import { PuffLoader } from 'react-spinners';

function App() {
  let router = useRoutes(routes);
  let [isShowToast, setIsShowToast] = useState(false);
  let [isShowSlidebarProduct, setIsShowSlidebarProduct] = useState(false);
  const [newProductCart, setNewProductCart] = useState([]);
  let [isShowHamburgerMenu, setIsShowHamburgerMenu] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const appRef = useRef(null); // رفرنس به کل اپلیکیشن

  useEffect(() => {
    const timeout = setTimeout(() => {
      const images = document.querySelectorAll('img');
      const total = images.length;

      if (total === 0) {
        setIsLoading(false);
        return;
      }

      let loaded = 0;

      const imageLoader = () => {
        loaded++;
        if (loaded === total) {
          setIsLoading(false);
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          imageLoader();
        } else {
          img.addEventListener('load', imageLoader);
          img.addEventListener('error', imageLoader);
        }
      });
    }, 900); // کمی تأخیر برای اطمینان از رندر کامل DOM

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={appRef}>
      {isLoading && (
        <div className='loader'>
          <PuffLoader color="#3f9a86" />
        </div>
      )}
      <contextData.Provider value={{ isShowToast, setIsShowToast, isShowSlidebarProduct, setIsShowSlidebarProduct, products, newProductCart, setNewProductCart, isShowHamburgerMenu, setIsShowHamburgerMenu }}>
        <ScrollToTop />
        {!isLoading && (
          <>
            <NavBar />
            {router}
            <ProductsSlidebar />
            <Toast />
            <Footer />
          </>
        )}
      </contextData.Provider>
    </div>
  );
}

export default App;
