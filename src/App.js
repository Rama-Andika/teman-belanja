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
import ProductRekomendasiList from "./pages/ProductRekomendasiList";
import ProductTerlarisList from "./pages/ProductTerlarisList";
import ProductByKategory from "./pages/ProductByKategory";
import ProductFlashSales from "./pages/ProductFlashSales";
import AccountProfile from "./pages/AccountProfile";
import AccountAddress from "./pages/AccountAddress";
import PesananSaya from "./pages/PesananSaya";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product-detail/:slug/:id" element={<ProductDetail />} />
          <Route
            path="/flash-sales/:slug/:id"
            element={<ProductFlashSalesDetail />}
          />
          <Route path="/flash-sales" element={<ProductFlashSales />} />
          <Route
            path="/product-promo/:slug/:id"
            element={<ProductPromoDetail />}
          />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/checkout/:state" element={<Checkout />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route
            path="/product-rekomendasi-list"
            element={<ProductRekomendasiList />}
          />
          <Route
            path="/product-terlaris-list"
            element={<ProductTerlarisList />}
          />
          <Route path="/category/:kategori" element={<ProductByKategory />} />
          <Route path="/account/profile" element={<AccountProfile />} />
          <Route path="/account/address" element={<AccountAddress />} />
          <Route path="/user/purchase" element={<PesananSaya />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
