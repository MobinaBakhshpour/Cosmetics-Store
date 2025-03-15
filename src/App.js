import './App.css';
import React from 'react';
import Header from './components/header/Header';
import ProductBox from './components/productsBox/ProductBox';
function App() {
  return (
    <div className="App">
      <Header/>
      <ProductBox/>
    </div>
  );
}

export default App;
