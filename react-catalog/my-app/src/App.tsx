import { Routes, Route } from 'react-router-dom';
import { NotFound } from './Pages/NotFound';
import { Header } from './Components/Header';
import { About } from './Pages/About';
import { Catalog } from './Pages/Catalog';
import { ProductDetails } from './Pages/ProductDetails';
import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/productDetails/:productId"
            element={<ProductDetails />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
