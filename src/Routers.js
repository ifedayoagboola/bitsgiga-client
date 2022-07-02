import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import AllProductPage from "./components/AllProductPage";
import Blogs from "./components/Blogs";
import Blog from "./components/Blogs/Blog.jsx";
import CardPage from "./components/CartPage";
import CheakoutPage from "./components/CheakoutPage";
import FlashSale from "./components/FlashSale";
import FourZeroFour from "./components/FourZeroFour";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ProductsCompaire from "./components/ProductsCompaire/index";
import SallerPage from "./components/SallerPage";
import Sallers from "./components/Sellers";
import SingleProductPage from "./components/SingleProductPage";
import TermsCondition from "./components/TermsCondition";
import Wishlist from "./components/Wishlist";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/all-products" element={<AllProductPage />} />
      <Route exact path="/single-product" element={<SingleProductPage />} />
      <Route exact path="/cart" element={<CardPage />} />
      <Route exact path="/checkout" element={<CheakoutPage />} />
      <Route exact path="/wishlist" element={<Wishlist />} />
      <Route exact path="/flash-sale" element={<FlashSale />} />
      <Route exact path="/saller-page" element={<SallerPage />} />
      <Route exact path="/products-compaire" element={<ProductsCompaire />} />
      <Route exact path="/sallers" element={<Sallers />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/blogs" element={<Blogs />} />
      <Route exact path="/blogs/blog" element={<Blog />} />
      <Route exact path="/terms-conditions" element={<TermsCondition />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="*" element={<FourZeroFour />} />
    </Routes>
  );
}
