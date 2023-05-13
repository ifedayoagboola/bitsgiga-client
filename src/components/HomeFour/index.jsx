import React from 'react';
import LayoutHomeFour from "../Partials/LayoutHomeFour";
import BrandSection from "../Home/BrandSection";
import ProductsAds from "../Home/ProductsAds";
import Banner from "./Banner";
import SectionStyleOneHmFour from "../Helpers/SectionStyleOneHmFour";
import datas from "../../data/products.json";

function Index() {
    const { products } = datas;
    return(
    <LayoutHomeFour>
        <Banner/>
        <SectionStyleOneHmFour products={products}
                               sectionTitle="New Arrivals"
                               seeMoreUrl="/all-products"
                               className="new-products mb-[60px]"/>
        <BrandSection/>
        <ProductsAds
            ads={[`${process.env.PUBLIC_URL}/assets/images/ads-3.png`]}
            className="products-ads-section mb-[60px]"
        />
        <ProductsAds
            sectionHeight="164"
            ads={[`${process.env.PUBLIC_URL}/assets/images/ads-4.png`]}
            className="products-ads-section mb-[60px]"
        />
    </LayoutHomeFour>
    );
}

export default Index;