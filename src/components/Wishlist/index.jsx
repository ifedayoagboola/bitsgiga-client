import BreadcrumbCom from "../BreadcrumbCom";
import EmptyWishlistError from "../EmptyWishlistError";
import Layout from "../Partials/Layout";

export default function Wishlist() {
  return (
    <Layout>
      <div className="wishlist-page-wrapper w-full">
        <div className="container-x mx-auto">
          <BreadcrumbCom
            paths={[
              { name: "home", path: "/" },
              { name: "cart", path: "/wishlist" },
            ]}
          />
          <EmptyWishlistError />
        </div>
      </div>
    </Layout>
  );
}
