import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import NavBar from './components/header/navBar/NavBar';
import Footer from './components/footer/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  let router = useRoutes(routes);
  return (
    <div className="App">
      <ScrollToTop />
      <NavBar />
      {router}
      <Footer />
    </div>
  );
}

export default App;
