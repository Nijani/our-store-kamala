// src/App.jsx
import React from 'react';
import CatalogPage from './pages/CatalogPage.jsx';
import CartPage from './pages/CartPage.jsx';

function App() {
  return (
    <div>
      <h1>My Grocery Shop</h1>
      <CatalogPage />
      <CartPage />
    </div>
  );
}

export default App;
