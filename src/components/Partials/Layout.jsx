import DiscountBanner from "../DiscountBanner";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, childrenClasses }) {
  return (
    <>
      <Header />
      <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
        {children && children}
      </div>
      <DiscountBanner />
      <Footer />
    </>
  );
}
