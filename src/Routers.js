import { Route, Routes } from "react-router-dom";
import AllProductPage from "./components/AllProductPage";
import Home from "./components/Home";
import SingleProductPage from "./components/SingleProductPage";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/all-products" element={<AllProductPage />} />
      <Route exact path="/single-product" element={<SingleProductPage />} />
    </Routes>
  );
}
