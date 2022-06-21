import Middlebar from "./Middlebar";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="header-section-wrapper mb-[30px]">
      <TopBar className="quomodo-shop-top-bar" />
      <Middlebar className="quomodo-shop-middle-bar" />
      <Navbar className="quomodo-shop-nav-bar " />
    </header>
  );
}
