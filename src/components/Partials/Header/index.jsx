import Middlebar from "./Middlebar";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <div className="mb-8">
      <TopBar className="quomodo-shop-top-bar" />
      <Middlebar className="quomodo-shop-middle-bar" />
      <Navbar className="quomodo-shop-nav-bar" />
    </div>
  );
}
