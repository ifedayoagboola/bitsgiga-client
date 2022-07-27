import React from "react";
import LayoutHomeTwo from "../Partials/LayoutHomeTwo";

import datas from "../../data/productsTwo.json";
import SectionStyleThreeHomeTwo from "../Helpers/SectionStyleThreeHomeTwo";
import Banner from "./Banner";

export default function HomeTwo() {
  const { products } = datas;
  return (
    <LayoutHomeTwo>
      <Banner className="banner-wrapper mb-[60px]" />
      <SectionStyleThreeHomeTwo
        products={products}
        showProducts={6}
        sectionTitle="Featured Products"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />
      <SectionStyleThreeHomeTwo
        products={products.slice(3, 7)}
        showProducts={3}
        sectionTitle="Popular Sales"
        seeMoreUrl="/all-products"
        className="feature-products mb-[60px]"
      />
      <SectionStyleThreeHomeTwo
        products={products.reverse().slice(0, 10)}
        showProducts={9}
        sectionTitle="New Arrivals"
        seeMoreUrl="/all-products"
        className="new-arrivals mb-[60px]"
      />
    </LayoutHomeTwo>
  );
}
