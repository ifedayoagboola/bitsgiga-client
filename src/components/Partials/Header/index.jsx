import Middlebar from "./Middlebar";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <>
      <TopBar className="quomodo-shop-top-bar" />
      <Middlebar className="quomodo-shop-middle-bar" />
    </>
  );
}
