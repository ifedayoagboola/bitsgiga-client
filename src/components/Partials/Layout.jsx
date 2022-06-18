import DiscountBanner from "../DiscountBanner";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children && children}
      <DiscountBanner />
      <Footer />
    </>
  );
}
