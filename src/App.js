import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Keranjang from "./pages/Keranjang";
import ProductFlashSalesDetail from "./pages/ProductFlashSalesDetail";
import ProductPromoDetail from "./pages/ProductPromoDetail";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product-detail/:slug/:id' element={<ProductDetail />} />
        <Route path='/flash-sale/:slug/:id' element={<ProductFlashSalesDetail />} />
        <Route path='/product-promo/:slug/:id' element={<ProductPromoDetail />} />
        <Route path='/keranjang' element={<Keranjang />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/product-list' element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
