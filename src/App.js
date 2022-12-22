import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages & components
import ProductsPage from './pages/ProductsPage';
import HomePage from './pages/HomePage';
import Header from './sections/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* NOTE: Navbar should be replaced by the FIXXO Navbar! */}
        <Header />
        <div className="pages">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
