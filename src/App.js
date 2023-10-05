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
import ProductBySearch from "./pages/ProductBySearch";
import { useStateContext } from "./contexts/ContextProvider";


function App() {
  const { active, setActive, screenSize } = useStateContext();
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <div className="relative">
          {active && screenSize < 1275 && (
            <div className="w-full bg-half-transparent ease-in-out transition-all h-full z-[999999] absolute" onClick={()=> active && setActive(false)}>
              <div className="fixed right-0 duration-1000 w-72  dark:bg-secondary-dark-bg bg-white h-full pt-3 px-3">
                <div className="float-right text-[20px] text-red-400 cursor-pointer" onClick={()=>setActive(false)}>X</div>
              </div>
            </div>
          )}

          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/product-detail/:slug/:id"
                element={<ProductDetail />}
              />
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
              <Route
                path="/category/:kategori"
                element={<ProductByKategory />}
              />
              <Route path="/:search" element={<ProductBySearch />} />
              <Route path="/account/profile" element={<AccountProfile />} />
              <Route path="/account/address" element={<AccountAddress />} />
              <Route path="/user/purchase" element={<PesananSaya />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
