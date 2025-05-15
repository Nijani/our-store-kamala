import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';

function App() {
  const sampleProducts = [
    { id: 1, name: 'Shampoo', price: 5 },
    { id: 2, name: 'Toothpaste', price: 3 }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CatalogPage products={sampleProducts} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
