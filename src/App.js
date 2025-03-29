import './App.css';
import React from 'react';
import Header from './components/header/Header';
import ProductBox from './components/productsBox/ProductBox';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <ProductBox />
      <Footer />
    </div>
  );
}

export default App;
