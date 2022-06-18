import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
