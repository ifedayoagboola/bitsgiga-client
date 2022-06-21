import datas from "../../data/products.json";
import SectionStyleOne from "../Helpers/SectionStyleOne";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Layout from "../Partials/Layout";
import Banner from "./Banner";
import BrandSection from "./BrandSection";
import CampaignCountDown from "./CampaignCountDown";

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
          className="category-products mb-[60px]"
        />
        <BrandSection
          sectionTitle="Shop by Brand"
          className="brand-section-wrapper mb-[60px]"
        />
        <CampaignCountDown
          className="mb-[60px]"
          lastDate="2023-03-04 4:00:00"
        />
        <ViewMoreTitle
          className="top-selling-product mb-[60px]"
          seeMoreUrl="#"
          categoryTitle="Top Selling Products"
        >
          <SectionStyleTwo products={products.slice(3, products.length)} />
        </ViewMoreTitle>
      </Layout>
    </>
  );
}
