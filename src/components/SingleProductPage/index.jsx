import BreadcrumbCom from "../BreadcrumbCom";
import Layout from "../Partials/Layout";
import ProductView from "./ProductView";

export default function SingleProductPage() {
  return (
    <>
      <Layout childrenClasses="pt-0">
        <div className="single-product-wrapper w-full bg-white pt-[30px]">
          <div className="breadcrumb-wrapper w-full ">
            <div className="container-x mx-auto">
              <BreadcrumbCom
                paths={[
                  { name: "home", path: "/" },
                  { name: "single product", path: "/single-product" },
                ]}
              />
            </div>
          </div>
          <div className="w-full bg-white pb-[60px]">
            <div className="container-x mx-auto">
              <ProductView />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
