import DiscountBanner from "../DiscountBanner";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, childrenClasses }) {
  return (
    <>
      <Header />
      <div className={`w-full pt-[30px] pb-[60px] ${childrenClasses || ""}`}>
        {children && children}
      </div>
      <DiscountBanner />
      <Footer />
    </>
  );
}
