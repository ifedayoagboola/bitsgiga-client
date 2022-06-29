import BreadcrumbCom from "../BreadcrumbCom";
import EmptyWishlistError from "../EmptyWishlistError";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import ProductsTable from "./ProductsTable";

export default function Wishlist({ wishlist = true }) {
  return (
    <Layout childrenClasses={wishlist ? "pt-0 pb-0" : ""}>
      <div className="wishlist-page-wrapper w-full bg-white pb-[60px]">
        <div className="w-full">
          <PageTitle
            title="Wishlist"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "wishlist", path: "/wishlist" },
            ]}
          />
        </div>
        <div className="w-full mt-[23px]">
          <div className="container-x mx-auto">
            <ProductsTable className="mb-[30px]" />
            <div className="w-full mt-[30px] flex justify-end">
              <div className="flex space-x-[30px] items-center">
                <button type="button">
                  <div className="w-full text-sm font-semibold text-qred">
                    Clean Wishlist
                  </div>
                </button>
                <div className="w-[180px] h-[50px]">
                  <button type="button" className="yellow-btn">
                    <div className="w-full text-sm font-semibold">
                      Add to Cart All
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!wishlist && (
        <div className="wishlist-page-wrapper w-full">
          <div className="container-x mx-auto">
            <BreadcrumbCom
              paths={[
                { name: "home", path: "/" },
                { name: "wishlist", path: "/wishlist" },
              ]}
            />
            <EmptyWishlistError />
          </div>
        </div>
      )}
    </Layout>
  );
}
