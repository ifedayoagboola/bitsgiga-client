import { Route, Routes } from "react-router-dom";
import AllProductPage from "./components/AllProductWidget";
import Home from "./components/Home";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/all-products" element={<AllProductPage />} />
    </Routes>
  );
}
