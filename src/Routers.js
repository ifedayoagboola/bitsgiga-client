import { Route, Routes } from "react-router-dom";
import AllProductPage from "./components/AllProductPage";
import CardPage from "./components/CartPage";
import FlashSale from "./components/FlashSale";
import FourZeroFour from "./components/FourZeroFour";
import Home from "./components/Home";
import ProductsCompaire from "./components/ProductsCompaire/index";
import SallerPage from "./components/SallerPage";
import Sallers from "./components/Sellers";
import SingleProductPage from "./components/SingleProductPage";
import Wishlist from "./components/Wishlist";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/all-products" element={<AllProductPage />} />
      <Route exact path="/single-product" element={<SingleProductPage />} />
      <Route exact path="/cart" element={<CardPage />} />
      <Route exact path="/wishlist" element={<Wishlist />} />
      <Route exact path="/flash-sale" element={<FlashSale />} />
      <Route exact path="/saller-page" element={<SallerPage />} />
      <Route exact path="/products-compaire" element={<ProductsCompaire />} />
      <Route exact path="/sallers" element={<Sallers />} />
      <Route exact path="*" element={<FourZeroFour />} />
    </Routes>
  );
}
