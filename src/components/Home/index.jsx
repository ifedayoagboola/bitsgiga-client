// import { useEffect, useState } from "react";
import datas from "../../data/products.json";
import SectionStyleOne from "../Helpers/SectionStyleOne";
import Layout from "../Partials/Layout";
import Banner from "./Banner";

export default function Home() {
  const { products } = datas;
  const brands = [];
  products.forEach((product) => {
    brands.push(product.brand);
  });
  return (
    <>
      <Layout>
        <Banner className="banner-wrapper mb-[60px]" />
        <SectionStyleOne
          products={products}
          brands={brands}
          categoryTitle="Mobile & Tablet"
          sectionTitle="Gamer World"
          seeMoreUrl="/"
          className="category-products"
        />
      </Layout>
    </>
  );
}
