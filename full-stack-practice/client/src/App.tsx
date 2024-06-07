import { Routes, Route } from 'react-router-dom';
import { About } from './Pages/About';
import { Catalog } from './Pages/Catalog';
import { Header } from './Components/Header';
import { NotFound } from './Pages/NotFound';
import { ProductDetails } from './Pages/ProductDetails';
import './App.css';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route
            path="/productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
