import React from 'react'
import Header from './components/header/Header';
import ProductBox from './components/productsBox/ProductBox';
import Footer from './components/footer/Footer';

export default function MainPage() {
    return (
        <div>
            <Header />
            <ProductBox />
            <Footer />
        </div>
    )
}
