import { useState } from "react";
import DiscountBanner from "../HomeFour/DiscountBanner";
import Footer from "./Footers/Footer";
import DrawerThree from "../Mobile/DrawerThree";
import HeaderFour from "./Headers/HeaderFour";



export default function LayoutHomeFour({ children, childrenClasses,type }) {
    const [drawer, setDrawer] = useState(false);
    return (
        <>
            <DrawerThree open={drawer} action={() => setDrawer(!drawer)} />
            <div className="w-full overflow-x-hidden">
                <HeaderFour type={4} drawerAction={() => setDrawer(!drawer)} />
                <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
                    {children && children}
                </div>
                <DiscountBanner  />
                <Footer type={type} />
            </div>
        </>
    );
}